# Security Policy

## Supported Versions

LittleCures is an early-stage open-source project. Security fixes are applied to
the `main` branch only. There are no long-term-support versions yet.

## Reporting a Vulnerability

**Please do not open a public GitHub issue for security vulnerabilities.**

Report privately by:

1. Emailing `security@aeventures.com` (preferred), or
2. Opening a [private security advisory](https://github.com/AEVentures/littlecures/security/advisories/new) on GitHub.

Please include:

- A description of the vulnerability and its potential impact.
- Steps to reproduce or proof-of-concept code.
- The version, commit hash, or environment where you observed the issue.
- Whether you would like public credit after a fix ships.

We will acknowledge receipt within 72 hours and aim to provide a mitigation or
fix within 14 days for high-severity issues. We will coordinate a disclosure
timeline with you before publishing details.

## Scope

In scope:

- The LittleCures website (`littlecures.org`).
- The `AEVentures/littlecures` repository, including its build and deployment
  pipeline.
- Any published packages or SDKs from this repository.

Out of scope:

- Third-party services we depend on (report to those vendors directly).
- Social engineering of maintainers.
- Denial-of-service attacks against the public site.

## Handling of Sensitive Data

LittleCures does not collect personal health information (PHI) in this
repository. All work involving real patient data must be done inside
institutional systems with appropriate IRB approval and data governance. Never
commit real patient data, credentials, or API keys to this repository.
