# LittleCures: An Open Infrastructure for Pediatric Cancer

**Version 0.1.0 · July 2026 · Public draft**

## Abstract

Pediatric cancer is a collection of rare, biologically distinct diseases that receive a fraction of the resources directed at adult oncology. The result is a system that cures the most common childhood leukemia in wealthy countries, but leaves children with diffuse intrinsic pontine glioma (DIPG/DMG), relapsed neuroblastoma, and metastatic sarcomas with essentially no effective therapy. Even for curable diseases, survival is sharply stratified by geography and income.

LittleCures is an open-source, open-data, open-IP project that builds public infrastructure for pediatric oncology. We do not attempt to replace hospitals, biotech companies, or academic labs. We build the shared tools, registries, models, and coordination layers that no single institution has an incentive to build alone. Our work is deliberately designed to be forkable, inspectable, and globally accessible.

## 1. The problem

### 1.1 Biology

Pediatric cancers are not small versions of adult cancers. They are characterized by:

- **Low mutation burden.** Many pediatric solid tumors have fewer than ten nonsynonymous mutations, compared with hundreds or thousands in adult carcinomas.
- **Fusion-driven oncogenesis.** Many high-risk pediatric cancers are driven by structural variants that create fusion oncoproteins (e.g., KIF1B–PHOX2B fusions in neuroblastoma, H3K27M mutations in DIPG).
- **Epigenetic dysregulation.** Tumors such as DMG are dominated by chromatin and developmental pathway disruption, not point mutation.
- **Tissue context.** Children are still developing. Drugs that modulate growth, DNA repair, or differentiation can cause lifelong toxicity.

These differences mean that immunotherapies and targeted agents that transformed adult oncology often fail in children. The therapeutic toolkit for pediatric cancer remains largely cytotoxic: surgery, radiation, and conventional chemotherapy.

### 1.2 Economics and incentives

The global pediatric oncology market is small and fragmented. A drug for a subtype that affects a few hundred children per year cannot support a traditional commercialization path. Consequently:

- Adult oncology trials are prioritized in drug development.
- Pediatric studies are often performed as post-hoc label expansions or at toxic adult-equivalent doses.
- Relapsed and refractory subtypes are not commercially viable targets.

Even when pediatric trials are legally required — for example under the FDA RACE for Children Act — enforcement and follow-through are uneven.

### 1.3 Data and access

Pediatric cancer data is siloed by institution, by country, and by legal regime. No single hospital has enough cases of DIPG or relapsed neuroblastoma to train a reliable survival or response model. At the same time, privacy, consent, and national data-transfer laws make aggregation difficult or impossible.

The result is that the diseases most in need of computational biology are the least amenable to conventional centralized machine learning.

## 2. The open infrastructure approach

We address these constraints with infrastructure that is:

- **Open source.** Code, models, and documentation are public. Anyone can fork, audit, or improve the work.
- **Privacy-preserving.** Patient data is not centralized. Where possible, we use federated learning, differential privacy, and synthetic or de-identified cohorts.
- **Standards-based.** We build on OMOP, GA4GH Phenopackets, FHIR, and other clinical and genomic standards to avoid inventing new silos.
- **IP-aware.** We track patent and licensing status of targets, tools, and data so that public effort is not wasted on inaccessible assets.
- **Global by design.** Tools are built for low-bandwidth, low-resource settings from the start.

## 3. Four technical pillars

### 3.1 Open pediatric trial matching

**Gap.** Most pediatric cancer patients are eligible for at least one open trial, but fewer than 10% are actually matched. Oncologists lack a unified, fast way to search across COG, institutional, national, and international registries.

**Approach.** A public tool that:

- Ingests ClinicalTrials.gov, EU CTR, and institutional feeds.
- Uses structured and natural-language parsing of eligibility criteria.
- Accepts a patient profile: diagnosis, age, prior lines, molecular markers, location.
- Returns ranked trials with contact, phase, and distance.
- Exposes both a web UI and an open API.

**Technical path.** Start with ClinicalTrials.gov API and LLM-based eligibility extraction, then move to more structured parsers and COG/institutional integrations.

### 3.2 Open target and IP registry

**Gap.** There is no single public map of the molecular drivers, patent landscape, active trials, model systems, and sequencing datasets for lethal pediatric cancers. Researchers duplicate effort and may discover too late that a promising target is locked behind an exclusive license.

**Approach.** A registry that tracks:

- Molecular targets and genomic drivers by disease.
- Patent families and licensing status.
- Active and closed trials.
- Cell lines, PDX models, and organoid resources.
- Key publications and derived datasets.

**Technical path.** Combine public patent, trial, and genomic APIs with a normalized schema. Expose a queryable web interface and an API. Engage legal and IP experts to interpret landscape results.

### 3.3 Federated learning for rare tumors

**Gap.** Rare pediatric cancers do not have enough cases at any single site to train robust models, but data cannot easily leave hospitals.

**Approach.** Use federated learning frameworks (Flower, NVFlare, or OpenFL) so that hospitals can train shared models on local data without centralizing patient records. Initially focus on low-stakes, high-value models: risk stratification, treatment response prediction, and similarity matching.

**Technical path.** Stand up a reference coordinator, define a minimal pediatric tumor schema, and partner with one or two hospitals for a pilot.

### 3.4 Access and advocacy infrastructure

**Gap.** Scientific progress does not automatically reach children. Pricing, licensing, and regulatory bottlenecks can block availability, especially in low- and middle-income countries.

**Approach.** Build open tools and data for:

- Patent landscape and freedom-to-operate analysis.
- Equitable licensing templates and open-IP structures.
- Rare pediatric disease priority review voucher (PRV) tracking and policy advocacy.
- Formulary and access mapping.

**Technical path.** Integrate with existing legal and policy frameworks; produce public datasets and dashboards rather than legal advice.

## 4. Governance and values

- **Patient-first.** Every technical and legal decision is evaluated against its effect on children and families.
- **Open by default.** Code, non-sensitive data, and documentation are public.
- **Honesty.** We do not overstate efficacy, promise timelines we cannot keep, or use children as marketing.
- **Anti-capture.** We design structures that prevent a single funder, institution, or company from controlling the commons.
- **Global equity.** We design for access in low-resource settings and avoid geographic paywalls.

## 5. Conclusion

LittleCures is not a single product. It is a public commons for tools, data, and coordination that the pediatric oncology field needs but the market will not build. We are looking for engineers, clinicians, researchers, designers, and advocates who believe that a child’s chance of survival should not depend on market size.

If this model works, it can be replicated or adapted for other rare disease areas. But it starts here.
