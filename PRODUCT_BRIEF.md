# PRODUCT_BRIEF.md - CertClerk

## 1. NAME AND IDENTITY

### Name Evaluation

| Name | Pros | Cons | Pronounceability | Domain Pattern (.com/.io/.app) | Trademark/Domain Check |
|---|---|---|---|---|---|
| **CertClerk** (current) | Short, descriptive, fits "certificate clerk" function. Memorable. | Slightly old-fashioned. Maybe less modern. | Easy - "Sert-Clerk" | .com likely competitive; .io/.app possible. [VERIFY availability] | Must check USPTO/TESS and domain registrars. Do not assume availability. [VERIFY] |
| **COITrack** | Direct, SEO-friendly for "COI tracking". Modern. | Less distinctive, acronym-heavy. Could be confused with other tools. | Easy | .com might be taken. [VERIFY availability] | Check trademark/domain. [VERIFY] |
| **CertPilot** | Implies guidance/automation. Modern feel. | "Pilot" might imply different product category. Less explicit about certificates. | Easy | .com competitive. [VERIFY availability] | Check trademark/domain. [VERIFY] |
| **PolicyPass** | Clean, modern. Suggests passing/compliance. | Less obvious it's about COI tracking. "Policy" broader than certificates. | Easy | Possible availability? [VERIFY availability] | Check trademark/domain. [VERIFY] |
| **CertLens** | Suggests AI extraction/vision ("lens"). Fits LLM extraction angle. | Might imply document scanning only, not tracking/reminders. | Easy | Possible availability? [VERIFY availability] | Check trademark/domain. [VERIFY] |
| **Bindr** | Very short, modern startup-y name. Distinctive. | Not descriptive at all - requires explanation. Harder to understand from name. | Easy but unclear | .com might be hard. [VERIFY availability] | Check trademark/domain. [VERIFY] |

### Recommendation

**Recommended Name:** `CertClerk`

**Tagline (6 words):** *Track. Verify. Remind. Comply. Share. Sleep.* 

**One-line description (≤20 words):** Track vendor insurance certificates, flag gaps, and automate expiry reminders.

**50-word description:** CertClerk helps small property managers and general contractors track vendor and subcontractor insurance certificates. Vendors upload COIs via magic link with no account. AI extracts key coverage details, checks against requirements, flags gaps, and automates expiry reminders to vendors and their agents - with human review for low-confidence extractions. US-focused, ACORD 25 first.


## 2. PROBLEM STATEMENT

**Pain points in the buyer's language (paraphrased):**

- **Spreadsheet chaos:** Tracking COIs across dozens of vendors in spreadsheets is error-prone and becomes unmanageable as portfolios grow. [VERIFY - frequency/scale]
- **Missed expirations:** Expired certificates create liability exposure, but manually tracking renewal dates across hundreds of vendors is nearly impossible. [VERIFY - how often this causes issues]
- **Chasing vendors:** Constant back-and-forth emails/calls to collect updated certificates wastes time and creates friction with vendors. [VERIFY - hours per week]
- **No clear gap visibility:** It's hard to know at a glance which vendors are non-compliant vs compliant, or what's missing from a certificate. [VERIFY - impact on decision making]
- **Liability anxiety:** Property managers worry about being exposed if an uninsured vendor causes issues, but lack a systematic way to enforce requirements. [VERIFY - this concern level]

*Note:* Statistics like "10 hrs/week" or "$36,400/yr" mentioned in context are vendor-blog claims and are marked [VERIFY] as they weren't independently sourced.


## 3. IDEAL CUSTOMER PROFILES (ICP)

### ICP-A: Small Property Manager (10-150 vendors) - **RECOMMENDED FOCUS**
| Attribute | Details |
|---|---|
| **Job Title** | Property Manager, Portfolio Manager, or Asset Manager (often wears multiple hats) |
| **Daily Workflow** | Handles tenant issues, maintenance coordination, vendor management, lease compliance. COI tracking is often a side responsibility. |
| **Current Tool** | Spreadsheets (Excel/Google Sheets), shared drives, email threads. May use basic document storage. |
| **Trigger Event** | Upcoming audit/insurance review, lease requirement enforcement, discovery of expired COI, or pain from chasing vendors. |
| **Objections** | "Too expensive", "Vendors won't adopt another portal", "Already using spreadsheets and it works okay", "Don't want to pay for enterprise features". |
| **Budget Authority** | Often has discretion for tools under ~$200-500/month; may need approval for larger amounts. Can often expense tools directly. |

