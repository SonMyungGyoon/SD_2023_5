//js
var btn;
var imgCat;
var isCatOpen = false;

window.onload = function () {
  btn = document.getElementById("btn");
  imgCat = document.getElementById("cat");
  btn.addEventListener("click", popup);
};

function popup() {
  if (isCatOpen == false) {
    imgCat.style.display = "inline";
    isCatOpen = true;
  } else {
    imgCat.style.display = "none";
    isCatOpen = false;
  }
}
