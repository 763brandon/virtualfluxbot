# CreditFlow

CreditFlow is a mobile-first financial intelligence MVP that turns account, payment, utilization, and goal data into clear educational next steps. It ships in **Demo Mode** with a realistic sandbox financial provider; no real accounts or credentials are required.

## Stack and architecture

- **Frontend:** React, TypeScript, Vite, responsive CSS.
- **Domain and calculations:** `src/domain.ts` and deterministic utilities in `src/services/financial.ts`.
- **Intelligence layer:** `src/services/intelligence.ts` builds explainable metrics from deterministic calculations. It is educational, not professional financial advice.
- **Integration layer:** `src/integrations/provider.ts` defines the provider contract; `sandbox-provider.ts` provides isolated simulated data ready to be replaced by a credentialed adapter.
- **State:** the current MVP is client-side and uses no personal financial data. A production backend must enforce authenticated user ownership before real data is supported.

## Local setup

Requires Node.js 20+. Copy `.env.example` to `.env` if you need to override the optional public configuration, then run:

```bash
npm install
npm run dev
```

Open the URL Vite prints (normally `http://localhost:5173`). Use `npm run build` for a production bundle, `npm run lint` for static checks, and `npm test` for financial-calculation tests.

## Important MVP boundaries

Demo Mode is intentionally prominent and uses simulated data. CreditFlow does not connect to an institution, persist accounts, authenticate users, or provide financial advice in this repository. Real deployment needs an authenticated API, encrypted server-side integration tokens, per-user authorization, audit logging, rate limits, and database migrations before any live provider is enabled.
