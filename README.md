# patkub-site

## Getting Started

Node LTS 22.11.0

Install dependencies
```
npm install
```

Build site into `dist/` folder
```
npm run build
```

In `dist/` folder run `npx http-server` and open link in browser.

### CSP

Cloudflare Content-Security-Policy header

- Rules > Transform Rules > Modify Response Header
- Create Rule
Rule name: CSP  
All incoming requests  
Then... Add  

Header name: `Content-Security-Policy`

Value:
```
default-src 'self'; connect-src 'self' https://cloudflareinsights.com; script-src 'self' static.cloudflareinsights.com; style-src 'self' 'unsafe-inline' fonts.googleapis.com; font-src 'self' 'unsafe-inline' fonts.gstatic.com;
```

Place at, Select order: First
