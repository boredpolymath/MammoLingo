# Release Notes

## 1.0.3 — November 7, 2026

- Expanded the library to 41 independently authored terms, grouped into assessment, exam and image, finding, and context categories.
- Replaced narrow topic pills with scalable category filters: All terms, Assessments, Exams & images, Findings, and Context.

## 1.0.2 — November 7, 2026

- Expanded the independently authored, source-linked library to 20 common U.S. mammography-report terms, including BI-RADS categories 4–6, exam types, 3D mammography, comparisons, extra views, selected findings, and implant context.
- Replaced the former “BI-RADS 4–6 not included” message with an explicit selected-library boundary. The app does not claim complete or official BI-RADS lexicon coverage.

## 1.0.1 — November 7, 2026

- Added public GitHub issue tracking for non-urgent app, content, accessibility, and link feedback, with a clear warning not to submit health or personal information.
- Added prominent guidance to seek local emergency care for urgent symptoms and to contact a qualified clinician for report questions.
- Added safer external-link handling, a restrictive static-site Content Security Policy, reduced-motion support, dialog focus restoration, and an explicit app-update reload action.
- Improved offline handling so the service worker does not intercept third-party requests and only falls back to the app shell for failed same-origin navigation.
- Added automated tests and CI checks for core glossary interactions, syntax, HTML validation, service-worker assets, and production dependency auditing.

## Known limitations

- The library is intentionally limited; report language varies, and the app does not include every possible finding, descriptor, modality, or local reporting convention.
- It provides general education only; it cannot interpret an individual report, diagnose a condition, estimate risk, or recommend care.
- It has not received qualified breast-imaging clinical review, legal review, representative-user usability testing, or assistive-technology testing. These remain open follow-up items in the checklist.
- The public GitHub issue tracker is not a support or medical-advice channel and must not receive personal or health information.
