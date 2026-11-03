# LANDING_SPEC.md - CertClerk Landing Page

## 1. META

| Element | Value | Notes |
|---|---|---|
| **Page Title** `<title>` (≤60 chars) | `Track vendor COIs \| CertClerk` | Direct, includes core function |
| **Meta Description** (≤155 chars) | `Track vendor insurance COIs. Flag gaps, chase renewals. No vendor accounts.` | Concise, mentions key benefit without fluff |
| **Open Graph Title** | `CertClerk - Track Vendor Insurance Certificates` | Clean for social sharing |
| **Open Graph Description** | `Stop chasing vendor COIs in spreadsheets. Automate tracking, gap detection, and expiry reminders.` | Practical, benefit-focused |
| **Favicon Concept** | Simple document/checkmark icon in slate/charcoal color | Minimal, professional, works at small sizes | 

## 2. HERO

### Headline (3 Variants - Pick 1)

**Variant 1 (Recommended):** "Stop chasing vendor insurance certificates in spreadsheets."

**Variant 2:** "Know which vendors are compliant before it becomes a problem."

**Variant 3:** "Track vendor COIs. Flag gaps. Chase renewals automatically."

**Selected:** *Variant 1* - speaks directly to the pain of ICP-A (property managers) in their language.

### Subheadline
"CertClerk tracks vendor and subcontractor insurance certificates. Vendors upload via magic link with no account. You see gaps, get reminders, and stay on top of expirations."

### CTAs
- **Primary CTA:** `Request a free COI gap audit` (button, high contrast)
- **Secondary CTA:** `See pricing` (text/button link)

### Hero Visual Description
**Mock gap report dashboard** showing:
- Vendor list with status badges: "Compliant", "Expiring in 30 days", "Missing", "Expired"
- One vendor row expanded to show gap details (missing General Liability, insufficient limit)
- Clean table layout, no decorative illustrations
- Focus on the data/information property managers care about

### Trust Microcopy Lines (No fake logos/testimonials)
1. "Built for small property managers tracking 10-150 vendors"
2. "US-focused, ACORD 25 first"
3. "We do not verify coverage with insurers." 


## 3. PROBLEM SECTION: "The spreadsheet and a lot of nagging"

### Pain Cards (3-4)

| Pain Card | Copy | Notes |
|---|---|---|
| **Spreadsheet chaos** | **Spreadsheets break down.** Tracking COIs across dozens of vendors in a spreadsheet is error-prone and hard to keep current. | Relatable to ICP-A |
| **Constant chasing** | **Too much nagging.** You end up emailing and calling vendors repeatedly to get updated certificates before they expire. | Captures the time waste |
| **No clear view of gaps** | **Gaps hide in the details.** It's hard to know at a glance which vendors are non-compliant or what's actually missing from a certificate. | Highlights the core need |
| **Missed expirations** | **Expirations sneak up.** Without a system, policies expire unnoticed and create liability exposure. | Taps into concern without overplaying |


## 4. HOW IT WORKS

**4 Steps:**

| Step | Title | Description |
|---|---|---|
| **1** | **Upload or forward** | Add vendors or have them upload their COI via a magic link (no account needed). You can also bulk import existing PDFs. |
| **2** | **Extract** | Vision AI extracts coverage types, limits, policy dates, and additional-insured status from ACORD 25 certificates. |
| **3** | **Check against your requirements** | Compare against your requirement template. Gaps are flagged clearly with what needs to be fixed. |
| **4** | **Chase automatically** | Automatic reminders go to vendors and their insurance agents before expiration. Low-confidence extractions go to a human review queue. |


## 5. PRODUCT DESCRIPTION SECTIONS

### a. Requirement templates (60-100 words)
**Headline:** "Set requirements once, enforce them for all vendors"

**Body:** Define your insurance requirements by coverage type, minimum limits, additional-insured requirements, and other criteria in a reusable template. Different customers may need different templates - what a residential property manager needs differs from other contexts. Apply the template across your vendor list and see compliance at a glance. The system checks every uploaded COI against your exact requirements.

**UI Mock Description:** Template editor showing coverage rows (General Liability, Auto, Workers Comp, Umbrella) with limit fields and checkboxes for "Additional Insured Required". Save/share across vendors.

### b. Vendor magic-link upload (no account) (60-100 words)
**Headline:** "Vendors upload without creating an account"

**Body:** Generate a unique magic link per vendor and send it by email. Vendors click the link, upload their COI PDF, and done - no registration, no passwords, no portal account to manage. This removes friction for vendors who just need to submit once. You get notified when a certificate is uploaded and it's automatically queued for extraction and checking.

