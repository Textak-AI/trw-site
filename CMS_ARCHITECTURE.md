# TRW CMS — Architecture & Roadmap

**Last updated:** April 17, 2026
**Branch for Sprint 1:** `cms-sprint-1-pages`
**Pilot for:** HBC productized white-label CMS platform

---

## What this refactor is

TRW is the pilot engagement for a productized HBC platform: white-label Next.js sites with a built-in editor where clients' teams (or HBC-managed VAs) handle routine copy updates without a developer.

The goal: make Kyle not the bottleneck for copy tweaks. Contractors build new client sites from a template in ~1 day. Clients edit their own content safely without breaking the design.

## The problem this solves

**Before this sprint:** The editor at `/editor` read from a hardcoded `PAGES` array inside `public/editor.html`. When someone clicked "Publish Changes," it wrote to `data/content.json` in the repo via GitHub API. But `app/components/pages.jsx` didn't read that JSON — it had its own hardcoded content. So the editor and the live site drifted. Editor "publishes" went into a black hole.

**After this sprint:** `pages.jsx` and all route files read their content from `data/content.json`. The editor reads from and writes to the same file. Editor edits actually move the live site.

## The architecture (as shipped)

**Approach: JSON content + JSX design.** Each page's JSX layout/styling is preserved as-is in `pages.jsx`. Every editable string, image reference, and array now lives in `data/content.json`. The editor at `/editor` reads from this JSON and publishes edits back via GitHub API, which triggers a Vercel rebuild.

```
┌─────────────────────┐
│  data/content.json  │  ← single source of truth
└──────────┬──────────┘
           │
     ┌─────┴─────┐
     │           │
     ▼           ▼
┌─────────┐  ┌──────────────────────┐
│  /editor │  │ app/page.jsx + etc.  │
│  (v2 UI) │  │ → <XxxContent data/> │
└────┬─────┘  └──────────────────────┘
     │
     ▼
POST /api/publish → GitHub API → commit → Vercel rebuild → live site
```

### What's in content.json
Keyed by page id (`home`, `speakup`, `process`, `about`, `insights`, `classii`, `contact`, `legacies`, `events`). Each page object has content areas (hero, whatWeDo, team, faq, etc.) which in turn have fields (eyebrow, heading, body, btnLabel, etc.) or arrays of items.

### What stays in JSX
All layout: grids, column ratios, spacing, background colors, image sizes, border accents, iframe dimensions, etc. This is the design system; editors cannot break it.

### Admin-only content
Any field prefixed with `_adminOnly_` (e.g., `_adminOnly_nsCallout`) is visible in the editor only to admin-role users. Editor-role users don't see these fields at all. The Norfolk Southern callout on the homepage is the current use case — it's marked admin-only because NS content requires Pauline's review before any change.

## File structure after this sprint

```
app/
├── components/
│   ├── SectionRenderer.jsx      # switch on section.type → correct component
│   ├── sections/                # one file per section type
│   │   ├── Hero.jsx
│   │   ├── StatsBar.jsx
│   │   ├── Cards.jsx
│   │   ├── TextImage.jsx
│   │   ├── TeamGrid.jsx
│   │   ├── Articles.jsx
│   │   ├── EmbedSurvey.jsx
│   │   ├── FAQ.jsx
│   │   ├── CTABanner.jsx
│   │   ├── Timeline.jsx
│   │   ├── Form.jsx
│   │   ├── Quote.jsx
│   │   └── LegacyCard.jsx
│   ├── hardcoded/               # rich sections that stay as fixed JSX
│   │   ├── NSCallout.jsx
│   │   ├── SeriesGrid.jsx
│   │   └── PaulineFeature.jsx
│   ├── Header.jsx               # unchanged
│   ├── Footer.jsx               # unchanged
│   ├── shared.js                # unchanged
│   └── pages.jsx                # DEPRECATED after this sprint — all moved to JSON
├── page.jsx                     # home — reads content.json, renders sections + hardcoded slots
├── speak-up-culture/page.jsx    # reads content.json
├── our-process/page.jsx         # reads content.json
├── about/page.jsx               # reads content.json
├── insights/page.jsx            # reads content.json
├── class-ii-iii/page.jsx        # reads content.json
├── contact/page.jsx             # reads content.json
└── legacies/page.jsx            # reads content.json

data/
├── content.json                 # all page content — single source of truth
└── articles.json                # article metadata (Sprint 2 refactor)

public/
├── editor.html                  # fetches /data/content.json on mount; writes back via /api/publish
└── insights/                    # article HTML files (Sprint 2 refactor)
```

## Sprint roadmap

