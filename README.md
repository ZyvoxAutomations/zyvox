# Zyvox Automations Website

Professional marketing website and lead-capture platform for Zyvox Automations.

## Stack

- Frontend: React 18 + TypeScript + Vite + Tailwind CSS
- UI: Radix UI + custom design system (navy, white, dull gold)
- Backend endpoint: Netlify Functions (Node.js)
- Database: PostgreSQL

## Local Development

1. Install dependencies:

```bash
npm install
```

2. Create environment file:

```bash
cp .env.example .env
```

3. Set PostgreSQL connection string in `.env`:

```bash
DATABASE_URL=postgres://username:password@host:5432/database
```

4. Create lead table:

```bash
psql "$DATABASE_URL" -f db/schema.sql
```

5. Run development server:

```bash
npm run dev
```

## Lead Capture API

- Endpoint: `/.netlify/functions/lead`
- Method: `POST`
- Required fields: `name`, `email`, `company`
- Optional fields: `phone`, `message`

The CTA form in the homepage submits directly to this endpoint and stores leads in PostgreSQL.

## Deployment

Deploy on Netlify with:

- Build command: `npm run build`
- Publish directory: `dist`
- Functions directory: `netlify/functions`
- Environment variable: `DATABASE_URL`