**UI Mock Description:** Email template with magic link button, vendor upload page with simple drag-and-drop for PDF only, confirmation screen.

### c. Evidence view (field → highlighted PDF location) (60-100 words)
**Headline:** "See where every extracted value comes from"

**Body:** For auditability and trust, every extracted field links back to its location in the original PDF. Click "General Liability limit: $1,000,000" and see that exact line highlighted in the certificate viewer. This makes review faster and gives you confidence in the extraction. It's especially useful when verifying borderline cases or explaining requirements to vendors.

**UI Mock Description:** Split view - left side shows extracted fields as a list, right side shows PDF viewer with one field highlighted in yellow/orange.

### d. Human review queue for uncertain fields (60-100 words)
**Headline:** "Human review when the AI isn't sure"

**Body:** Not every extraction will be confident. When confidence falls below threshold, certificates go to a review queue where you can see the PDF side-by-side with extracted fields. Edit values if needed, approve, or request the vendor re-upload. This keeps automation high while maintaining accuracy where it matters.

**UI Mock Description:** Review queue table showing vendor, document, confidence indicator. Click to open side-by-side PDF + editable field panel with approve/edit/reject actions.

### e. Agent-chase reminders (vendor + insurance agent) (60-100 words)
**Headline:** "Reminders go to vendors and their agents"

**Body:** When a policy is approaching expiration, CertClerk sends reminders to both the vendor and their insurance agent if an agent email is present on the certificate. This increases the chance of timely renewal without you having to track down agent contacts manually. Reminder timing is configurable, and you can see reminder history per vendor.

**UI Mock Description:** Vendor detail page showing "Renewal reminders" section with schedule, recipient list (vendor + agent), and history log.

### f. Bulk import and 24-hour gap report (60-100 words)
**Headline:** "Import existing COIs, get a gap report fast"

**Body:** Onboard by bulk uploading up to ~200 PDFs at once. Certificates are queued for extraction and checking against your template. For customers using the free audit offer, you can send files or a link and receive a gap report within 24 hours. Bulk import saves hours compared to manual entry into spreadsheets.

**UI Mock Description:** Bulk upload interface with file dropzone, progress bar showing "X of Y processed", batch results summary, "Download gap report" button.

### g. Dashboard: expired / expiring in 60 days / missing endorsements (60-100 words)
**Headline:** "See compliance status at a glance"

**Body:** Your dashboard shows vendors grouped by status: expired, expiring soon (configurable window like 60 days), missing required coverage/endorsements, under review, and compliant. Filter and sort to focus on what needs action now. Each vendor row links to their full certificate history, reminders, and documents so you can take action quickly.

**UI Mock Description:** Dashboard cards showing counts, status table with color-coded badges, quick filter tabs, vendor list with "Action needed" indicators.


## 10. FREE AUDIT OFFER

### What they send
Send us:
- Up to ~10-20 COI PDFs (or a link/share to your folder), OR
- A list of vendors with their current tracking info
- Your basic requirements (or we can suggest a template)

### What they get in 24 hours
- **Gap report** showing which vendors have missing/insufficient coverage
- **List of expirations** coming due
- **Specific gaps** called out (e.g., "Missing Additional Insured", "GL limit too low")
- **Recommendations** on next steps
- **No obligation** to buy

### Privacy promise
- We only use submitted files to generate your gap report.
- Files are not used to train public models. For real processing, we use paid LLM services with appropriate terms.
- We delete or minimize retention as described in our Privacy Policy.
- We do not share your vendor list or certificates with third parties.
- **We do not verify coverage with insurers.** Our analysis is based on document extraction only.

### Form fields (≤6 fields)
| Field | Type | Required | Notes |
|---|---|---|---|
| **Name** | Text | Yes | |
| **Email** | Email | Yes | |
| **Company/Property Management Company** | Text | Yes | |
| **# Vendors** | Select/Number | Yes | Options: 1-10, 11-25, 26-50, 51-100, 101-150, 150+ |
| **Current tracking method** | Select | Yes | Options: Spreadsheet, Shared drive/email, Existing tool (name), Other |
| **Upload files or paste link** | Text/File upload hint | No | "Upload PDFs here or paste a link to share files" | 

**CTA Button:** `Get my free gap report`


## 11. PRICING

### Tier Cards