### Sprint 1 — Pages (shipped April 17)
- [x] Extract `pages.jsx` content into `data/content.json`
- [x] Refactor `pages.jsx` so each component accepts a `data` prop
- [x] Update all 9 page routes to import content.json and pass correct slice
- [x] Keep NS callout and rich sections as hardcoded JSX (with `_adminOnly_` flag in JSON)
- [x] Rebuild `/editor` as v2 that reads content.json and publishes back via `/api/publish`
- [x] Verify clean Next.js build (zero errors, all 15 pages generate)
- [x] Architecture doc and Ella onboarding doc written
- [ ] Pixel-parity QA against production (Kyle's step — test on local dev server before merging to main)
- [ ] End-to-end edit → publish → live verification
- [ ] Merge to main, deploy, cache-bust verify

### Sprint 2 — Articles + Assessments
- [ ] Articles editor screen (metadata form + HTML body + assessment picker)
- [ ] `data/articles.json` as source of truth for article metadata
- [ ] `data/assessments.json` — typed assessment configs (questions, scoring, endpoint)
- [ ] Assessment renderer — generates interactive UI from config (eliminates per-article `assessment-N.js`)
- [ ] Migrate existing 8–9 articles to new format
- [ ] Documented Claude prompt for manuscript → article HTML
- [ ] Add editor section types for series-grid, Pauline feature (migrate from hardcoded)

### Sprint 3 — Productize
- [ ] Extract TRW-specific elements; generalize schema
- [ ] Rebuild `hbc-site-template.zip` as `hbc-site-v2` template repo
- [ ] Write new-client setup SOP (fresh repo → deployed site in ≤1 day)
- [ ] Contractor handoff test with real or dummy project
- [ ] Editor UX hardening: preview-before-publish, version history, section-level locking

## Constraints & context for future Claude instances

**Read these before making changes:**

1. **NS confidentiality is absolute.** Norfolk Southern is a past client. No NS claims on the site without Pauline's explicit approval. The NS callout being hardcoded (not editor-editable) is a deliberate safety measure — don't migrate it to editor-controlled JSON without explicit Kyle + Pauline signoff.

2. **Class I non-solicitation.** No outreach to BNSF, UP, CSX, CN, NS, Amtrak. This applies to any contractor work on this project.

3. **The editor is an HBC productization pilot.** Decisions should optimize for "works well across N future clients," not "works specifically for TRW." Resist TRW-specific hacks; prefer generalizable patterns.

4. **Pauline's voice/brand rules** — see `TheRailWay_ContentWritingGuide.docx` in project knowledge. Rail specificity test. Charlie byline for data/research content, Pauline byline for first-person industry insight. No emojis in article-linked LinkedIn posts from company page.

5. **Deploy gotchas.**
   - GitHub→Vercel auto-deploy webhook has been flaky. Use `npx vercel --prod` as the reliable path.
   - Cache-bust live checks with `?v=$(date +%s)` or similar.
   - Next.js App Router error "Unsupported Server Component type: Module" = content in wrong file, not syntax error.
   - JSX edits via Python `str_replace` are more reliable than `sed` for avoiding shell escaping issues.

6. **Editor env vars** (set in Vercel): `AUTH_SECRET`, `ADMIN_EMAIL`, `ADMIN_PASS`, `EDITOR_PASS`, `GITHUB_TOKEN`, `GITHUB_REPO`. Changes don't take effect until next deploy.

## Success criteria for Sprint 1

Before merging the feature branch:

- [ ] Every page on the live site renders identically to production (pixel-parity QA passed)
- [ ] Editor loads current content from `data/content.json` (not hardcoded)
- [ ] Admin user can edit text in editor, click Publish, and see change live within 3 minutes
- [ ] NS callout, series grid, Pauline feature all still render correctly (hardcoded paths working)
- [ ] All navigation links work; no 404s
- [ ] All forms still submit to correct Formspree endpoints
- [ ] All article links from home/Insights pages still resolve
- [ ] Mobile responsiveness intact
- [ ] Lighthouse scores not regressed
- [ ] Ella onboarding doc written

## Notes on what to NOT break

- `/editor` auth flow (login, admin/editor roles, approval toggle)
- `/api/auth`, `/api/publish`, `/api/pending` routes
- Header nav with Insights dropdown (reads from `shared.js`)
- Article HTML files in `public/insights/` (Sprint 2 territory)
- Assessment JS files in `public/insights/assessment-*.js` (Sprint 2 territory)
- DNS/email config (Namecheap Private Email, SPF/DKIM/DMARC)
- ZoomInfo WebSights script integration
