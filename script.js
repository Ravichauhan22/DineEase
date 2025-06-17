document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('menu-icon');
  const links = document.querySelector('.navbar-links');

  if (toggle && links) {
    toggle.addEventListener('click', () => {
      links.classList.toggle('show');
    });
  }

  const scrollContainer = document.getElementById("gallery-scroll");
  if (scrollContainer) {
    const leftBtn = document.getElementById("gallery-left");
    const rightBtn = document.getElementById("gallery-right");

    leftBtn?.addEventListener("click", () => {
      scrollContainer.scrollLeft -= 300;
    });
    rightBtn?.addEventListener("click", () => {
      scrollContainer.scrollLeft += 300;
    });
  }

  const exploreBtn = document.getElementById('explore-menu-btn');
  if (exploreBtn) {
    exploreBtn.addEventListener('click', () => {
      document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
    });
  }
});
