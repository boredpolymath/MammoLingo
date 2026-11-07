# MammoLingo

MammoLingo is a static, plain-language glossary for selected terms that may appear in mammogram reports.

> Educational content; not medical advice. MammoLingo does not interpret reports, diagnose conditions, assess risk, or recommend care.

## Repository and GitHub Pages

This repository is prepared for a public GitHub Pages release. The deployable static site is in `dist/`. The included GitHub Actions workflow deploys that directory when changes are pushed to `main`.

Before the first release, create the public GitHub repository, push `main`, then enable **GitHub Pages → Build and deployment → GitHub Actions** in the repository settings. GitHub will provide the final public URL.

## Local preview

Serve the `dist/` directory with any static-file server, then open the local URL in a browser. No build step or runtime configuration is required.

## Privacy and data handling

The app searches its bundled glossary locally. Saved terms are stored only in the browser’s local storage. It has no accounts, report uploads, analytics, advertising, or server-side application code. Do not enter report text or personal information.

See [DATA_AND_PRIVACY_INVENTORY.md](DATA_AND_PRIVACY_INVENTORY.md), [CONTENT_GOVERNANCE.md](CONTENT_GOVERNANCE.md), and [CONTENT_AND_IP_POLICY.md](CONTENT_AND_IP_POLICY.md) for release controls and limitations.

## Licensing and third-party rights

The original code and original repository content are available under the [MIT License](LICENSE). Third-party names, trademarks, and linked source materials remain the property of their respective owners and are not licensed by this repository. BI-RADS® is a registered trademark of the American College of Radiology.

## Release status

See [RELEASE_READINESS_CHECKLIST.md](RELEASE_READINESS_CHECKLIST.md). A public launch remains blocked on the items marked incomplete, including legal review, accessibility validation, technical QA, and final production checks.
