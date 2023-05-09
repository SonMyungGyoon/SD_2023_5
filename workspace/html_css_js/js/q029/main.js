var input = prompt("가위 바위 보? :");
var user = 0;
var computer = Math.floor(Math.random() * 3) + 1;
document.write("사용자의 입력 : " + input + "<br>");
switch (computer) {
  case 1:
    document.write("컴퓨터의 입력 : 가위<br>");
    break;
  case 2:
    document.write("컴퓨터의 입력 : 바위<br>");
    break;
  case 3:
    document.write("컴퓨터의 입력 : 보<br>");
    break;
}
switch (input) {
  case "가위":
    user = 1;
    break;
  case "바위":
    user = 2;
    break;
  case "보":
    user = 3;
    break;
}
var calc = user - computer;
if (calc == 0) {
  document.write("비겼습니다!");
} else if (calc == 1 || calc == -2) {
  document.write("사용자의 승리!");
} else if (calc == 2 || calc == -1) {
  document.write("컴퓨터의 승리!");
} else {
  document.write("입력 오류!!!");
}
