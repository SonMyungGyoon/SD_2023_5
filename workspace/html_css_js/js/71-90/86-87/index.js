//js
var popup;
var popup_btn;

window.onload = function () {
  popup = document.getElementById("popup");
  btn = document.getElementById("popup_btn");
  btn.addEventListener("click", popupclose);
};

function popupclose() {
  //  alert("check");
  //popup.style.display = "none";
  popup.style.color = "blue";
  popup.style.height = "300px";
  popup.style.width = "400px";
  popup.style.transitionDuration = "2s";
  popup.style.background = "gray";
  popup.style.transitionProperty = "width, height, background";
}
