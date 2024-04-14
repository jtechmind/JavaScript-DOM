const container = document.querySelector(".container");
const likedHeat = document.querySelector("i");

container.addEventListener("dblclick", function () {
  console.log("object");
  likedHeat.style.opacity = 0.8;
  likedHeat.style.transform = "translate(-100%, -0%) scale(1)";

  setTimeout(function () {
    likedHeat.style.transform = "translate(-100%, -0%) scale(0)";
  }, 2000);
  setTimeout(function () {
    likedHeat.style.opacity = 0;
  }, 1000);
});
