export function StatusBadge({ status, label }: { status: string; label: string }) {
  const colors: Record<string, string> = {
    compliant: 'text-compliant border-compliant/40',
    expiring: 'text-expiring border-expiring/40',
    expired: 'text-expired border-expired/40',
    missing: 'text-missing border-missing/40',
    review: 'text-review border-review/40',
    pending: 'text-text-muted border-border',
  }
  const icons: Record<string, string> = {
    compliant: '✓',
    expiring: '⏰',
    expired: '✗',
    missing: '⚠',
    review: '👁',
    pending: '○',
  }
  return (
    <span className={`inline-flex items-center gap-1 px-2 py-0.5 border text-sm ${colors[status] || 'text-text-muted border-border'}`} aria-label={label}>
      <span aria-hidden="true">{icons[status] || '•'}</span>
      {label}
    </span>
  )
}

export function Button({ children, variant = 'primary', ...props }: any) {
  const base = 'px-4 py-2 font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-focus'
  const variants: Record<string, string> = {
    primary: 'bg-accent text-white hover:bg-accent-strong',
    secondary: 'border border-border text-text hover:bg-bg-elev',
    ghost: 'text-text-muted hover:text-text',
  }
  return <button className={`${base} ${variants[variant]}`} {...props}>{children}</button>
}

export function Input({ label, ...props }: any) {
  return (
    <div className="flex flex-col gap-1">
      {label && <label className="text-sm font-medium">{label}</label>}
      <input className="px-3 py-2 border border-border bg-transparent text-text focus-visible:outline focus-visible:outline-2 focus-visible:outline-focus" {...props} />
    </div>
  )
}
