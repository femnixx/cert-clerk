import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Input } from '../components/ui'
import { api } from '../lib/api'

export default function MagicLinkRequest() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      await api.auth.requestMagicLink(email)
      navigate('/auth/sent', { state: { email } })
    } catch (err) {
      setError('Failed to send magic link. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-bg flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold">Sign in to CertClerk</h1>
          <p className="text-text-muted">Enter your email to receive a magic link</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4 p-6 border border-border bg-bg-elev">
          <Input label="Email" type="email" value={email} onChange={(e: any) => setEmail(e.target.value)} required autoComplete="email" />
          {error && <p className="text-expired text-sm">{error}</p>}
          <Button type="submit" disabled={loading} className="w-full">{loading ? 'Sending...' : 'Send magic link'}</Button>
        </form>
      </div>
    </div>
  )
}
