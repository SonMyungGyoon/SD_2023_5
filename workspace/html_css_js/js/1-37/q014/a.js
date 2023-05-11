let promptObj = prompt("값을 입력하세요", "Default Value");

if (promptObj < 4 && promptObj > 0) {
  switch (promptObj) {
    case "1":
      document.write(promptObj + "입니다.");
      break;

    case "2":
      document.write(promptObj + "입니다.");
      break;

    case "3":
      document.write(promptObj + "입니다.");
      break;
  }
} else {
  document.write("범위 내(1-3)의 값이 아닙니다.");
}
