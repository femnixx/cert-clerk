export async function onRequestPost(context) {
  const { request, env } = context;
  const formData = await request.formData();
  
  // Honeypot check
  if (formData.get('website')) {
    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  }
  
  // Basic validation
  const name = formData.get('name')?.toString().trim();
  const email = formData.get('email')?.toString().trim();
  const company = formData.get('company')?.toString().trim();
  const vendorCount = formData.get('vendorCount')?.toString();
  const tracking = formData.get('tracking')?.toString();
  const shareLink = formData.get('shareLink')?.toString().trim();
  
  if (!name || !email || !company || !vendorCount || !tracking) {
    return new Response(JSON.stringify({ error: 'Missing required fields' }), { status: 400 });
  }
  
  // Rate limiting by IP (simple in-memory is not persistent; production needs KV/Durable Object)
  // For this scaffold, we'll note it needs proper implementation
  
  try {
    // Insert into D1
    const stmt = env.DB.prepare(
      `INSERT INTO audit_requests (name, email, company, vendor_count, tracking_method, share_link, created_at) 
       VALUES (?, ?, ?, ?, ?, ?, datetime('now'))`
    );
    await stmt.bind(name, email, company, vendorCount, tracking, shareLink || null).run();
    
    // Send confirmation email via Brevo (placeholder)
    // In production, call Brevo API with env.BREVO_API_KEY
    
    return new Response(JSON.stringify({ ok: true, message: 'Request received' }), { 
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: 'Failed to submit' }), { status: 500 });
  }
}
