# PROJECT STATE — CreditFlow

## CURRENT OBJECTIVE
Deliver a polished, end-to-end demonstrable financial intelligence MVP while keeping the integration and intelligence boundaries ready for secure production expansion.

## IMPLEMENTED FEATURES
- Responsive dashboard with financial health, utilization, payment history, insights, upcoming payments, and action completion/snoozing.
- Financial profile with score trend, key factors, utilization explanation, and account summaries.
- Action plan with deterministic priority ordering and action state changes.
- Goal progress views, demo banner, offline awareness, in-app toast feedback, loading and empty states.
- Sandbox provider with realistic, explicitly simulated account data.
- Unit tests for utilization, paydown recommendation, and action ordering.

## CURRENT ARCHITECTURE
- **Frontend:** Vite + React + TypeScript in `src/main.tsx`; responsive system in `src/styles.css`.
- **Backend/database/authentication:** Not yet implemented. The UI deliberately operates only in local Demo Mode.
- **Integrations:** `FinancialProvider` interface and `SandboxProvider` under `src/integrations` isolate provider-specific behavior.
- **Intelligence:** deterministic analysis under `src/services`; plain-language UI avoids presenting advice as verified financial guidance.

## KEY DECISIONS
- The original repository was only a VirtualFluxBot privacy-policy site, so no useful application code or schema was overwritten.
- Real connections are not imitated: the application labels every sample-data experience as Demo Mode.
- Calculations use a simple, testable revolving-credit utilization model and a 30% target. They are educational indicators, not bureau scores.

## KNOWN ISSUES
- There is no server, database, authentication, encryption, provider OAuth flow, cross-device persistence, or real notification delivery.
- Action changes are client-only and disappear on a browser refresh.
- Goal creation and action changes are client-only; they disappear on refresh until a server-side persistence layer is introduced.

## NEXT PRIORITIES
1. Add a server-side authenticated API and normalized, tenant-isolated database schema with migrations.
2. Implement onboarding, consent records, audit logging, session security, password reset, and protected routes.
3. Add encrypted provider-token storage and a production adapter behind the existing interface.
4. Persist actions/goals and add notification delivery plus safe offline synchronization.
5. Add integration/API authorization tests and browser E2E coverage.

## AI HANDOFF
Start with `src/domain.ts`, then preserve `FinancialProvider` as the sole integration boundary. Keep score and payment calculations deterministic, tested, and explicitly labelled educational. Before adding real data, build the server-side ownership model and require it on every query/mutation.
