var input_id;
var input_pw;
var reg_gender;
var gender = "";
var clock_time;

window.onload = function () {
  input_id = document.getElementById("input_id");
  input_pw = document.getElementById("input_pw");
  clock_time = document.getElementById("clock_box");

  init();
};

function getTime() {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const date = now.getDate();
  const minutes = now.getMinutes();
  const hours = now.getHours();
  const seconds = now.getSeconds();
  var now_date = "<h2>" + year + " 년 " + month + " 월 " + date + " 일</h2>";
  var now_clock = "<h1>" + hours + " : " + minutes + " : " + seconds + "</h1>";
  clock_time.innerHTML = now_date + now_clock;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}

function user_login() {
  if (input_id.value == "cat" && input_pw.value == "1234") {
    input_box = document.getElementById("input_box2");
    login_input.style.display = "none";
    alert(input_id.value + "님 환영합니다!");
    input_box.innerHTML = "<h2>" + input_id.value + "님 환영합니다!</h2>";
  } else {
    alert("로그인 실패..");
  }
}
