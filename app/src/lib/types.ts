export interface User {
  id: string
  email: string
  name?: string
  orgId: string
  role: 'owner' | 'admin' | 'viewer'
}

export interface Vendor {
  id: string
  orgId: string
  name: string
  email?: string
  trade?: string
  status: 'compliant' | 'expiring' | 'expired' | 'missing' | 'review'
  agentEmail?: string
}

export interface Certificate {
  id: string
  vendorId: string
  fileName: string
  status: 'pending' | 'extracted' | 'review' | 'approved' | 'rejected'
  confidence: number
  extractedAt: string
}

export interface RequirementTemplate {
  id: string
  orgId: string
  name: string
  coverages: Array<{ type: string; minimumLimit: string; additionalInsured: boolean }>
}

export interface AuditRequest {
  id: string
  name: string
  email: string
  company: string
  vendorCount: string
  trackingMethod: string
  shareLink?: string
  createdAt: string
  status: string
}
