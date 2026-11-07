# Privacy-Respecting Launch Metrics

Owner: Bored Polymath Studios  
Last updated: November 7, 2026

MammoLingo does not instrument searches, term views, bookmarks, completions, or individual user behavior. The app will not add analytics solely to measure launch performance without first updating the data inventory and obtaining the required privacy review.

The owner will review the following aggregate, non-health-data signals monthly:

| Signal | Source | Review action |
| --- | --- | --- |
| Build/test completion | GitHub Actions workflow status | Investigate every failed release check before deployment. |
| External-link health | Manual `pnpm check:links` run and public feedback | Correct or remove failed destinations. |
| Accessibility defects | Public issue tracker labels and validation results | Prioritize barriers and record remediation. |
| Content-feedback trend | Public issue tracker labels, excluding health details | Use the content-governance workflow. |
| Search-success proxy | Voluntary, non-health-data issue feedback only | Do not infer individual behavior or add event tracking. |

This is intentionally not a user-analytics program. It cannot measure a user’s search success or completion rate directly, and that limitation is accepted to avoid creating a health-data trail.