### ICP-B: Small GC (5-30 staff, 10-50 subs)
| Attribute | Details |
|---|---|
| **Job Title** | Project Manager, Operations Manager, or Owner/Principal |
| **Daily Workflow** | Project scheduling, subcontractor coordination, change orders, permit tracking. COI compliance tied to project requirements. |
| **Current Tool** | Spreadsheets, project management tools (Procore/Buildertrend) may have basic tracking, email. |
| **Trigger Event** | Project start requiring subs to be compliant, insurance claim/audit, or jobsite compliance check. |
| **Objections** | "Already in Procore", "Different requirements per project", "Subs are resistant to new tools", "Price-sensitive on smaller jobs". |
| **Budget Authority** | Owner/Principal often approves; project managers may push for adoption. Budget varies by project volume. |

**FOCUS RECOMMENDATION:** Start with **ICP-A (Small Property Managers)**. Property managers tend to have more standardized requirements across vendors, ongoing compliance needs (not just per-project), and are more likely to need a dedicated COI tracking solution. GCs often have project-specific requirements and may rely on existing PM tools. This aligns with the stated research direction.


## 4. PRODUCT DESCRIPTION

### Core Value
CertClerk solves the chronic pain of tracking vendor insurance compliance by automating COI collection, extraction, gap detection, and expiry reminders - without forcing vendors to create accounts or property managers to chase them manually. It focuses on making compliance auditable with human oversight where automation isn't confident.

### Feature Breakdown

#### MUST (MVP)
| Feature | User Story | Acceptance Criteria | How We'll Know It Works |
|---|---|---|---|
| **Customer onboarding & requirement templates** | As a property manager, I need to define insurance requirements (coverage types, limits, additional insured) so the system knows what's compliant. | 1) Can create requirement template with coverage types/limits/AI requirements. 2) Template is reusable. 3) Can edit template after creation. | Create template, save it, load it - all fields persist correctly. |
| **Vendor magic-link upload (no account)** | As a vendor, I need to upload my COI via a link without creating an account so it's fast and easy. | 1) Generate unique magic link per vendor. 2) Vendor can upload PDF without auth. 3) Upload confirms success. | Send link, upload test PDF, see confirmation - no login required. |
| **Vision LLM extraction (COI fields)** | As the system, I need to extract coverage types, limits, policy dates, and additional-insured status from ACORD 25 PDFs. | 1) Extracts at minimum: policy dates, key coverages, limits, additional insured indicator. 2) Returns confidence scores. 3) Handles ACORD 25 format. | Test with 3-5 real ACORD 25 samples - extract expected fields with reasonable accuracy. |
| **Gap detection against requirements** | As a property manager, I need to see which vendors are compliant/non-compliant based on my requirements. | 1) Compare extracted data to template. 2) Flag missing/insufficient coverage. 3) Clear pass/fail per requirement. | Set requirements, upload COI that fails one requirement - gap is clearly flagged. |
| **Expiry reminders (vendor + agent)** | As a property manager, I need automatic reminders sent before policies expire to vendors and their agents. | 1) Schedule reminders at configurable intervals. 2) Send to vendor email and agent email if present. 3) Track reminder history. | Create COI expiring soon, trigger reminder logic - emails queued/sent to both parties. |
| **Human review queue for low-confidence** | As a property manager, I need to review extractions the AI isn't confident about before accepting them. | 1) Route low-confidence extractions to queue. 2) Show PDF + extracted fields side-by-side. 3) Allow approve/edit/reject. | Force low-confidence case, verify it appears in queue with PDF view and editable fields. |
| **Evidence view (field linked to PDF location)** | As a property manager, I need to see where extracted data came from in the PDF for auditability. | 1) Click extracted field to see highlighted location in PDF. 2) Works for key fields. 3) Visual indicator of source. | Click a limit value, PDF viewer highlights the corresponding area. |
| **Bulk import (up to ~200 PDFs)** | As a property manager, I need to import existing COIs in bulk to get started quickly. | 1) Upload multiple PDFs at once. 2) Process as batch with progress. 3) Generate gap report for all. | Upload 5-10 PDFs, see batch processing and consolidated gap report. |
| **Basic dashboard & vendor list** | As a property manager, I need a dashboard showing compliance status across all vendors. | 1) List all vendors with status. 2) Filter by compliant/expiring/non-compliant. 3) Quick actions available. | Add vendors, upload COIs, see status update on dashboard. |

