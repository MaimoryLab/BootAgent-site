# Official v0.8.0 Alignment Checklist

This checklist records the remaining site work against the official
`MaimoryLab/BootAgent` source. The comparison baseline is tag `v0.7.1`
(`4fe376cb`) and the target is tag `v0.8.0` (`3b9e5a4`, released 2026-08-26).

## Completed in the site

- [x] Download metadata does not claim that every platform is available when
      only one target has a verified artifact.
- [x] Gitee download links are emitted per asset and fall back to GitHub when
      the mirror does not contain that asset.
- [x] Release provenance and the public changelog identify v0.8.0.

## Required follow-up

### Release and updater surface

- [ ] Remove Linux AppImage from release-facing copy and fixtures. v0.8.0 ships
      `.deb`, `.rpm`, and OTA packages only.
- [ ] Document that the desktop updater uses Gitee when the domestic mirror
      setting is enabled and falls back to GitHub when the mirror fails.
- [ ] Add a release-asset contract test for the v0.8.0 asset set, including the
      absence of AppImage and presence of `SHA256SUMS`.

### Agent and desktop catalog

- [ ] Reconcile `data/agents.lock.json` and `data/desktop-agents.json` with the
      v0.8.0 registry and record the source commit for every hand-transcribed
      desktop entry.
- [ ] Add Web App metadata (`web_url`) to the site-facing catalog model and
      render the browser launch behavior separately from terminal commands.
- [ ] Update launch and migration help copy for Web App startup, BOM-tolerant
      config migration, and continue-on-error migration behavior.

### Marketplace

- [ ] Define a site-facing marketplace data contract for SkillHub, MCP Servers,
      extensions, GitHub-backed items, and ecosystem links.
- [ ] Add localized marketplace list and detail routes with source links,
      filters, tags, README content, install prompts, and external-link safety.
- [ ] Add deterministic fixture tests and an accessibility/E2E pass for the
      marketplace list, filters, detail pages, and copy-to-clipboard action.

## Source evidence

The official v0.8.0 change set adds marketplace data and pages, Web App launch
metadata, updater mirror routing/fallback, Linux AppImage removal, and config
migration fixes. These concerns are intentionally separated so each follow-up
PR can be reviewed and deployed independently.
