// Point every Etsy link at the shop. Until there is a shop, swap in the
// "coming soon" wording (data-soon) and turn the links into plain text.
// An empty data-soon hides the element instead.
const HAS_ETSY = Boolean(ETSY_SHOP_URL);
document.querySelectorAll(".js-etsy, .js-etsy-text").forEach((el) => {
  if (HAS_ETSY) {
    if (el.tagName === "A") el.href = ETSY_SHOP_URL;
    return;
  }
  const soon = el.dataset.soon;
  if (soon === undefined) return;
  if (soon === "") {
    el.hidden = true;
    return;
  }
  el.innerHTML = soon;
  if (el.tagName === "A") {
    el.removeAttribute("href");
    el.removeAttribute("target");
    el.classList.add("is-soon");
  }
});
document.getElementById("year").textContent = new Date().getFullYear();

// Placeholder drawing for pieces without a photo
function beadArt(p, label) {
  const c = p.colors && p.colors.length ? p.colors : ["#c9a27e", "#f4ede6", "#8e6142"];
  const bead = (x, y, r, fill) =>
    `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${r}" fill="${fill}" stroke="rgba(64,54,54,.18)" stroke-width=".8"/>` +
    `<circle cx="${(x - r * 0.35).toFixed(1)}" cy="${(y - r * 0.35).toFixed(1)}" r="${(r * 0.28).toFixed(1)}" fill="#fff" opacity=".45"/>`;
  let out = "";
  if (p.type === "necklace") {
    out += `<path d="M28 18 Q100 200 172 18" fill="none" stroke="#c9a27e" stroke-width="1.2"/>`;
    const n = 17;
    for (let i = 0; i < n; i++) {
      const t = (i + 1) / (n + 1);
      // point on the quadratic curve above
      const x = (1 - t) ** 2 * 28 + 2 * (1 - t) * t * 100 + t ** 2 * 172;
      const y = (1 - t) ** 2 * 18 + 2 * (1 - t) * t * 200 + t ** 2 * 18;
      out += bead(x, y, i === Math.floor(n / 2) ? 10 : 6.5, c[i % c.length]);
    }
  } else {
    const n = 18;
    for (let i = 0; i < n; i++) {
      const t = (2 * Math.PI * i) / n;
      out += bead(100 + 58 * Math.cos(t), 100 + 58 * Math.sin(t), 9.5, c[i % c.length]);
    }
  }
  return `<svg viewBox="0 0 200 200" role="img" aria-label="${label || p.name}">${out}</svg>`;
}

function card(p) {
  const link = p.etsyUrl || ETSY_SHOP_URL;
  const a = document.createElement(link ? "a" : "div");
  a.className = "card";
  if (link) {
    a.href = link;
    a.target = "_blank";
    a.rel = "noopener";
  }
  const swatches = (p.colors || [])
    .slice(0, 5)
    .map((col) => `<span class="swatch" style="background:${col}"></span>`)
    .join("");
  a.innerHTML = `
    <div class="card-media">
      ${p.image ? `<img src="${p.image}" alt="${p.name}" loading="lazy">` : beadArt(p)}
      ${p.soldOut ? `<span class="tag-sold">sold out</span>` : ""}
      <span class="card-heart" aria-hidden="true">♡</span>
      <span class="card-hover">${link ? "view on etsy" : "coming soon to etsy"}</span>
    </div>
    <p class="card-name">${p.name}</p>
    ${p.price ? `<p class="card-price">${p.price}</p>` : ""}
    ${swatches ? `<div class="swatches">${swatches}</div>` : ""}
    <p class="card-meta">${p.type === "necklace" ? "Beaded necklace" : "Beaded bracelet"}</p>`;
  return a;
}

// Fill each shelf: "new" shows the newest four, the others filter by type
document.querySelectorAll("[data-shelf]").forEach((grid) => {
  const shelf = grid.dataset.shelf;
  const items = shelf === "new" ? PRODUCTS.slice(0, 4) : PRODUCTS.filter((p) => p.type === shelf);
  items.forEach((p) => grid.appendChild(card(p)));
  if (!items.length) grid.closest(".shelf").hidden = true;
});

// Hero + story images (fall back to drawings until photos are added)
function fill(id, src, fallback) {
  const el = document.getElementById(id);
  el.innerHTML = src ? `<img src="${src}" alt="">` : beadArt(fallback, "");
}
const firstOf = (type) => PRODUCTS.find((p) => p.type === type) || { type, colors: [] };
document.getElementById("hero-title").textContent = HERO.title;
fill("hero-left", HERO.leftImage, firstOf("bracelet"));
fill("hero-right", HERO.rightImage, firstOf("necklace"));
fill("story-art", HERO.storyImage, PRODUCTS[4] || firstOf("bracelet"));
