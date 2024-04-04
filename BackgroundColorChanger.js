document.querySelector("div").addEventListener("click", (e) => {
  // alert(e.target.className);
  // alert(e.target.style.backgroundcolor);
  // alert(window.getComputedStyle(e.target))
  document.body.style.background = e.target.className;
});
