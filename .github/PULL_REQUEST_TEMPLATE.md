## Summary

- what changed: Describe the concrete code or docs change in reviewer-usable terms. Example: added a shared browser-safe wallet pass model and updated frontend imports to stop Vite dev from resolving `/api/shared/*` into a broken client module request.
- why it changed: Explain the user-facing bug, operational gap, or maintainer need this PR addresses. Example: the app was rendering a blank page in local dev because the browser bundle imported a server-side path.
- linked issue: `#123` or `PROJ-123` or `https://tracker.example.com/TASK-123` or `none - no tracked issue exists for this maintainer-scoped cleanup yet`
- acceptance criteria covered: State which expected behaviors now work and where. Example: long docs pages render correctly, the back-to-top button appears after scrolling, and clicking it returns the user to the top.
- risk area touched: `ui`, `docs`, `ci`
- reviewer focus: Start with the first thing a reviewer should verify. Example: confirm the shared wallet pass model is no longer imported from `api/` by browser code and verify the long-page scroll-to-top behavior on `/developer-docs`.

- Call out the main runtime or reviewer consequence in one sentence.
- Mention any changed route, API contract, workflow, or operational surface that deserves extra attention.

## Validation

- [x] I updated this PR body so the summary, validation, and notes reflect the current change.
- [ ] commits are signed off with DCO (`git commit -s`)
- [ ] `npm run test`
- [ ] `npx tsc --noEmit`
- [ ] `npm run build:web`
- [ ] `npm run env:check`
- [ ] `npm run lint:ci`
- [ ] relevant route or smoke checks
- [ ] security checks when secrets, auth, infra, or deploy paths changed
- ran: List the exact checks you ran and the result. Example: `npx tsc --noEmit` passed and manual browser verification on `/developer-docs` confirmed the button appears after scrolling and returns the page to the top.
- did not run: `none` if everything relevant above was covered, otherwise name what was skipped and why.
- reviewer should verify: Give concrete reviewer guidance. Example: reload `/developer-docs` and `/privacy-policy`, scroll past 300px, confirm the floating button appears at bottom-right, and click it to verify smooth scroll to top.

## Notes

- deployment impact: State whether this is runtime-safe, needs coordination, or is deploy-neutral. Example: deploy-neutral frontend and shared-module refactor; no new env vars or migrations.
- migration or env requirements: `none` unless the reviewer or deployer must add env, run a migration, or coordinate rollout steps.
- rollback or release notes: Explain how to revert or whether release notes are unnecessary. Example: revert the shared module import changes and remove the global back-to-top mount if regression is found.
- follow-up work if any: `none` or name any intentional next step not included in this PR.
- reviewer callouts or CODEOWNERS you expect to review this: `none` or list the teams / owners who should pay special attention.

- Add any edge case, known limitation, or reviewer heads-up that would change how this PR should be tested.
