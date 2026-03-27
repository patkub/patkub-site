# patkub-site

### Local Development

Node LTS 24.14.1

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

### Unit Testing

Unit tests are run with Jest.
```
npm test
```

### Dependencies

Update dependencies to latest

```
npx npm-check-updates -u
```

Update browserslist data

```
npx update-browserslist-db@latest
```

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
default-src 'self'; connect-src 'self' https://cloudflareinsights.com; script-src 'self' https://static.cloudflareinsights.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' 'unsafe-inline' https://fonts.gstatic.com; img-src 'self' data:;
```

Place at, Select order: First

### Commands
- `npm run dev` or `npm start` - start a local server for developing the site
- `npm run deploy` - deploy the site to Cloudflare
- `npm run build` - build the site into the `dist/` directory
- `npm test` - run unit tests
