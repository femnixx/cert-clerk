# API Contract — CertClerk

This document lists the typed API endpoints the frontend expects. Phase 5 should implement exactly these routes.

Base URL: `/api`

## Auth
| Method | Endpoint | Body | Response | Notes |
| --- | --- | --- | --- | --- |
| POST | `/auth/magic-link` | `{ email: string }` | `{ ok: true }` | Send magic link email |
| POST | `/auth/consume` | `{ token: string }` | `{ ok: true, token: string }` | Consume magic link, return session token |
| POST | `/auth/logout` | `{}` | `{ ok: true }` | Logout |

## Vendors
| Method | Endpoint | Body | Response | Notes |
| --- | --- | --- | --- | --- |
| GET | `/vendors` | - | `{ vendors: Vendor[] }` | List all vendors |
| POST | `/vendors` | `Partial<Vendor>` | `{ vendor: Vendor }` | Create vendor |
| GET | `/vendors/:id` | - | `{ vendor: Vendor }` | Get vendor details |
| PUT | `/vendors/:id` | `Partial<Vendor>` | `{ vendor: Vendor }` | Update vendor |
| POST | `/vendors/import` | CSV file/form data | `{ imported: number, errors: Array<{row: number, error: string}> }` | CSV import with row-level errors |

## Certificates
| Method | Endpoint | Body | Response | Notes |
| --- | --- | --- | --- | --- |
| GET | `/certificates` | - | `{ certificates: Certificate[] }` | List certificates |
| GET | `/certificates/review-queue` | - | `{ items: Array<{id: string, vendorName: string, fileName: string, confidence: number}> }` | Low-confidence items |
| POST | `/certificates/:id/approve` | `{}` | `{ ok: true }` | Approve extracted data |
| POST | `/certificates/:id/reject` | `{ reason?: string }` | `{ ok: true }` | Reject |
| POST | `/certificates/:id/extract` | `{}` | `{ certificate: Certificate }` | Trigger extraction |

## Templates
| Method | Endpoint | Body | Response | Notes |
| --- | --- | --- | --- | --- |
| GET | `/templates` | - | `{ templates: RequirementTemplate[] }` | List templates |
| POST | `/templates` | `Partial<RequirementTemplate>` | `{ template: RequirementTemplate }` | Create template |
| PUT | `/templates/:id` | `Partial<RequirementTemplate>` | `{ template: RequirementTemplate }` | Update template |

## Reminders
| Method | Endpoint | Body | Response | Notes |
| --- | --- | --- | --- | --- |
| GET | `/reminders/rules` | - | `{ rules: any[] }` | Get reminder rules |
| PUT | `/reminders/rules` | `{ rules: any[] }` | `{ ok: true }` | Update rules |
| POST | `/reminders/test` | `{ email: string, templateId: string }` | `{ ok: true }` | Test send |

## Reports
| Method | Endpoint | Body | Response | Notes |
| --- | --- | --- | --- | --- |
| GET | `/reports/gap` | - | `{ report: any }` | Gap report data |
| GET | `/reports/expiry` | - | `{ report: any }` | Expiry report |
| GET | `/reports/audit/export` | - | CSV/PDF | Audit export |

## Vendor Portal (no auth)
| Method | Endpoint | Body | Response | Notes |
| --- | --- | --- | --- | --- |
| GET | `/portal/:token` | - | `{ vendor: Vendor, requirements: any }` | Get portal info |
| POST | `/portal/:token/upload` | FormData with file | `{ ok: true, uploadId: string }` | Upload COI (gets signed URL) |
| GET | `/portal/:token/status` | - | `{ status: string }` | Check upload status |
| POST | `/portal/signed-url` | `{ filename: string, contentType: string }` | `{ url: string, key: string }` | Get R2 signed URL for direct upload |
