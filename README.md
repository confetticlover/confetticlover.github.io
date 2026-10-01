# ConfettiClover website

A gallery of Hannah & Tina's handmade bracelets and necklaces. Once their Etsy shop is live, every piece links to it.

## Updating the site

Everything you need to change is in **`products.js`**:

- `ETSY_SHOP_URL`: your Etsy shop link. While it's empty (`""`), the site shows "etsy shop coming soon" and nothing links out. Paste the shop link in and every button and card will link to Etsy.
- `HERO`: the banner title and the big photos at the top of the page.
- `PRODUCTS`: one entry per piece. Put photos in `images/` and add the path (for example `"images/sunny-side-up.jpg"`). Set `etsyUrl` to the exact listing so the card opens it. The first four pieces appear under "new arrivals".

Pieces without a photo show a bead drawing made from their `colors`.

## Preview locally

```bash
python3 -m http.server 8123
```

Then open http://localhost:8123.

## Hosting

It's a plain static site (HTML, CSS and JS, no build step), so you can drop the folder onto GitHub Pages, Netlify or Cloudflare Pages for free.
