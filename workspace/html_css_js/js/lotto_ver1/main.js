var lotto = new Array(7);
var user = new Array(1, 11, 19, 23, 26, 37);

document.write("당신의번호 : ");
for (i = 0; i < 6; i++) {
  document.write(user[i] + " ");
  if (i != 5) document.write(",");
}

document.write("<br>로또번호 : ");
for (i = 0; i < 7; i++) {
  var check = 0;
  while (true) {
    var check = 0;
    var temp = Math.floor(Math.random() * 46) + 1;
    for (j = 0; j < i; j++) {
      if (temp == lotto[j]) {
        check = 1;
      }
    }
    if (check == 0) {
      lotto[i] = temp;
      if (i < 6) document.write(lotto[i] + " ");
      if (i < 5) document.write(",");
      if (i == 6) document.write("<br>보너스번호 : " + lotto[i]);
      break;
    }
  }
}
var count = 0;
for (i = 0; i < 6; i++) {
  for (j = 0; j < 6; j++) {
    if (lotto[j] == user[i]) {
      count++;
      break;
    }
  }
}

document.write("<br>" + count + "개의 숫자가 일치하였습니다.!");
if (count == 6) {
  document.write("<br><h1>1등 당첨!<h1>");
} else if (count == 5) {
  var check = 0;
  for (i = 0; i < 6; i++) {
    if (user[i] == lotto[6]) {
      document.write("<br>보너스숫자 일치!!<hr><h1>2등 당첨!<h1>");
      check = 1;
      break;
    }
  }
  if (check == 0) {
    document.write("<br><h1>3등 당첨!<h1>");
  }
} else if (count == 4) {
  document.write("<br><h1>4등 당첨!<h1>");
} else if (count == 3) {
  document.write("<br><h1>5등 당첨!<h1>");
} else if (count <= 2 && count >= 0) {
  document.write("<br><h1>꽝!!!!!<h1>");
} else {
  document.write("<br><h1>프로그램이 뭔가 이상한데?<h1>");
}
