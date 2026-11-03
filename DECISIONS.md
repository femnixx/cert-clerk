# DECISIONS.md - CertClerk

## Decision Log

| Date | Decision | Rationale |
|---|---|---|
| 2026-11-03 | Project name: **CertClerk** (working) - recommend keeping as primary candidate pending domain/trademark check | Fits the core function (certificate clerk/management). Short, memorable. Need to verify .com availability and trademark conflicts before finalizing. |
| 2026-11-03 | Focus ICP: **ICP-A - Small Property Managers (10-150 vendors)** first | Research suggests property managers are the better wedge. More standardized vendor requirements, often have compliance responsibilities tied to leases, less complex multi-trade GC workflows initially. Easier to build for one template model. |
| 2026-11-03 | Scope: US only, ACORD 25 focus initially | Dominant form in US market, reduces complexity. International forms and compliance nuances deferred. |
| 2026-11-03 | Won't build: lien waivers, non-US forms, insurer verification, enterprise SSO | Keep MVP focused on COI tracking/gap detection. Insurer verification explicitly out of scope per HARD RULE 3 (tool must never claim to verify coverage with insurers). |
| 2026-11-03 | Infrastructure preference: Cloudflare stack where possible, avoid Vercel Hobby (non-commercial), avoid Supabase free for customer app | Cost-conscious approach per HARD RULE 2. D1/R2/Workers/Pages fit free-tier goals if caps respected. PDF parsing must stay outside Workers. |
| 2026-11-03 | LLM: paid pay-per-use for real customer COIs, free tier only for prototyping with own samples | Privacy/data training concerns with free tiers. |
| 2026-11-03 | Magic link vendor uploads (no account) | Reduces friction for vendors who just need to submit once. |
| 2026-11-03 | Human review queue for low-confidence extractions | Balances automation with accuracy/liability concerns. |
| 2026-11-03 | Agent-chase emails (to vendor AND insurance agent) | Key differentiator from simple upload portals. |
| 2026-11-03 | Bulk import (200 PDFs) as differentiator | Saves time for onboarding/property managers migrating from spreadsheets. |
| 2026-11-03 | Landing page framework: Astro (static) | Lightweight, perfect for Cloudflare Pages, minimal JS, great SEO, easy to integrate with Pages Functions. |
| 2026-11-03 | Styling: Vanilla CSS with CSS variables, light/dark mode via prefers-color-scheme | No heavy UI frameworks, full control, meets design requirements. |
| 2026-11-03 | Typography: Syne (headings) + Plus Jakarta Sans (body) from Google Fonts | High-end pairing as specified, efficient loading. |
| 2026-11-03 | Backend: Cloudflare Pages Functions | Native to Pages, integrates with D1/R2. |
| 2026-11-03 | Database: Cloudflare D1 for audit_requests | Fits free tier, simple SQLite. |
| 2026-11-03 | Storage: Cloudflare R2 for file uploads | Free tier generous, zero egress. |
| 2026-11-03 | Email: Brevo for confirmations | Free tier 300/day as specified. |
| 2026-11-03 | Analytics: Cloudflare Web Analytics | Privacy-friendly, no cookies. |
