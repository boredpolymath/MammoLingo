# Operations and Incident Response

Last updated: November 6, 2026  
Accountable owner: Bored Polymath Studios  
Deployment: public GitHub repository and GitHub Pages

## Ownership

Bored Polymath Studios owns the following functions for MammoLingo:

| Function | Responsibility |
| --- | --- |
| Content stewardship | Source reviews, corrections, withdrawals, and release approval under the content-governance workflow. |
| Engineering | Repository maintenance, GitHub Actions, GitHub Pages, dependency review, validation, and rollback. |
| Privacy | Maintaining the data inventory and reviewing any proposed change to data flow, storage, third-party code, or tracking. |
| Support | Maintaining the stated no-contact support model and ensuring the app does not imply a support channel exists. |
| Incident response | Triage, containment, recovery, public notice where needed, and an internal incident record. |

## Retention and deletion

The app has no server-side application database, accounts, report uploads, or support intake.

- Saved terms remain only in the user’s browser local storage until the user selects **Clear all** or clears site data.
- Offline app files remain in the browser cache until the browser clears them or a new app version replaces the cache.
- GitHub retains repository history and Pages deployment records according to GitHub’s service controls and policies.
- Bored Polymath Studios will not intentionally add a personal-data store without updating the data inventory, Privacy Notice, and applicable legal review.

## Support model

MammoLingo currently offers no email address, form, postal address, or other user-support channel. The app must not invite users to submit medical reports or personal information. Content and safety issues discovered through the owner’s reviews or any legitimate external channel are handled under the content-governance workflow.

## Incident response

An incident includes a suspected security compromise, unexpected personal-data collection or exposure, malicious repository change, broken deployment, material content-safety issue, or substantiated intellectual-property concern.

1. **Triage:** Bored Polymath Studios records the date, reporter/source, affected system or content, known impact, and severity.
2. **Contain:** For a security or privacy concern, remove or revert the affected GitHub commit, disable GitHub Pages if necessary, rotate affected credentials outside the repository, and remove unsafe links or scripts. For content/IP concerns, withdraw the affected entry or restrict site access when that is safer.
3. **Assess:** Identify the affected release, user impact, data involved, root cause, and applicable notification or legal obligations.
4. **Recover:** Validate the corrected static build, deploy a fixed version, and confirm the public URL returns the intended content.
5. **Communicate:** Where user notice is appropriate or legally required, publish a clear notice on the site and in the repository. Do not make claims beyond verified facts.
6. **Learn:** Record corrective actions and update the checklist, data inventory, content register, or controls before closing the incident.

## Rollback

To roll back a faulty release, identify the last known-good commit on `main`, restore the static `dist/` content from that commit, validate it, and push the rollback commit. GitHub Pages deploys the updated `dist/` directory through the repository workflow. If the app itself must be unavailable during investigation, disable GitHub Pages in the repository settings until a verified build is ready.

## Review triggers

Revisit this document before enabling accounts, analytics, advertising, external scripts, report uploads, contact methods, health-provider partnerships, server-side code, databases, custom domains, or any new data flow.

## Monthly technical review

On the last Monday of every month at 9:00 AM Eastern, Bored Polymath Studios reviews:

- GitHub repository access, branch protection, security alerts, and GitHub Pages settings;
- GitHub Actions versions, workflow failures, and deployment history;
- external source links, service-worker cache/version behavior, and browser-storage behavior;
- changes that could affect accessibility, security, privacy, or the stated educational scope; and
- the release checklist and this operations record.

The first scheduled review is November 30, 2026. Record findings and corrective actions in the repository before closing the review.
