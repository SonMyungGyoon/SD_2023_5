var input_id;
var input_pw;
var reg_gender;
var gender = "";

window.onload = function () {
  input_id = document.getElementById("input_id");
  input_pw = document.getElementById("input_pw");
  login_box = document.getElementsById("ment");
};

function user_login() {
  if (input_id.value == "cat" && input_pw.value == "1234") {
    login_box.innerHTML = "회원님 반갑습니다.";
    alert("로그인 성공!");
  } else {
    alert("로그인 실패..");
  }
}
