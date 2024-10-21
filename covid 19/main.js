function toggleBurgerMenu(event) {
  const parent = event.target.closest(".burger-menu");
  const burgerMenu = parent.querySelector(".burger-menu__list");
  burgerMenu.classList.toggle("burger-menu--collapse");
}

const togglers = document.querySelectorAll(".burger-menu__toggle");
togglers.forEach((item) => {
  item.addEventListener("click", toggleBurgerMenu);
});