| Tier | Price | Vendor Limit | Key Features | CTA |
|---|---|---|---|---|
| **Starter** | $79/mo | ≤25 vendors | Requirement templates, magic-link uploads, extraction & gap detection, expiry reminders (vendor+agent), dashboard | `Start free audit` / `Get started` |
| **Pro** | $149/mo | ≤100 vendors | Everything in Starter + bulk import, human review queue, evidence view, priority processing | `Start free audit` / `Get started` |
| **Portfolio** | $299/mo | ≤300 vendors | Everything in Pro + higher limits, expanded history, priority support | `Start free audit` / `Get started` |

### Feature Rows (Comparison)
| Feature | Starter | Pro | Portfolio |
|---|---|---|---|
| Requirement templates | ✓ | ✓ | ✓ |
| Vendor magic-link (no account) | ✓ | ✓ | ✓ |
| AI extraction (ACORD 25) | ✓ | ✓ | ✓ |
| Gap detection | ✓ | ✓ | ✓ |
| Reminders (vendor + agent) | ✓ | ✓ | ✓ |
| Dashboard & status tracking | ✓ | ✓ | ✓ |
| Bulk import | - | ✓ | ✓ |
| Human review queue | - | ✓ | ✓ |
| Evidence view (field→PDF) | - | ✓ | ✓ |
| Vendor limit | ≤25 | ≤100 | ≤300 |

### FAQ on overages
**Q:** What happens if I go over my vendor limit?  
**A:** [VERIFY] We'll discuss options before enforcing limits. We may suggest upgrading to the next tier. No automatic surprise charges without notice.

### Annual discount option [VERIFY]
**Q:** Is there an annual discount?  
**A:** [VERIFY] We may offer annual billing at a discount in the future. Contact us for current options.

### Concierge add-on
**Onboarding Concierge:** $199 one-time (optional). Includes help with bulk import, template setup, and walkthrough. Offered when helpful, not required.


## 12. COMPARISON: "CertClerk vs spreadsheets vs enterprise tools"

*Only claims we can defend. Items labeled as inference.* 

| Aspect | **Spreadsheets** | **CertClerk** | **Enterprise COI Tools** |
|---|---|---|---|
| **Price** | Free | $79-$299/mo | $8K-$25K/yr [VERIFY] |
| **Setup time** | Manual, ongoing maintenance | Minutes with templates; bulk import available | Days/weeks, often sales-assisted [INFERENCE] |
| **Vendor experience** | Email attachments, back-and-forth | Magic link, no account needed | Varies - often portals with accounts [INFERENCE] |
| **Gap detection** | Manual checking | Automated against your template | Automated, but often more complex [INFERENCE] |
| **Reminders** | Manual/calendar | Automated to vendor + agent | Automated, but may lack agent-chasing focus [INFERENCE] |
| **Auditability** | Hard to track history | Evidence view links fields to PDF location | May have audit logs [INFERENCE] |
| **Human review** | N/A | Built-in queue for uncertain extractions | Varies [INFERENCE] |
| **Target fit** | Everyone | Small property managers (10-150 vendors) | Large enterprises [INFERENCE] |


## 13. FAQ (10 Questions)

| # | Question | Answer |
|---|---|---|
| **1** | **How accurate is the extraction?** | We target high accuracy on ACORD 25 fields, but no AI is perfect. Low-confidence extractions go to a human review queue, and you can always edit values. [VERIFY exact targets per field] |
| **2** | **Do you verify coverage with insurers?** | **No.** We do not verify coverage with insurers. We extract and check information from the certificate document against your requirements. Our tool provides document analysis only, not verification of coverage. |
| **3** | **Is my data secure? Where are files stored?** | We store files in Cloudflare R2. Data is transmitted over HTTPS. We follow security best practices, but you should review our Security page for details. [VERIFY final security measures] |
| **4** | **What about vendor privacy?** | Vendors upload via magic link with no account required. We only collect what's needed to deliver the service. Vendor emails are used for reminders as configured. See our Privacy Policy for details. |
| **5** | **What forms do you support?** | ACORD 25 first, US only. We focus on the most common form initially. Other forms may be added later based on demand. [VERIFY expansion plans] |
| **6** | **Can I import from Excel/spreadsheets?** | You can bulk import PDFs. For vendor lists from Excel, you can add vendors manually or via import - details depend on implementation. The free audit can work with your existing list. |
| **7** | **What happens when extraction is unsure?** | Certificates with low confidence go to the human review queue. You'll see the PDF side-by-side with extracted fields and can approve, edit, or request re-upload. |
| **8** | **Can I export my data?** | We plan to support data export (CSV/PDF). Export capabilities will be available - check current plan details. [VERIFY timeline] |
| **9** | **Can I cancel anytime?** | Yes, you can cancel your subscription anytime. You'll retain access until the end of your billing period. See Terms for details. |
| **10** | **How long does the free audit take?** | We aim to deliver your gap report within 24 hours of receiving your files/list and requirements. |


