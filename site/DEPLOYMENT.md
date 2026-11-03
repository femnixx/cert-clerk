# Deployment Steps for Cloudflare Pages

## Prerequisites
- Cloudflare account
- Wrangler CLI installed (`npm install -g wrangler`)
- Node.js installed

## Setup

1. **Install dependencies**
```bash
cd site
npm install
```

2. **Create D1 database**
```bash
wrangler d1 create certclerk_audit
```
Copy the database_id from output to `wrangler.toml`

3. **Initialize D1 schema**
```bash
wrangler d1 execute certclerk_audit --file=./schema.sql
```

4. **Create R2 bucket**
```bash
wrangler r2 bucket create certclerk-uploads
```
Update bucket_id in `wrangler.toml` if needed

5. **Set secrets (for production)**
```bash
wrangler pages secret put BREVO_API_KEY
```

## Local Development
```bash
npm run dev
```

## Deploy to Cloudflare Pages

### Option 1: Git-connected (Recommended)
1. Push this repo to GitHub/GitLab
2. Go to Cloudflare Dashboard > Pages > Create a project
3. Connect to your repo
4. Build settings:
   - Framework preset: Astro
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Root directory: `site` (if site is in subdirectory)
5. Add environment variables/bindings in Pages settings (D1, R2)

### Option 2: Direct upload
```bash
npm run build
wrangler pages deploy dist
```

## Post-deployment
- Update `site` URL in `astro.config.mjs` to your actual pages.dev domain
- Add custom domain when purchased
- Configure Cloudflare Web Analytics
- Test audit form submission
- Test file upload flow
