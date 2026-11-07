# MammoLingo

<p align="center">
  <img src="dist/mammolingo-wordmark.png" alt="MammoLingo" width="360" />
</p>

<p align="center">
  <strong>Plain-language help for the words in a mammogram report.</strong>
</p>

<p align="center">
  <a href="https://boredpolymath.github.io/MammoLingo/">Try the live glossary</a> ·
  <a href="#why-it-exists">Why it exists</a> ·
  <a href="#privacy-by-design">Privacy</a>
</p>

> **A privacy-first, plain-language glossary for mammogram-report terms.**

Mammogram reports use precise clinical language. MammoLingo makes that language easier to recognize, understand in everyday words, and discuss with a clinician—without asking anyone to create an account, upload a report, or hand over personal information.

**Educational content; not medical advice.** MammoLingo does not interpret reports, diagnose conditions, assess risk, or recommend care.

## Try it now

**[Open MammoLingo →](https://boredpolymath.github.io/MammoLingo/)**

Search a word or phrase from a report, browse by category, or save terms to revisit later. The glossary currently includes 41 independently written entries across assessments, exams and images, findings, and report context.

## Why it exists

Receiving a report with unfamiliar words can feel isolating. A glossary cannot replace a clinician's judgment or explain what a specific result means for a person. It can, however, make a first read calmer and help turn “What does this word mean?” into a more useful conversation.

MammoLingo was made for that small but important in-between moment: when someone wants clear language before the next conversation with their care team.

## What you can do

- **Look up report language in plain English.** Browse 41 terms by category or search directly for the phrase on a report.
- **Prepare better questions.** Every entry includes prompts to take into a conversation with a clinician.
- **See the source.** Entries link out to public, authoritative reference material.
- **Save only what you choose.** Saved terms live in the browser on the device in use.
- **Use it on the go.** It is responsive, keyboard-friendly, installable, and available offline after its first load in supported browsers.

## Privacy by design

MammoLingo is a lightweight static web app with no account, report upload, analytics, advertising, or server-side application code. A search stays in the browser; saved terms stay on the device. No one should need to create a new health-data trail just to look up a word.

## A carefully scoped glossary

The current library covers common U.S. mammography-report language, including general education about BI-RADS assessment categories 0–6. It does not claim to be a complete dictionary, an official implementation of a reporting lexicon, or a replacement for a clinician’s interpretation.

Each explanation is independently written for general education and links to a public source. BI-RADS® is a registered trademark of the American College of Radiology.

## Run it locally

MammoLingo is a build-free static site. Serve the `dist/` directory with any local static-file server, then open the resulting URL in your browser.

```sh
cd dist
python3 -m http.server 8080
```

Open [http://localhost:8080](http://localhost:8080).

## Technology

- Vanilla HTML, CSS, and JavaScript
- Service worker for offline availability
- Browser local storage for on-device saved terms
- GitHub Pages + GitHub Actions for deployment

## Important limits

MammoLingo is for general education only. It cannot explain what a specific report means for an individual, make a diagnosis, estimate risk, or recommend a test or follow-up plan. Discuss report results, symptoms, and care decisions with a qualified clinician. Seek local emergency care for urgent symptoms or emergencies.

## Open source and content stewardship

Original code and repository content are available under the [MIT License](LICENSE). Third-party names, trademarks, and linked source materials remain the property of their respective owners and are not licensed by this repository.

The project maintains release and stewardship documentation:

- [Release-readiness checklist](RELEASE_READINESS_CHECKLIST.md)
- [Content register](CONTENT_REGISTER.md)
- [Content governance workflow](CONTENT_GOVERNANCE.md)
- [Privacy and data inventory](DATA_AND_PRIVACY_INVENTORY.md)
- [Content and intellectual-property policy](CONTENT_AND_IP_POLICY.md)
- [Glossary coverage boundary](GLOSSARY_COVERAGE.md)
- [Operations and incident response](OPERATIONS_AND_INCIDENT_RESPONSE.md)
- [Release notes](RELEASE_NOTES.md)
- [Release sign-off record](RELEASE_SIGNOFF.md)
- [Privacy-respecting launch metrics](LAUNCH_METRICS.md)

## Contribute

MammoLingo is early-stage and intentionally focused. Before proposing content changes, read the content and IP policies above—especially the requirements for independently written explanations, source provenance, and scope limits.
