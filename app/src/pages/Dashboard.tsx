import { StatusBadge, Button } from '../components/ui'

export default function Dashboard() {
  const counts = { compliant: 12, expiring: 3, expired: 1, missing: 2, review: 2 }
  
  return (
    <div className="min-h-screen bg-bg">
      <header className="border-b border-border bg-bg-elev">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold font-display">CertClerk</h1>
          <nav className="flex gap-4 text-sm">
            <a href="/dashboard" className="text-text">Dashboard</a>
            <a href="/vendors" className="text-text-muted">Vendors</a>
            <a href="/review" className="text-text-muted">Review</a>
            <a href="/templates" className="text-text-muted">Templates</a>
          </nav>
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-4 py-6 space-y-6">
        <div>
          <h2 className="text-2xl font-bold">Dashboard</h2>
          <p className="text-text-muted">Overview of vendor compliance</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <div className="p-4 border border-border bg-bg-elev">
            <div className="text-2xl font-bold">{counts.compliant}</div>
            <StatusBadge status="compliant" label="Compliant" />
          </div>
          <div className="p-4 border border-border bg-bg-elev">
            <div className="text-2xl font-bold">{counts.expiring}</div>
            <StatusBadge status="expiring" label="Expiring ≤60d" />
          </div>
          <div className="p-4 border border-border bg-bg-elev">
            <div className="text-2xl font-bold">{counts.expired}</div>
            <StatusBadge status="expired" label="Expired" />
          </div>
          <div className="p-4 border border-border bg-bg-elev">
            <div className="text-2xl font-bold">{counts.missing}</div>
            <StatusBadge status="missing" label="Missing" />
          </div>
          <div className="p-4 border border-border bg-bg-elev">
            <div className="text-2xl font-bold">{counts.review}</div>
            <StatusBadge status="review" label="Needs review" />
          </div>
        </div>
        <div className="p-6 border border-border bg-bg-elev">
          <h3 className="font-bold mb-4">Needs action today</h3>
          <p className="text-text-muted text-sm">No items requiring immediate action.</p>
        </div>
      </main>
    </div>
  )
}
