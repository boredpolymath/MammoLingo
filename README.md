# MammoLingo

<p align="center">
  <img src="dist/mammolingo-wordmark.png" alt="MammoLingo" width="360" />
</p>

<p align="center">
  <strong>Plain-language help for understanding mammogram-report terms.</strong>
</p>

<p align="center">
  <a href="https://boredpolymath.github.io/MammoLingo/">Explore MammoLingo</a> ·
  <a href="#what-it-does">What it does</a> ·
  <a href="#important-limits">Important limits</a>
</p>

MammoLingo makes unfamiliar mammogram terminology easier to recognize and discuss. Search a term, read a concise plain-English explanation, save it on your device, and bring better questions to a conversation with a clinician.

**Educational content; not medical advice.** MammoLingo does not interpret reports, diagnose conditions, assess risk, or recommend care.

## What it does

- **Explains report language in plain English** — including selected BI-RADS categories, breast density, calcifications, and masses.
- **Turns uncertainty into useful questions** — every entry suggests focused questions to discuss with a clinician.
- **Keeps sources in view** — entries link to public, authoritative reference material.
- **Respects privacy by design** — searches stay in the browser; saved terms remain on the device.
- **Works when connection is limited** — once loaded, glossary content and saved terms are available offline in supported browsers.
- **Feels at home on any screen** — responsive navigation, readable cards, keyboard-friendly controls, and accessible dialogs.

## Why MammoLingo

Medical reports can be precise without being easy to read. MammoLingo is designed to make a first pass less intimidating—without pretending that a glossary can replace the expertise and context of a clinician.

It is a lightweight, static web app with no account, report upload, analytics, advertising, or server-side application code. You can look up a term without creating another health-data trail.

## Explore the live app

Visit **[boredpolymath.github.io/MammoLingo](https://boredpolymath.github.io/MammoLingo/)** to try it.

## What’s included today

The current library covers a focused set of common terms and selected BI-RADS categories. BI-RADS 4–6 are not included yet. MammoLingo does not claim to be a comprehensive or official implementation of any reporting lexicon.

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
- [Operations and incident response](OPERATIONS_AND_INCIDENT_RESPONSE.md)

## Contribute

MammoLingo is early-stage and intentionally focused. Before proposing content changes, read the content and IP policies above—especially the requirements for independently written explanations, source provenance, and scope limits.
