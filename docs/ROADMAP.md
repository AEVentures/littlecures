# LittleCures Roadmap

This roadmap is a living document. It will be updated as we learn and as contributors join.

## Phase 0: Foundation — complete

- [x] Public landing page with mission and call to action
- [x] GitHub-ready repository structure
- [x] README, CONTRIBUTING, CODE_OF_CONDUCT, and MIT license
- [x] CI workflow for build and test
- [x] Documentation: mission, white paper, architecture, and roadmap
- [x] Initial test suite and utility library

**Exit criteria:** The repository is public, the site builds, tests pass, and a first contributor can join without asking for help.

## Phase 1: Open pediatric trial matching

**Goal:** A clinician or family can find relevant pediatric oncology trials in under one minute.

### Milestones

- [ ] Ingest and cache ClinicalTrials.gov pediatric oncology records
- [ ] Define a patient profile schema (diagnosis, age, prior lines, molecular markers, location)
- [ ] Build a web UI for entering a profile and viewing ranked trial matches
- [ ] Parse eligibility criteria into structured, searchable form
- [ ] Add EU CTR and at least one institutional or COG feed
- [ ] Publish an open API and API documentation

**Exit criteria:** A user can enter a realistic patient profile and receive a ranked list of currently open trials with accurate contact information.

## Phase 2: Open target and IP registry

**Goal:** A researcher can see, for a given neglected pediatric cancer, the key targets, patent landscape, active trials, and available models.

### Milestones

- [ ] Define a normalized target-disease schema
- [ ] Seed the registry for one high-priority disease (DIPG/DMG or relapsed neuroblastoma)
- [ ] Integrate public patent, trial, and genomic data sources
- [ ] Build a queryable web registry and API
- [ ] Add model systems: cell lines, PDXs, organoids, sequencing datasets
- [ ] Publish landscape reports and visualizations

**Exit criteria:** A user can query a disease and receive a complete, sourced landscape report in one page.

## Phase 3: Federated learning pilot

**Goal:** Two or more hospitals can train a shared model on rare tumor data without sharing raw patient records.

### Milestones

- [ ] Select a federated learning framework and reference coordinator
- [ ] Define the minimal data schema for the pilot model
- [ ] Build a hospital client for local training
- [ ] Complete IRB and legal review at pilot sites
- [ ] Train a proof-of-concept model (e.g., risk stratification)
- [ ] Publish the model, code, and a public evaluation

**Exit criteria:** A federated model is trained across at least two sites and evaluated on a held-out test set at each site.

## Phase 4: Access and advocacy infrastructure

**Goal:** LittleCures contributes to policy and access work with open data and tools.

### Milestones

- [ ] Track rare pediatric disease PRV designations and awards
- [ ] Build a dashboard for pediatric oncology drug development incentives
- [ ] Publish open IP and equitable licensing templates
- [ ] Support at least one policy or access campaign with data

**Exit criteria:** A policymaker or advocate can use LittleCures data to make a specific decision or argument.

## Cross-cutting work

These run continuously alongside the phases:

- **Community:** grow and onboard contributors, clinicians, and patient advocates
- **Governance:** establish a steering process and decision-making framework
- **Funding:** apply for grants, foundations, and responsible sponsorships
- **Security and privacy:** maintain audits, incident response, and data-handling policies
- **Documentation:** keep docs, API references, and runbooks current

## How to propose changes

Open a GitHub issue or pull request. Roadmap changes should include the problem being solved, the proposed change, and how it advances one or more of the phase exit criteria.
