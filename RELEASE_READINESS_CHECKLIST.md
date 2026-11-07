# Release-Readiness Checklist

This is the working release checklist. Checked items reflect decisions or work completed so far; unchecked items remain release work.

## Clinical and content safety

- [ ] Have a qualified breast-imaging clinician review and approve every glossary entry, question prompt, disclaimer, and external link.
- [x] Record source, source-review date, content-library version, independent-composition status, and next-review date for each entry in the content register. A qualified clinical reviewer has not been designated.
- [x] Clearly narrow the initial scope to independently written, general education for terms that may appear in U.S. mammography reports; do not claim comprehensive BI-RADS coverage.
- [ ] Test all copy to ensure it never interprets an individual report, estimates risk, recommends a next step, or creates false reassurance.
- [ ] Add clear escalation guidance for urgent symptoms, confusion about results, and questions requiring a clinician.
- [x] Establish an editorial workflow for corrections, source changes, and emergency content withdrawals, owned by Bored Polymath Studios.
- [ ] Obtain regulatory/legal review if product scope expands beyond education into patient-specific guidance or decision support. See [FDA clinical decision support guidance](https://www.fda.gov/regulatory-information/search-fda-guidance-documents/clinical-decision-support-software).

## Intellectual property and provenance

- [x] Adopt an independently authored, source-linked educational-content policy and public no-endorsement notice.
- [x] Identify BI-RADS® as a trademark of the American College of Radiology when named in the app.
- [ ] Create and maintain a source/provenance record for every entry, including author, source URL, review date, and independent-composition confirmation.
- [ ] Obtain written permission or a license before reproducing, closely paraphrasing, translating, adapting, or presenting third-party lexicon definitions, taxonomies, images, tables, or other expressive materials.
- [ ] Obtain counsel review before a worldwide public launch and before expanding into new modalities, regions, or any proprietary standard coverage.

## Privacy, legal, and trust

- [x] Document the current operating position: Bored Polymath Studios is not operating as a HIPAA covered entity or business associate because it is not acting for a provider, plan, or clearinghouse and does not receive PHI on their behalf. Reassess and obtain counsel review before any change to that data flow. See [HHS health-app guidance](https://www.hhs.gov/hipaa/for-professionals/special-topics/health-apps/index.html).
- [x] Publish a plain-language Privacy Notice and Terms of Use identifying Bored Polymath Studios; legal review remains required before public release.
- [x] Maintain the data inventory covering browser storage, hosting logs, service-worker cache, analytics, error monitoring, and third-party scripts.
- [x] Confirm from the current static-app code and data-flow review that report text and health information are not sent to analytics, logs, support tools, or external vendors.
- [ ] Review hosting and tracking technologies for health-data risk. See [HHS tracking-technology guidance](https://www.hhs.gov/hipaa/for-professionals/privacy/guidance/hipaa-online-tracking/index.html).
- [x] Define retention, deletion, incident-response, and user-support policies for the current static-app model.
- [ ] Obtain counsel’s review of applicable consumer-health, privacy, and accessibility obligations for intended launch locations.

## Accessibility and usability

- [ ] Complete a WCAG 2.2 AA audit, including keyboard-only navigation, dialogs, focus order, live announcements, color contrast, zoom, and reduced-motion behavior. See [WCAG 2.2](https://www.w3.org/TR/WCAG22/).
- [ ] Test with VoiceOver on iOS/macOS, TalkBack on Android, and at least one desktop screen reader.
- [ ] Test mobile layouts at 320px, common phone widths, tablet widths, and desktop widths.
- [ ] Validate all touch targets, fixed bottom-navigation spacing, safe-area handling, and landscape phone behavior.
- [ ] Run moderated usability testing with representative users; solo-developer self-testing is documented but is not a substitute.
- [ ] Ensure plain-language copy is reviewed for reading level, tone, inclusivity, and translation readiness.

## Technical quality

- [ ] Add automated tests for search, filtering, bookmarks, count updates, dialogs, navigation, offline behavior, and service-worker updates.
- [ ] Add production error monitoring that excludes sensitive content.
- [ ] Run a security review: dependency audit, content-security policy, external-link handling, XSS review, and secure headers.
- [ ] Test offline-first behavior, app updates, cache invalidation, unavailable storage, and flaky-network scenarios.
- [ ] Verify all external links, citation destinations, and link-opening behavior.
- [ ] Add CI checks for JavaScript syntax, HTML validity, accessibility linting, and deployment packaging.
- [ ] Document rollback steps and confirm a prior stable version can be restored quickly.

## Launch operations

- [x] Prepare the repository for public GitHub Pages deployment under the MIT License.
- [x] Create the public GitHub repository, enable GitHub Pages through GitHub Actions, and record the public URL: [boredpolymath.github.io/MammoLingo](https://boredpolymath.github.io/MammoLingo/).
- [x] Define Bored Polymath Studios as the owner for clinical-content stewardship, engineering, privacy, support, and incident response.
- [ ] Prepare support contact, feedback intake, issue triage, and response-time expectations.
- [ ] Create release notes, known limitations, and an internal go/no-go sign-off record.
- [ ] Define launch metrics that respect privacy: completion, search success, broken links, accessibility defects, and content-feedback trends.
- [x] Schedule a monthly glossary-source review on the last Monday of each month.
- [x] Schedule a monthly technical dependency and security review on the last Monday of each month.
- [ ] Perform final production smoke tests on desktop and mobile immediately before launch.

## Release blockers

Clinical review, privacy/legal determination, accessibility validation, intellectual-property clearance, and production QA are the release blockers.
