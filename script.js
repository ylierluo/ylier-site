(() => {
  // Fixed header translucency on scroll
  const header = document.getElementById("siteHeader");
  if (header) {
    const threshold = 10;
    const onScroll = () => {
      if (window.scrollY > threshold) header.classList.add("is-translucent");
      else header.classList.remove("is-translucent");
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  // Works grid: newest first (reverse DOM order) — only on index
  const grid = document.getElementById("worksGrid");
  if (grid) {
    const cards = Array.from(grid.querySelectorAll(":scope > .card"));
    cards.reverse().forEach((card) => grid.appendChild(card));
  }
})();