const requestStatus = document.querySelector("h5");
const addFriendBtn = document.querySelector("#add");
let isFriend = false;

addFriendBtn.addEventListener("click", function () {
  if (!isFriend) {
    requestStatus.innerText = "Friend";
    requestStatus.style.color = "green";
    addFriendBtn.innerText = "Remove Friend";
    addFriendBtn.style.background = "#dadada";
    isFriend = true;
  } else {
    requestStatus.innerText = "You May Know";
    requestStatus.style.color = "chocolate";
    addFriendBtn.innerText = "Add Friend";
    addFriendBtn.style.background = "cadetblue";
    isFriend = false;
  }
});
