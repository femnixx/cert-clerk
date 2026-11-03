import { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { api } from '../../lib/api'

export default function MagicLinkConsume() {
  const [searchParams] = useSearchParams()
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading')
  const navigate = useNavigate()
  const token = searchParams.get('token')

  useEffect(() => {
    if (!token) {
      setStatus('error')
      return
    }
    api.auth.consumeMagicLink(token)
      .then(() => {
        setStatus('success')
        setTimeout(() => navigate('/dashboard'), 1000)
      })
      .catch(() => setStatus('error'))
  }, [token, navigate])

  return (
    <div className="min-h-screen bg-bg flex items-center justify-center p-4">
      <div className="w-full max-w-md text-center space-y-4">
        {status === 'loading' && <p>Signing you in...</p>}
        {status === 'success' && <p className="text-compliant">Signed in successfully! Redirecting...</p>}
        {status === 'error' && (
          <div className="space-y-2">
            <p className="text-expired">This link is invalid or has expired.</p>
            <button onClick={() => navigate('/auth/request')} className="text-accent">Request a new link</button>
          </div>
        )}
      </div>
    </div>
  )
}
