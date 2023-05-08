let promptObj = prompt("값을 입력하세요", "Default Value");

if (promptObj > 100) {
  document.write(promptObj + " 은 100보다 큽니다!");
} else if (promptObj < 100 && promptObj >= 50) {
  document.write(promptObj + " 이 100보다 작고 50보다 큽니다.");
} else if (promptObj < 50) {
  document.write(promptObj + " 이 50보다 작습니다.");
}
