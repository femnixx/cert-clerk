# Lighthouse & Axe Self-Audit Checklist

## Pre-deployment Checks
- [ ] Site loads locally with no console errors
- [ ] All pages render correctly
- [ ] Forms are accessible (labels, focus states)
- [ ] Images have alt text
- [ ] Skip link works
- [ ] Semantic HTML used throughout

## Lighthouse Targets (Mobile)
| Category | Target | Status |
|---|---|---|
| Performance | ≥95 | [ ] |
| Accessibility | ≥95 | [ ] |
| Best Practices | ≥95 | [ ] |
| SEO | ≥95 | [ ] |

### Performance checks
- [ ] Minimal JavaScript (<50KB gzipped)
- [ ] CSS optimized (<30KB gzipped)
- [ ] Fonts preconnected/optimized
- [ ] No render-blocking resources
- [ ] Images optimized (SVG used)

### Accessibility checks (WCAG AA)
- [ ] Color contrast meets AA standards
- [ ] Keyboard navigation works
- [ ] Focus indicators visible
- [ ] Form labels associated
- [ ] ARIA used where appropriate
- [ ] Skip to main content link
- [ ] Semantic landmarks (header, main, footer, nav)

### SEO checks
- [ ] Meta title and description present
- [ ] Canonical URLs set
- [ ] Open Graph tags present
- [ ] JSON-LD structured data
- [ ] sitemap.xml present
- [ ] robots.txt present

### Security/Best Practices
- [ ] HTTPS enforced
- [ ] No mixed content
- [ ] Security headers considered
- [ ] Honeypot on forms
- [ ] Rate limiting implemented (needs production hardening)

## Manual Testing
- [ ] Dark mode works via prefers-color-scheme
- [ ] Responsive at 360px width
- [ ] All CTAs clickable
- [ ] Form validation works
- [ ] Mobile navigation usable

## axe DevTools
Run axe DevTools and fix any violations.
