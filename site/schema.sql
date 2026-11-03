CREATE TABLE IF NOT EXISTS audit_requests (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT NOT NULL,
  vendor_count TEXT NOT NULL,
  tracking_method TEXT NOT NULL,
  share_link TEXT,
  created_at TEXT NOT NULL,
  status TEXT DEFAULT 'pending'
);
CREATE INDEX IF NOT EXISTS idx_audit_requests_email ON audit_requests(email);
CREATE INDEX IF NOT EXISTS idx_audit_requests_created ON audit_requests(created_at);
