const requestStatus = document.querySelector("h5");
const addFriendBtn = document.querySelector("#add");
const rmFriendBtn = document.querySelector("#remove");

addFriendBtn.addEventListener("click", function () {
  requestStatus.innerText = "Friend";
  requestStatus.style.color = "green";
});

rmFriendBtn.addEventListener("click", function () {
  requestStatus.innerText = "You May Know";
  requestStatus.style.color = "chocolate";
});
