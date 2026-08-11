# Left Click

Preliminary marketing site for **Left Click** — a Los Angeles home digital-makeover service.

- **Site files:** [`site/`](site/)
- **Domain:** [theleft.click](https://theleft.click)
- **Contact:** [contact@theleft.click](mailto:contact@theleft.click)

## Local preview

From the repo root:

```bash
cd site
python3 -m http.server 8080
```

Open [http://localhost:8080](http://localhost:8080).

Any static server works (`npx serve site`, etc.).

## Formspree setup

The inquiry form posts to Formspree:

```html
action="https://formspree.io/f/xrpzqkdq"
```

In the Formspree dashboard, set the form’s email destination to `contact@theleft.click` (or your Gmail inbox once the alias forwards there).

## GitHub Pages

This repo deploys `site/` via [`.github/workflows/pages.yml`](.github/workflows/pages.yml) on pushes to `main`.

### One-time GitHub settings

1. **Settings → Pages → Build and deployment → Source:** GitHub Actions.
2. After the first successful workflow run, confirm the site URL under Pages.
3. **Custom domain:** add `theleft.click` (the repo already includes [`site/CNAME`](site/CNAME)).

### DNS (at your domain registrar)

Point `theleft.click` at GitHub Pages. Typical setup:

| Type | Name | Value |
|------|------|--------|
| `A` | `@` | `185.199.108.153` |
| `A` | `@` | `185.199.109.153` |
| `A` | `@` | `185.199.110.153` |
| `A` | `@` | `185.199.111.153` |
| `AAAA` | `@` | `2606:50c0:8000::153` |
| `AAAA` | `@` | `2606:50c0:8001::153` |
| `AAAA` | `@` | `2606:50c0:8002::153` |
| `AAAA` | `@` | `2606:50c0:8003::153` |

Optional `www` → CNAME to `YOUR_USER.github.io` (or redirect at the registrar).

After DNS propagates, enable **Enforce HTTPS** in the Pages settings.

Confirm that the `contact@theleft.click` mailbox is live before sharing the site widely.

## Brand

- Palette: `#F08080` `#FBC0B5` `#2B2B2B` `#555555` `#F5F5F5`
- Logo: [`site/assets/logo.png`](site/assets/logo.png)
- YouTube: [youtube.com/@TheLeftClick](https://www.youtube.com/@TheLeftClick)

## Planning

OpenSpec change: `openspec/changes/preliminary-marketing-site/`