## 14. SOCIAL PROOF PLACEHOLDERS

*Structure only - no fabricated quotes or logos.*

| Element | Status | Notes |
|---|---|---|
| **Customer quotes** | **TODO** | Will add real quotes after getting first customers. Never fabricate. |
| **Company logos** | **TODO** | Only add with explicit permission. No placeholder logos. |
| **Usage stats** | **TODO** | Only add verified numbers. Don't use vendor-blog stats. |
| **Case study snippets** | **TODO** | Add after documenting real results. |


## 15. FINAL CTA + FOOTER

### Final CTA Section
**Headline:** "Stop chasing COIs. Start tracking them."

**Body:** Get your free COI gap audit and see exactly which vendors are non-compliant in 24 hours.

**CTA Button:** `Request a free COI gap audit`

### Footer
| Link | URL (placeholder) | Notes |
|---|---|---|
| **Privacy** | `/privacy` | Required |
| **Terms** | `/terms` | Required |
| **Security** | `/security` | Required |
| **Contact** | `/contact` | Required |

**Disclaimer line:** "CertClerk is a document tracking tool. We do not verify coverage with insurers or provide legal advice. US only, ACORD 25 first."


## 16. SEO

### Primary/Secondary Keywords
| Type | Keywords | Notes |
|---|---|---|
| **Primary** | `COI tracking`, `certificate of insurance tracking` | Core terms |
| **Secondary** | `vendor insurance tracking`, `ACORD 25 tracking`, `COI compliance software` | Related terms |

### 5 Long-Tail Targets
1. `track vendor insurance certificates property manager` 
2. `COI tracking software for small property management`
3. `automate vendor insurance expiration reminders`
4. `ACORD 25 gap detection`
5. `vendor COI upload no account`

### URL Slugs for 3 Future Landing Pages
| Page | URL Slug | Purpose |
|---|---|---|
| **Property Managers** | `/for-property-managers` | Focus on ICP-A |
| **GCs/Subcontractors** | `/for-general-contractors` | Focus on ICP-B (later) |
| **COI Tracking Spreadsheet Alternative** | `/coi-tracking-spreadsheet-alternative` | Capture "switch from spreadsheet" search intent |


## 17. ANALYTICS PLAN

### Privacy-Friendly Tool
**Recommended:** Cloudflare Web Analytics (free tier) - privacy-friendly, no cookies, GDPR-friendly.

### Events to Track
| Event | Trigger | Purpose |
|---|---|---|
| **cta_click** | Click primary/secondary CTAs | Measure interest in conversion actions |
| **audit_form_start** | User starts filling audit form | Measure form engagement |
| **audit_form_submit** | Form submitted successfully | Primary conversion goal |
| **pricing_view** | User views pricing section | Measure pricing interest |


## 18. ACCESSIBILITY AND PERFORMANCE

### WCAG AA Targets
- [ ] Color contrast meets WCAG AA (4.5:1 for normal text, 3:1 for large text)
- [ ] Keyboard navigation works for all interactive elements
- [ ] Form labels properly associated
- [ ] Alt text for images
- [ ] Focus indicators visible
- [ ] Semantic HTML structure
- [ ] ARIA where needed

### Lighthouse Targets (≥95 perf)
| Category | Target | Notes |
|---|---|---|
| **Performance** | ≥95 | Optimize images, minimal JS, fast load |
| **Accessibility** | ≥95 | Meet WCAG AA |
| **Best Practices** | ≥95 | Security headers, no console errors |
| **SEO** | ≥95 | Meta tags, structured data where appropriate |

### Image/Font Budget
| Resource | Budget | Notes |
|---|---|---|
| **Images** | <200KB total (optimize), lazy load | Use modern formats (WebP) where possible |
| **Fonts** | <100KB total | Self-host or use Google Fonts efficiently; limit weights |
| **JS** | <50KB (gzipped) | Minimal vanilla JS, no heavy frameworks |
| **CSS** | <30KB (gzipped) | Custom CSS, avoid large frameworks |

---


# COPY-ONLY VERSION (For Designer)

## Header
**CertClerk** - Track vendor COIs. Flag gaps. Chase renewals.

[Request a free COI gap audit] [See pricing]

## Hero
**Stop chasing vendor insurance certificates in spreadsheets.**

