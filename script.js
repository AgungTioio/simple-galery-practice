const mainImage = document.querySelector("div.container div.view img.views");
const images = document.querySelectorAll("div.main div.card img");
let i = 0;
images.forEach(function (img) {
  img.addEventListener("click", function (e) {
    const changeImages = e.target.src;
    mainImage.setAttribute("src", changeImages);
  });
});
