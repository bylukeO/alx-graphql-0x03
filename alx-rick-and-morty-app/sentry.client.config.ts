import * as Sentry from '@sentry/nextjs';

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN || 'https://61e3d3232b3cb500c70b2efb38bd2436@o4509668411179008.ingest.us.sentry.io/4509668448731136',
  tracesSampleRate: 1.0,
}); 