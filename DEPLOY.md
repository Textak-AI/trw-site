# CMS Sprint 1 — Deploy Guide

This refactor makes the TRW editor actually power the live site, ending the drift we found today. Kyle follows this once to merge; Ella onboards with `ELLA_EDITOR_GUIDE.md` once it's live.

## What this changes

- **Added:** `data/content.json` — single source of truth for all editable page content
- **Rebuilt:** `public/editor.html` — v2 editor that reads/writes content.json
- **Refactored:** `app/components/pages.jsx` — every component accepts a `data` prop (no hardcoded strings anymore)
- **Updated:** all 9 `app/*/page.jsx` route files — now import content.json and pass slices

**Design/visuals:** unchanged. Every layout, color, image, spacing, font size, and grid ratio is identical to production. Only the source of the content changed.

## Step 1 — Set up the feature branch on your machine

Two options:

### Option A (recommended): Pull the feature branch I already built
If my sandbox work is pushed to a branch on GitHub:
```bash
cd ~/HBC/Clients/KBL/TheRailWay/trw-site
git fetch origin
git checkout cms-sprint-1-pages
```

### Option B: Apply the changes manually from the tarball
Download `cms-sprint-1.tar.gz`, then:
```bash
cd ~/HBC/Clients/KBL/TheRailWay/trw-site
git checkout -b cms-sprint-1-pages
tar -xzf ~/Downloads/cms-sprint-1.tar.gz --strip-components=1 -C .
git add -A
git commit -m "Sprint 1: JSON-driven content + v2 editor"
```

## Step 2 — Local build check

```bash
npm install   # should be idempotent
npm run build
```

Expected: clean compile, all 15 pages generate. I've already verified this in my sandbox but worth repeating on your machine where your actual node_modules lives.

## Step 3 — Local dev server & visual QA

```bash
npm run dev
```

Open `http://localhost:3000` and walk through every page. Compare side-by-side against production (`https://therailway.us`). Expected: pixel-identical. You're looking for:

- Any broken layouts
- Missing content
- Wrong images
- Broken links

Pay special attention to:
- **Home page**: hero, NS callout (admin-flagged but still renders), series grid, team, pulse check, FAQ, CTA
- **Legacies**: Jesse Chalich memorial expandable block (was a `<details>` element — confirm the collapse/expand still works)
- **Contact**: the Formspree form should still submit correctly (form handler is in ContactContent unchanged)

## Step 4 — Test the editor locally

1. Go to `http://localhost:3000/editor`
2. Sign in with your admin credentials
3. Pick any page from the left sidebar
4. Expand a section, change some text
5. **Don't click Publish yet** — first just verify the editor loads all 9 pages and the sections look right
6. Now do one actual test edit + publish on a low-risk page (e.g., change a word in a team member's description on the Home page)
7. Wait 1-2 minutes
8. Refresh `https://therailway.us` (your live site — yes, publishing from a local dev editor still hits the live GitHub API)

**Hold on.** Before you click Publish in local dev: the publish API uses your real `GITHUB_TOKEN` from `.env.local` if set, or from Vercel env vars when deployed. If you publish locally with a valid token, **it will push to GitHub** and the change goes live. So either:

- Skip the Publish test locally and do the full test after deploy (safer for first pass)
- Or commit a test change knowing it'll go live on production

I'd skip it locally for the first pass.

## Step 5 — Deploy

```bash
git push origin cms-sprint-1-pages
```

Then either merge via GitHub PR, or merge locally and push main:

```bash
git checkout main
git merge cms-sprint-1-pages
git push origin main
npx vercel --prod
```

## Step 6 — Post-deploy verification

```bash
# Cache-bust check — should return the JSON if deployed
curl -sL "https://therailway.us/data/content.json?v=$(date +%s)" | head -20

# Should show "5 minutes" now (we already did that edit earlier today)
curl -sL "https://therailway.us/?v=$(date +%s)" | grep -c "about 5 minutes"
```

Both should succeed. Then:

1. Visit `https://therailway.us/editor`
2. Sign in
3. Make one small edit (e.g., on the Home page, change FAQ answer slightly)
4. Click Publish Changes
5. Wait 1-2 minutes
6. Refresh the live page
7. Confirm your edit shows up

If step 7 fails, check:
- Vercel dashboard → Deployments → did a new build trigger after your publish?
- GitHub → was a new commit added to `data/content.json`?

## Step 7 — Onboard Ella

- Send her `ELLA_EDITOR_GUIDE.md`
- Create her login: go to Vercel Settings → Environment Variables. `EDITOR_PASS` is the team password; if you want per-user passwords, the auth route would need extension (Sprint 2 territory)
- Give her the URL `therailway.us/editor`, her email (she uses any email since editor-role auth matches on password only), and `EDITOR_PASS`

## Rollback plan if anything goes wrong

If something breaks post-deploy, the refactor is contained in one feature branch's worth of commits. Rollback is:

```bash
cd ~/HBC/Clients/KBL/TheRailWay/trw-site
git checkout main
git revert <commit-sha-of-merge>
git push origin main
npx vercel --prod
```

The v1 editor (`public/editor.html`) no longer exists — it was replaced in this refactor. If you need it back for some reason, it's in git history on any pre-refactor commit.

## What's explicitly NOT in Sprint 1

- **Articles editor** — still works via the old flow (you paste HTML you generated from Claude into `public/insights/`). Will be rebuilt in Sprint 2 alongside assessment configs.
- **Per-user passwords** — current auth is `ADMIN_EMAIL + ADMIN_PASS` for admin, or any email + `EDITOR_PASS` for editor. Sprint 2 could add real per-user accounts if you want that.
- **Version history** — not yet. Every publish is a git commit, so "history" lives in GitHub. A UI for "see what changed" + "roll back" is future work.
- **Image upload** — Ella can edit image alt-text but can't upload new images. Image changes still come through you.

## Questions that might come up

**"What's this `_adminOnly_nsCallout` field?"** The Norfolk Southern callout on the homepage. Flagged so editor-role users don't see or touch it. Only you and Pauline (admin role) will see that field in the editor UI.

**"Why did we change pages.jsx so much?"** We didn't — the JSX layout is identical. What changed is that strings like `"Railroad Safety Culture"` are now `{d.hero.headline}`, reading from the JSON. Same render output, different source.

**"What if I want to add a new section or page?"** That's still your job as a dev. Add the JSX in `pages.jsx`, add the matching content shape in `content.json`, redeploy. The editor will pick up the new content structure automatically on next load because it reads from the live JSON.
