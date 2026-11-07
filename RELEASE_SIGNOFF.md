# Release Decision Record

Release candidate: 1.0.3  
Prepared: November 7, 2026  
Owner: Bored Polymath Studios

## Completed release evidence

- Automated interaction tests cover search, topic filters, saved-term counts, dialogs, focus restoration, and hash navigation.
- Static validation covers JavaScript syntax, HTML linting, service-worker cache assets, CSP presence, and external-link hardening.
- CI runs the automated suite and a production-dependency audit before GitHub Pages deployment.
- The app contains no analytics, advertising, form, account, report-upload, or error-reporting code. Feedback uses the public GitHub issue tracker and warns against submitting health or personal information.

## Open follow-up work

- [ ] Qualified breast-imaging clinician approval for all glossary content, prompts, disclaimers, and links.
- [ ] Legal/privacy/accessibility review for the intended launch locations.
- [ ] Representative-user usability testing and assistive-technology testing.
- [ ] Final desktop and mobile production smoke test, including a real offline and service-worker-update scenario.
- [ ] Confirm every external source destination using the live deployed build.

## Decision

For the current limited, non-personalized glossary scope, the open items above are recorded risks and follow-up work rather than automatic deployment blocks. The release is eligible for owner-directed GitHub Pages deployment after the changes are committed and the GitHub Actions verification workflow succeeds. Any expansion into patient-specific guidance, proprietary source material, health-data collection, new modalities, or other material scope changes requires a new release decision.

Final approver: ____________________  
Approval date: ____________________  
Deployed commit/version: ____________________
