const API_BASE = import.meta.env.VITE_API_BASE || '/api'

export async function apiRequest<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
  const res = await fetch(`${API_BASE}${endpoint}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  })
  if (!res.ok) throw new Error(`API error: ${res.status}`)
  return res.json()
}

export const api = {
  auth: {
    requestMagicLink: (email: string) => apiRequest('/auth/magic-link', { method: 'POST', body: JSON.stringify({ email }) }),
    consumeMagicLink: (token: string) => apiRequest('/auth/consume', { method: 'POST', body: JSON.stringify({ token }) }),
  },
  vendors: {
    list: () => apiRequest<{ vendors: any[] }>('/vendors'),
    create: (data: any) => apiRequest('/vendors', { method: 'POST', body: JSON.stringify(data) }),
  },
  certificates: {
    list: () => apiRequest<{ certificates: any[] }>('/certificates'),
    reviewQueue: () => apiRequest<{ items: any[] }>('/certificates/review-queue'),
  },
  templates: {
    list: () => apiRequest<{ templates: any[] }>('/templates'),
  },
}
