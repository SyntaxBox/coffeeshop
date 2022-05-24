let bars = document.querySelector("#bars");
let nav = document.querySelector(".nav");

bars.onclick = tina => {
  nav.classList.toggle("active");
  search.classList.remove("active");
};

let searchBtn = document.querySelector("#search-btn");
let search = document.querySelector(".search");

searchBtn.onclick = tina => {
  search.classList.toggle("active");
  nav.classList.remove("active");
};

window.onscroll = tina => {
  nav.classList.remove("active");
  search.classList.remove("active");
};
