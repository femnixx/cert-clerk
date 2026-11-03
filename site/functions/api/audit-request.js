export async function onRequestPost(context) {
  const { request, env } = context;
  
  // Rate limiting by IP (simple implementation - production needs better)
  const ip = request.headers.get('CF-Connecting-IP') || 'unknown';
  const key = `rate:${ip}`;
  
  // Basic validation would go here - in production use KV or Durable Objects
  
  try {
    const formData = await request.formData();
    
    // Honeypot check
    if (formData.get('website')) {
      return new Response(JSON.stringify({ ok: true }), { status: 200 });
    }
    
    const name = formData.get('name')?.toString().trim();
    const email = formData.get('email')?.toString().trim();
    const company = formData.get('company')?.toString().trim();
    const vendorCount = formData.get('vendorCount')?.toString();
    const tracking = formData.get('tracking')?.toString();
    const shareLink = formData.get('shareLink')?.toString().trim();
    
    if (!name || !email || !company || !vendorCount || !tracking) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), { status: 400 });
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(JSON.stringify({ error: 'Invalid email' }), { status: 400 });
    }
    
    // Insert into D1
    const stmt = env.DB.prepare(
      `INSERT INTO audit_requests (name, email, company, vendor_count, tracking_method, share_link, created_at) 
       VALUES (?, ?, ?, ?, ?, ?, datetime('now'))`
    );
    await stmt.bind(name, email, company, vendorCount, tracking, shareLink || null).run();
    
    // Send confirmation email via Brevo (placeholder - needs API key)
    if (env.BREVO_API_KEY) {
      try {
        await fetch('https://api.brevo.com/v3/smtp/email', {
          method: 'POST',
          headers: {
            'accept': 'application/json',
            'api-key': env.BREVO_API_KEY,
            'content-type': 'application/json'
          },
          body: JSON.stringify({
            sender: { name: 'CertClerk', email: 'hello@certclerk.com' },
            to: [{ email: email, name: name }],
            subject: 'Your CertClerk COI gap audit request',
            htmlContent: `<p>Hi ${name},</p><p>Thanks for requesting your free COI gap audit. We'll review your submission and send your gap report within 24 hours.</p><p>— The CertClerk Team</p>`
          })
        });
      } catch (e) {
        // Log error but don't fail the request
      }
    }
    
    return new Response(JSON.stringify({ ok: true, message: 'Request received' }), { 
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: 'Failed to submit' }), { status: 500 });
  }
}