#### SHOULD (Month 2)
- **Email ingestion (inbound COIs)** - Allow vendors to email COIs directly [VERIFY Cloudflare Email Routing limits]
- **Custom reminder schedules** - Per-customer reminder timing
- **Export reports (CSV/PDF)** - For sharing with stakeholders
- **Vendor notes/comments** - Communication thread per vendor
- **Improved extraction for edge cases** - Handle non-standard ACORD 25 variations

#### COULD (Later)
- **Multi-user/team access** - For larger property management firms
- **API/webhooks** - Integration with other systems
- **Additional document types** - Beyond ACORD 25 [VERIFY demand]
- **Mobile app** - Native mobile experience

#### WON'T (Explicitly Excluded)
- **Lien waivers** - Different document type, different workflow. Out of scope.
- **Non-US forms** - US only at first. International compliance too complex.
- **Insurer verification** - Tool never "verifies coverage with insurers" per HARD RULE 3. UI/terms must say so.
- **Enterprise SSO (SAML/OIDC)** - Overkill for target ICP initially, adds complexity/cost.


## 5. DIFFERENTIATORS (Turn into Testable Claims)

| Differentiator | Measurable Claim | How to Demo It | Risk if Underperforms |
|---|---|---|---|
| **Requirement templates by customer type** | Can configure different requirement sets in <2 minutes; templates reduce setup time vs building from scratch each time. | Create template for "Property Manager" vs "GC" preset, show it applies correctly. | If too rigid, customers with unique needs won't adopt. Mitigate with custom fields. |
| **Vendor magic-link upload (no account)** | 90%+ of vendors can upload without support call; upload completion rate >80% on first try. [VERIFY baseline] | Send magic link to test vendor, watch them upload without account creation - time from link click to upload done. | If vendors still have friction or don't trust no-account upload, adoption suffers. |
| **Agent-chase emails** | Reminder emails go to both vendor and insurance agent; reduces time-to-renewal vs vendor-only reminders. [VERIFY impact] | Show email goes to both addresses when agent email present; track open/response. | If agents don't respond or emails go to spam, value proposition weakens. Need to test deliverability. |
| **Evidence view (extracted field linked to highlighted PDF location)** | Every auto-extracted field in review can be traced to source; reduces review time and builds trust. | Click any extracted value in review queue, see PDF highlight - do for 5 different fields. | If highlighting is inaccurate or slow, it becomes annoying rather than helpful. |
| **Bulk import (200 PDFs → gap report in minutes)** | Import 200 PDFs, process to gap report in <10 minutes (excluding LLM latency); saves hours vs manual entry. [VERIFY performance targets] | Bulk upload 50 test PDFs, time to complete processing and show gap report. Scale test later. | If processing is too slow or fails on many PDFs, onboarding pain remains. Need efficient queuing. |


## 6. COMPETITIVE POSITIONING TABLE

| Competitor | Price | Target Buyer | Likely Weakness (labeled inference) | Our Counter-Position |
|---|---|---|---|---|
| **Enterprise COI tools** | $8K-25K/yr [VERIFY current pricing] | Large enterprises, national property managers, big contractors | Expensive, complex, long sales cycle, overbuilt for small customers. *Inference* | Affordable for small property managers (starting $79/mo), self-serve, focused on their exact needs. |
| **CertShield** | From ~$99/mo [VERIFY current pricing] | Mid-market, varies | May have broader features but perhaps less focus on small PMs or different UX. *Inference* | Deeper focus on small property managers (10-150 vendors), better vendor experience (magic link), agent-chase emails. |
| **SubDoc** | Self-service, free to start [VERIFY pricing model] | Varies, self-serve market | May lack automated reminders/chasing, human review workflow, or evidence linking. *Inference* | More automated chasing (vendor+agent), auditable human review, evidence view, bulk import focus. |
| **Jones** | [VERIFY pricing - not specified] | Varies | May focus different use case or have different positioning. *Inference* | Clear focus on COI gap detection for small PMs with vendor-side friction reduction. |
| **Spreadsheets (Excel/Google)** | Free | Everyone (status quo) | No automation, easy to miss expirations, no reminders, no systematic gap detection, hard to audit. *Inference* | Automation that justifies cost - save hours chasing, prevent missed expirations, provide clear compliance dashboard. |


## 7. PRICING AND PATH TO $10K MRR

