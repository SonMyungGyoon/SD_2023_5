function br() {
  document.write("<br>");
}
var now = new Date();
const year = now.getFullYear();
const month = now.getMonth() + 1;
const date = now.getDate();
const hours = now.getHours();
const minutes = now.getMinutes();
const seconds = now.getSeconds();
const milliseconds = now.getMilliseconds();

document.write(
  "현재 시간 : " +
    year +
    " 년 " +
    month +
    " 월 " +
    date +
    " 일 " +
    hours +
    "시 " +
    minutes +
    "분 " +
    seconds +
    "초 " +
    milliseconds +
    "밀리초"
);
br();
