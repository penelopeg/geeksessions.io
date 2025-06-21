# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server on localhost:3000
- `npm run build` - Create production build 
- `npm run start` - Start production server
- `npm run lint` - Run ESLint linter

## Project Architecture

This is a Next.js website for GeekSessions Faro, a tech community organizing events in the Algarve region of Portugal.

### Core Structure
- **Next.js 14** with React 18 - SSR/SSG framework
- **Tailwind CSS** - Utility-first styling with Roboto Condensed font
- **API Integration** - Google Calendar API for dynamic event loading
- **TypeScript** - Type safety (configured but components use .js)

### Key Components
- `components/event-card.js` - Displays individual event details with location, date/time
- `components/activity.js` - Reusable section component for talks/workshops/fireside chats
- `components/header.js` - Site navigation and branding
- `components/footer.js` - Site footer with social links

### API Layer
- `api/[events].js` - Serverless function fetching Google Calendar events
- Uses `@hapi/wreck` for HTTP requests and `luxon` for date handling
- Filters out events starting with "_" and past events
- Sorts events chronologically

### Data Flow
1. Page loads via `getServerSideProps` in `pages/index.js`
2. Calls internal `/api/events` endpoint
3. API fetches from Google Calendar using environment variables:
   - `GOOGLE_CALENDAR_ID`
   - `GOOGLE_CALENDAR_API_KEY`
   - `API_HOST` (optional, defaults to request host)

### Styling Approach
- Tailwind configured for `pages/` and `components/` directories
- Custom gray color palette using `colors.neutral`
- Responsive design with mobile-first approach
- SVG icons in `/public/assets/`

### Environment Setup
Create `.env` file with:
```
GOOGLE_CALENDAR_ID=<calendar_id>
GOOGLE_CALENDAR_API_KEY=<api_key>
API_HOST=http://localhost:3000
```

### Deployment
- Configured for Vercel/Now.sh deployment
- `now.json` present for legacy deployment configuration
- Production builds require Google Calendar API credentials