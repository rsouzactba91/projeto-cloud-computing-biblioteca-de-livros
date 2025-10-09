document.addEventListener("DOMContentLoaded", function () {
  // ===============================
  // CARDS 3D
  // ===============================
  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    // click para alternar
    card.addEventListener("click", function (e) {
      if (e.target.closest('a')) return; // ignora links
      card.classList.toggle("flipped");
      card.setAttribute("aria-pressed", card.classList.contains("flipped") ? "true" : "false");
    });

    // teclado para alternar
    card.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        card.classList.toggle("flipped");
        card.setAttribute("aria-pressed", card.classList.contains("flipped") ? "true" : "false");
      } else if (e.key === "Escape") {
        card.classList.remove("flipped");
        card.setAttribute("aria-pressed", "false");
      }
    });
  });

  // fechar todos os cartões ao clicar fora
  document.addEventListener("click", function (e) {
    if (!e.target.closest(".card")) {
      document.querySelectorAll(".card.flipped").forEach(c => {
        c.classList.remove("flipped");
        c.setAttribute("aria-pressed", "false");
      });
    }
  });

  // ===============================
  // NAVBAR MOBILE TOGGLE
  // ===============================
  const navToggle = document.querySelector(".nav-toggle");
  const navActions = document.querySelector(".nav-actions");

  if (navToggle && navActions) {
    navToggle.addEventListener("click", function () {
      navActions.classList.toggle("active");
    });

    // opcional: fecha menu ao clicar em link
    navActions.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", function () {
        navActions.classList.remove("active");
      });
    });
  }

  // ===============================
  // ESCONDER NAVBAR MOBILE NO DESKTOP
  // ===============================
  function checkNavbar() {
    if (window.innerWidth > 720) {
      navActions?.classList.remove("active");
    }
  }

  window.addEventListener("resize", checkNavbar);
  checkNavbar(); // chamada inicial
});
