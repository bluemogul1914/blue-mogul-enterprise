# Blue Mogul - Business Website

## Overview

Blue Mogul is a veteran-owned managed service provider (MSP) business website built as a full-stack TypeScript application. It serves as a marketing site with pages for services (broadband, voice, managed IT, cybersecurity), private cloud solutions, company information, a blog with CMS capabilities, a contact form with CRM integration, and client portal links. The site targets businesses, schools, and government agencies.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend
- **Framework**: React 18 with TypeScript, built with Vite
- **Routing**: Wouter (lightweight client-side router)
- **State Management**: TanStack React Query for server state
- **Styling**: Tailwind CSS with CSS variables for theming, using a deep blue professional color palette
- **UI Components**: shadcn/ui (new-york style) built on Radix UI primitives
- **Animations**: Framer Motion for page transitions and scroll animations
- **Forms**: React Hook Form with Zod schema validation via @hookform/resolvers
- **Fonts**: Inter (body/sans) and Plus Jakarta Sans (display/headings)
- **Path aliases**: `@/` maps to `client/src/`, `@shared/` maps to `shared/`

### Backend
- **Runtime**: Node.js with Express
- **Language**: TypeScript, executed via tsx
- **API Pattern**: REST API under `/api/` prefix, with route definitions shared between client and server in `shared/routes.ts`
- **Build**: Custom build script using esbuild for server and Vite for client. Production output goes to `dist/`
- **Dev Server**: Vite dev server runs as middleware in Express during development with HMR support
- **Static Serving**: In production, Express serves the built client from `dist/public` with SPA fallback to `index.html`

### Data Storage
- **Database**: PostgreSQL (required via `DATABASE_URL` environment variable)
- **ORM**: Drizzle ORM with `drizzle-zod` for automatic Zod schema generation
- **Schema Location**: `shared/schema.ts` - shared between client and server
- **Migrations**: Managed via `drizzle-kit push` (schema push approach, not migration files)
- **Tables**:
  - `messages` - Contact form submissions (name, email, service, message, createdAt)
  - `blog_posts` - Blog content (title, slug, excerpt, content, author, coverImage, published, publishedAt)

### Shared Code
- `shared/schema.ts` - Database schema definitions and Zod validation schemas
- `shared/routes.ts` - API route definitions with input/output types, used by both client and server for type safety

### Key Pages
- `/` - Home (hero, services overview, social proof)
- `/services` - Detailed services page
- `/private-cloud` - Private cloud solutions landing page
- `/about` - Company info, mission, values
- `/contact` - Contact form (validates with Zod, submits to API + HubSpot)
- `/client-portal` - Links to external client portals (UISP, ITFlow)
- `/blog` - Blog listing page
- `/blog/:slug` - Individual blog post (renders HTML content with DOMPurify sanitization)

## External Dependencies

### HubSpot CRM Integration
- **Package**: `@hubspot/api-client`
- **Purpose**: Contact form submissions are synced to HubSpot as contacts
- **Auth**: Uses Replit Connectors for OAuth token management (fetches access tokens via `REPLIT_CONNECTORS_HOSTNAME` and `REPL_IDENTITY` or `WEB_REPL_RENEWAL` environment variables)
- **Behavior**: HubSpot submission failures are caught and logged but don't block the API response

### Database
- **PostgreSQL** via `pg` (node-postgres) connection pool
- **Session Store**: `connect-pg-simple` is listed as a dependency for session storage (though sessions don't appear actively used in current routes)

### External Client Portals (linked, not integrated)
- UISP portal at `uisp.bluemogul.us`
- ITFlow portal at `itflow.bluemogul.us`

### Key NPM Packages
- `framer-motion` - Animations
- `wouter` - Client-side routing
- `dompurify` - HTML sanitization for blog content
- `lucide-react` - Icon library
- `date-fns` - Date formatting
- `zod` - Runtime validation (shared between client and server)