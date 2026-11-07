# Data and Privacy Inventory

Last reviewed: November 6, 2026  
Operator: Bored Polymath Studios  
Scope: MammoLingo current static-web-app release

## Operating position

Bored Polymath Studios is not a health plan, health care clearinghouse, or health care provider conducting covered electronic transactions. It is not acting for, contracted by, or receiving protected health information from a provider, plan, clearinghouse, or their business associate. On the current facts, the project is not operating as a HIPAA covered entity or business associate.

This is an operational classification, not legal advice or a legal determination. It must be reassessed before any account, report upload, patient-specific feature, analytics product, provider partnership, referral arrangement, API connection, or other flow that could create, receive, maintain, or transmit identifiable health information.

HHS explains that a business associate relationship depends on whether an entity creates, receives, maintains, or transmits PHI on behalf of a covered entity. See [HHS guidance on apps and business associates](https://www.hhs.gov/hipaa/for-professionals/faq/does-hipaa-require-a-covered-entity-to-enter-into-a-business-associate-agreement.html).

## Current data flows

| Activity | Data | Location | Sent to Bored Polymath Studios | Retention/control |
| --- | --- | --- | --- | --- |
| Glossary search | A search phrase typed into the page | Browser memory while the page is open | No | Removed when the page/browser state is cleared. |
| Saved terms | Glossary entry ID and saved-at timestamp | Browser local storage under `mammogram-bookmarks` | No | User can select **Clear all** or clear the site’s browser data. |
| Offline access | Static app files and cached responses | Browser Cache Storage/service-worker cache | No | Cleared by browser data controls; cache is refreshed when the app updates. |
| Glossary/source links | A request to the selected external publisher | External publisher | No, by this app | Governed by the external publisher’s practices. |
| Site delivery | Ordinary technical connection data such as IP address, browser/device details, request time, and requested pages | Hosting-provider infrastructure | May be processed by the host to deliver and secure the site | Subject to the host’s operating and retention practices; no product analytics or marketing tracking is configured. |

## Current exclusions

The app has no accounts, logins, report uploads, contact forms, customer-support intake, advertising, analytics, behavioral profiling, marketing cookies, error-reporting service, database, or server-side application code. It is not designed to receive report text, health details, or other personal information.

## Required review triggers

Review this inventory and seek privacy/legal advice before enabling any new third-party script, tag manager, analytics, advertising, form, email, support tool, account, cloud database, provider connection, embedded content, report upload, or patient-specific functionality. Confirm the hosting provider’s logging, security, and retention terms before a public launch.
