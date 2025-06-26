# patkub-site

### Local Development

Node LTS 22.16.0

Install dependencies
```
npm install
```

Start development server and watch for changes in the `src/` directory.
```
npm run dev
```

Open [http://localhost:3000/](http://localhost:3000/) in your browser.

### Deploy to Cloudflare

Deploy a new version of the site to Cloudflare workers.

```
npm run deploy
```

### Local Build

Build the site locally into the `dist/` folder.
```
npm run build
```

In the `dist/` folder run `npx http-server` and open the link in browser.

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
default-src 'self'; connect-src 'self' https://cloudflareinsights.com; script-src 'self' static.cloudflareinsights.com; style-src 'self' 'unsafe-inline' fonts.googleapis.com; font-src 'self' 'unsafe-inline' fonts.gstatic.com; img-src 'self' data:;
```

Place at, Select order: First

### Commands
- `npm run dev` or `npm start` - start a local server for developing the site
- `npm run deploy` - deploy the site to Cloudflare
- `npm run build` - build the site into the `dist/` directory