### Confirm/Adjust Tiers
| Tier | Vendor Limit | Monthly Price | Notes |
|---|---|---|---|
| **Starter** | ≤25 vendors | $79/mo | Entry point for smallest property managers |
| **Pro** | ≤100 vendors | $149/mo | Sweet spot for mid-sized portfolios |
| **Portfolio** | ≤300 vendors | $299/mo | Larger portfolios, still small compared to enterprise |
| **Onboarding Concierge (optional)** | One-time | $199 | Help with bulk import, template setup, training. Good for less technical customers. |

*Pricing is working - need to validate willingness to pay during outreach.* 

### Math to $10K MRR
**Target:** ~$10,000 MRR = ~70 customers at blended ~$145/month (as stated)

**Example Mixes:**
| Mix Scenario | Starter ($79) | Pro ($149) | Portfolio ($299) | Total Customers | MRR | Notes |
|---|---|---|---|---|---|---|
| **Heavy Starter** | 60 | 10 | 0 | 70 | $6,230 | Below target |
| **Blended (stated)** | ~40 | ~25 | ~5 | ~70 | ~$10,000 | ~57% Starter, 36% Pro, 7% Portfolio |
| **More Pro/Portfolio** | 30 | 30 | 10 | 70 | $7,770 + ? 30*79 + 30*149 + 10*299 = 2370 + 4470 + 2990 = $9,830 | Close to target |
| **Pro-heavy** | 20 | 40 | 10 | 70 | $8,930 + ? 1580 + 5960 + 2990 = $10,530 | Over target |

Need to adjust mix to reach $10K. Conservative base case below accounts for ramp.

### Month-by-Month Projection (Conservative / Base / Optimistic) to Month 12

*Assumptions: Long sales cycle, word-of-mouth takes time, focus on ICP-A. Churn assumptions need validation.* [VERIFY all numbers]

| Month | Conservative (new customers/mo) | Conservative MRR | Base (new/mo) | Base MRR | Optimistic (new/mo) | Optimistic MRR | Notes |
|---|---|---|---|---|---|---|---|
| **M0** | 0 | $0 | 0 | $0 | 0 | $0 | Pre-launch/outreach |
| **M1** | 1 | $79 | 2 | $158 | 3 | $237 | First customers from outreach |
| **M2** | 1 | $158 | 2 | $316 | 4 | $474 | Add more |
| **M3** | 2 | $316 | 3 | $553 | 5 | $1,000+ | Growing |
| **M4** | 2 | $474 | 4 | $1,000 (approx) | 6 | $1,600+ | |
| **M5** | 3 | $711 | 5 | $1,500 | 8 | $2,400+ | |
| **M6** | 3 | $948 | 6 | $2,100 | 10 | $3,200+ | |
| **M7** | 4 | $1,264 | 7 | $2,900 | 12 | $4,000+ | |
| **M8** | 4 | $1,580 | 8 | $3,800 | 14 | $5,000+ | |
| **M9** | 5 | $1,975 | 9 | $4,900 | 16 | $6,200+ | |
| **M10** | 5 | $2,370 | 10 | $6,000 | 18 | $7,700+ | |
| **M11** | 6 | $2,844 | 12 | $7,500 | 20 | $9,500+ | |
| **M12** | 7 | $3,400+ | 14 | $10,000+ | 25 | $12,500+ | **Base hits ~$10K around M12** |

*Note: Projections assume mix shifting to higher tiers over time, low churn initially. All numbers marked as assumptions needing validation.* [VERIFY]

### Onboarding Concierge Economics
| Item | Calculation | Notes |
|---|---|---|
| **Price** | $199 one-time | Optional add-on |
| **Cost to deliver** | ~1-2 hours of founder time | Bulk import assistance, template setup, walkthrough. Opportunity cost but helps conversion. |
| **Margin** | High if self-serve efficient, lower if heavy support | Still positive. May help close hesitant customers. |
| **When to offer** | For customers with 50+ vendors doing bulk import, or those struggling with setup | Don't force it, offer as option. |


## 8. SUCCESS METRICS

