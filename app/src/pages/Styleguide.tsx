import { StatusBadge, Button } from '../components/ui'

export default function Styleguide() {
  return (
    <div className="min-h-screen bg-bg p-6 space-y-8">
      <div>
        <h1 className="text-3xl font-bold font-display">Styleguide</h1>
        <p className="text-text-muted">Design tokens and components</p>
      </div>
      
      <section className="space-y-4">
        <h2 className="text-xl font-bold">Colors</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          <div className="p-4 bg-bg border border-border">bg</div>
          <div className="p-4 bg-bg-elev border border-border">bg-elev</div>
          <div className="p-4 bg-accent text-white">accent</div>
          <div className="p-4 border border-border"><span className="text-text">text</span> / <span className="text-text-muted">muted</span></div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold">Status Badges (icon + text)</h2>
        <div className="flex flex-wrap gap-2">
          <StatusBadge status="compliant" label="Compliant" />
          <StatusBadge status="expiring" label="Expiring ≤60d" />
          <StatusBadge status="expired" label="Expired" />
          <StatusBadge status="missing" label="Missing" />
          <StatusBadge status="review" label="Needs review" />
          <StatusBadge status="pending" label="Pending" />
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold">Buttons</h2>
        <div className="flex gap-2">
          <Button>Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
        </div>
      </section>
    </div>
  )
}
