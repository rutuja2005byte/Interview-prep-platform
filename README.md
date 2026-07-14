# InterviewIQ AI

Production-ready AI interview preparation platform prototype built with Next.js 16, TypeScript, Tailwind CSS v4, Framer Motion, Zod, TanStack Query-ready structure, Recharts, and Prisma.

## Features

- Premium dashboard for progress, streaks, resume status, communication score, and job readiness.
- Assistant-style interview generator.
- Voice interview workflow surface with transcript and scoring concepts.
- Resume analysis surface for PDF upload, ATS scoring, keyword gaps, and recommendations.
- Analytics charts and skill radar.
- Interview history with retry/compare/export-ready data model.
- Normalized PostgreSQL Prisma schema for users, resumes, interviews, transcripts, feedback, communication analysis, readiness, analytics, and notifications.

## Run

```bash
npm install
npm run dev
```

## Integrations To Connect

- Better Auth or Clerk for sign up, login, OAuth, email verification, and protected routes.
- Gemini 2.5/OpenAI GPT-5 through server actions.
- Vapi or OpenAI Realtime API for voice interviews.
- UploadThing and Supabase Storage for resume and recording uploads.
