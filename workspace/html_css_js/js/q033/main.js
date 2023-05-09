var user = 0;
var input = "";
var inputText;
var outputText;
var userImage;
var comImage;

window.onload = function () {
  inputText = document.getElementById("userRCP");
  outputText = document.getElementById("outputArea");
  userImage = document.getElementById("userImg");
  comImage = document.getElementById("comImg");
};
function rcpInputBtnClick() {
  input = inputText.value;
  output = "";
  if (input == "가위" || input == "바위" || input == "보") {
    switch (input) {
      case "가위":
        user = 1;
        userImage.src = "scissor.jpg";
        break;
      case "바위":
        user = 2;
        userImage.src = "rock.jpg";
        break;
      case "보":
        user = 3;
        userImage.src = "paper.jpg";
        break;
    }
    var computer = Math.floor(Math.random() * 3) + 1;
    output += "사용자의 입력 : " + input + "\n";
    switch (computer) {
      case 1:
        output += "컴퓨터의 입력 : 가위\n";
        comImage.src = "scissor.jpg";
        break;
      case 2:
        output += "컴퓨터의 입력 : 바위\n";
        comImage.src = "rock.jpg";
        break;
      case 3:
        output += "컴퓨터의 입력 : 보\n";
        comImage.src = "paper.jpg";
        break;
    }

    var calc = user - computer;
    if (calc == 0) {
      output += "비겼습니다!";
    } else if (calc == 1 || calc == -2) {
      output += "사용자의 승리!";
    } else if (calc == 2 || calc == -1) {
      output += "컴퓨터의 승리!";
    } else {
      output += "입력 오류!!!";
    }

    outputText.value = output;
  } else {
    alert("입력이 잘못되었습니다. 다시 입력해주세요.");
  }
}
