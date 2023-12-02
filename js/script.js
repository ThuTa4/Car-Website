const search = document.querySelector(".searchInput");

document.querySelector(".searchIcon").onclick = () => {
  search.classList.toggle("active");
};

const menu = document.querySelector(".menuIconp");

document.querySelector(".menuIcon").onclick = () => {
  menu.classList.toggle("activeA");
};