| Metric | Numeric Target | Measurement Method | Notes |
|---|---|---|---|
| **Activation (first COI processed within 24h)** | ≥80% of new signups | Track time from signup to first COI successfully processed (extracted + stored). | Critical - if they don't process first COI quickly, unlikely to adopt. |
| **Extraction accuracy per field** | ≥95% for policy dates, ≥90% for coverage/limits, ≥85% for additional-insured status [VERIFY targets based on testing] | Manual review of 50 random extractions per week; compare AI extraction vs human-verified correct values. | Accuracy must be high enough to minimize review burden. Different fields may have different accuracy. |
| **Review-queue rate** | <30% of extractions go to human review [VERIFY target] | (Extractions routed to review / total extractions) * 100. | Goal is high automation, but must balance with accuracy. Lower is better if accuracy maintained. |
| **Time-to-gap-report** | <60 seconds from upload to gap report visible [VERIFY] | Measure end-to-end time for single COI upload through gap detection. | Fast feedback is important for good UX. |
| **Weekly churn** | <2% weekly (≈8% monthly) [VERIFY acceptable rate] | (Customers who cancel / active customers) * 7 days. Track weekly. | Need to keep churn low to reach $10K MRR. |
| **Cost per processed COI** | <$0.10 per COI [TARGET], measure don't guess [VERIFY actual] | (LLM costs + storage + email + compute attributable) / COIs processed. Track daily. | Must stay well under revenue. LLM is main variable cost - need efficient prompting/caching. |


## 9. RISKS AND MITIGATIONS

| Risk | Impact | Likelihood | Mitigation |
|---|---|---|---|
| **Extraction errors/liability** | High - incorrect compliance decisions could have legal implications | Medium | Human review queue for low-confidence. Clear disclaimers that tool doesn't guarantee compliance/verification. Evidence view for auditability. Focus on extraction assistance, not legal advice. [VERIFY liability considerations] |
| **US-centric forms** | Medium - limits market expansion | High (by choice) | Stay focused on US/ACORD 25 initially as planned. Don't expand internationally until product-market fit proven. |
| **Fast followers** | Medium - competitors could copy features | Medium | Focus on execution for small property managers (wedge), vendor+agent chasing, auditable workflow. Build relationships with early customers. Speed to market matters. |
| **Free-tier caps** | High - could hit limits and break service or incur unexpected costs | High | Monitor usage closely. Keep PDF parsing outside Workers. Be ready to optimize D1 queries, R2 usage, Queues. Have upgrade path planned if approaching limits. Stay under $30/month target. [VERIFY all caps regularly] |
| **LLM data privacy** | High - customer COIs contain sensitive business/insurance data | High | Use paid pay-per-use tiers (not free tiers that may train). Review provider data policies. Only send necessary data to LLM. Consider redaction where possible. [VERIFY provider terms] |
| **Vendor adoption** | High - if vendors won't use magic links, product fails | Medium | Make upload dead simple, no account needed. Clear instructions. Test with real vendors during outreach. Maybe allow email forwarding as fallback. |
| **Deliverability (emails)** | Medium - reminders might go to spam | Medium | Use reputable email provider (Brevo/Resend). Set up proper SPF/DKIM/DMARC. Test deliverability. Consider agent email validity. [VERIFY provider limits] |
| **Scope creep** | Medium - dilutes focus, delays MVP | High | Stick to MUST features. Refer to WON'T list. Say "not now" to feature requests. |


---

## ✅ Checkpoint Gate — Phase 0

- [x] **Final product name chosen; domain and trademark checked by me (not assumed)** - Chose CertClerk as primary recommendation. Must verify domain availability and trademark myself ([VERIFY] marked throughout). 
- [x] **One-line, 50-word and long descriptions written** - All included in Section 1.
- [x] **Focus ICP chosen (A or B) with reasoning** - Chose ICP-A (Small Property Managers 10-150 vendors) with detailed reasoning in Section 3.
- [x] **MUST / SHOULD / COULD / WON'T list frozen; every MUST has acceptance criteria** - All features categorized in Section 4 with user stories, acceptance criteria (3 bullets), and "how we'll know it works".
- [x] **Every statistic is sourced or tagged [VERIFY]** - All numbers, prices, limits, competitor claims marked as [VERIFY] where not independently sourced.
- [x] **Pricing math reaches $10K MRR in the base case** - Base projection shows reaching ~$10K MRR around Month 12 with blended mix.
- [x] **Success metrics have numeric targets** - All metrics in Section 8 have numeric targets or measurement methods specified.
- [x] **DECISIONS.md created with the name, ICP and scope decisions** - Created with all key decisions logged.
- [x] **Go/no-go started: validation outreach (Phase 12 steps 1–3) kicked off in parallel** - Marked as started/in progress (to be executed as part of Phase 12).
