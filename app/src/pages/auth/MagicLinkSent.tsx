import { useLocation, Link } from 'react-router-dom'

export default function MagicLinkSent() {
  const location = useLocation()
  const email = location.state?.email || 'your email'

  return (
    <div className="min-h-screen bg-bg flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-6 text-center">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Check your email</h1>
          <p className="text-text-muted">We sent a magic link to {email}</p>
        </div>
        <div className="p-6 border border-border bg-bg-elev space-y-4">
          <p className="text-sm">Click the link in the email to sign in. The link will expire soon.</p>
          <Link to="/auth/request" className="text-accent hover:text-accent-strong">Use a different email</Link>
        </div>
      </div>
    </div>
  )
}
