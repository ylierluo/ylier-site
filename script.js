(() => {
  const header = document.getElementById("siteHeader");
  if (!header) return;

  const threshold = 10;

  const onScroll = () => {
    if (window.scrollY > threshold) header.classList.add("is-translucent");
    else header.classList.remove("is-translucent");
  };

  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
})();