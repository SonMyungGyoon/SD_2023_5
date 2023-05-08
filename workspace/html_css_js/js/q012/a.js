let promptObj = prompt("값을 입력하세요", "Default Value");

var num = 100;
if (promptObj > num) {
  document.write(promptObj + " 은 100보다 큽니다!");
} else {
  document.write(promptObj + " 이 100보다 작습니다.");
}
