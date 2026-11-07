# Contributing to MammoLingo

Thank you for helping make mammogram-report language easier to understand. Contributions should keep the app private by design, plainly written, and within its educational scope.

## Before you begin

- Search existing issues before opening a new one.
- Use issues for bugs, accessibility concerns, or focused proposals. Please do not paste a report, image, personal health information, or any other sensitive information.
- Discuss a substantial glossary or policy change in an issue before investing in an implementation.

## Content contributions

Clinical content must follow the repository's [content governance workflow](CONTENT_GOVERNANCE.md), [content and IP policy](CONTENT_AND_IP_POLICY.md), and [glossary coverage boundary](GLOSSARY_COVERAGE.md). In particular, proposed explanations must be independently written, appropriately sourced, and must not diagnose, interpret a person's report, assess risk, or recommend care.

## Development changes

The production site is the static `dist/` directory. Keep changes small and accessible, preserve the no-account/no-upload design, and do not add analytics or third-party trackers without maintainer approval.

Before opening a pull request, run:

```sh
pnpm test
pnpm check
```

Describe the user-facing effect, the verification you ran, and any content source changes. Maintainers may request changes to keep the medical, privacy, and accessibility boundaries intact.

## Code of Conduct

By participating, you agree to follow the [Code of Conduct](CODE_OF_CONDUCT.md).