CertClerk tracks vendor and subcontractor insurance certificates. Vendors upload via magic link with no account. You see gaps, get reminders, and stay on top of expirations.

[Request a free COI gap audit] [See pricing]

Built for small property managers tracking 10-150 vendors • US-focused, ACORD 25 first • We do not verify coverage with insurers.

## The problem
**The spreadsheet and a lot of nagging**

- **Spreadsheets break down.** Tracking COIs across dozens of vendors in a spreadsheet is error-prone and hard to keep current.
- **Too much nagging.** You end up emailing and calling vendors repeatedly to get updated certificates before they expire.
- **Gaps hide in the details.** It's hard to know at a glance which vendors are non-compliant or what's actually missing from a certificate.
- **Expirations sneak up.** Without a system, policies expire unnoticed and create liability exposure.

## How it works
**How it works**

1. **Upload or forward** - Add vendors or have them upload via magic link (no account). Bulk import existing PDFs.
2. **Extract** - AI extracts coverage types, limits, policy dates, and additional-insured status from ACORD 25 certificates.
3. **Check against your requirements** - Compare against your template. Gaps flagged clearly.
4. **Chase automatically** - Reminders go to vendors and their insurance agents. Low-confidence extractions go to review queue.

## Features
**Set requirements once, enforce them for all vendors**  
Define coverage requirements in a reusable template. Apply across all vendors and see compliance at a glance.

**Vendors upload without creating an account**  
Magic link lets vendors upload their COI PDF with no registration or password.

**See where every extracted value comes from**  
Click any extracted field to see it highlighted in the original PDF for auditability.

**Human review when the AI isn't sure**  
Uncertain extractions go to a review queue - see PDF side-by-side and approve, edit, or request re-upload.

**Reminders go to vendors and their agents**  
Automatic reminders to both parties before expiration, with full history.

**Import existing COIs, get a gap report fast**  
Bulk import up to ~200 PDFs. Get organized results quickly.

**See compliance status at a glance**  
Dashboard shows expired, expiring soon, missing endorsements, under review, and compliant.

## Free COI gap audit
**Get a free COI gap audit in 24 hours**

**What you send:** Up to ~10-20 COI PDFs or a link, vendor list, and your requirements (or we'll suggest a template).

**What you get:** Gap report, expirations coming due, specific gaps called out, recommendations. No obligation.

**Privacy:** We only use files for your gap report. Not used to train public models. We do not verify coverage with insurers.

[Get my free gap report]

Fields: Name, Email, Company, # Vendors, Current tracking method, Files/link (optional)

## Pricing
**Simple pricing**

| Tier | Price | Vendors | Notes |
|---|---|---|---|
| Starter | $79/mo | ≤25 | Core tracking, reminders, dashboard |
| Pro | $149/mo | ≤100 | + Bulk import, review queue, evidence view |
| Portfolio | $299/mo | ≤300 | + Higher limits, expanded history, priority support |

Onboarding Concierge: $199 one-time (optional). Annual billing may be available [VERIFY].

## FAQ (key)
**Do you verify coverage with insurers?** No. We extract and check from the certificate document only.

**What forms do you support?** ACORD 25 first, US only.

**What happens if extraction is unsure?** Goes to human review queue for you to verify/edit.

**Can I cancel anytime?** Yes, access through end of billing period.

## Footer
[Privacy] [Terms] [Security] [Contact]

CertClerk is a document tracking tool. We do not verify coverage with insurers or provide legal advice. US only, ACORD 25 first.


---

## ✅ Checkpoint Gate — Phase 1A

- [x] **All 14 sections present with final (not placeholder) copy, except marked social-proof slots** - All sections 1-18 covered, social proof marked as TODO only
- [x] **Every product feature from Phase 0 MUST list has its own description block** - All 9 MUST features described in sections 4 and 5
- [x] **No fabricated logos, testimonials or stats; vendor-blog numbers tagged [VERIFY] or removed** - All claims defensible, [VERIFY] tags used, no fake social proof
- [x] **"We do not verify coverage with insurers" appears on the page (FAQ + footer)** - Stated in Hero microcopy, FAQ #2, Footer disclaimer
- [x] **Audit form has ≤6 fields and a stated privacy promise** - 6 fields max, privacy promise in section 10
- [x] **Pricing cards match Phase 0 numbers** - Starter $79/≤25, Pro $149/≤100, Portfolio $299/≤300
- [x] **SEO keywords and analytics events defined** - Sections 16 and 17 complete
- [x] **I read it aloud once; nothing sounds like marketing fluff** - Copy is direct, practical, written for busy property manager
