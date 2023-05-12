window.onload = function () {
  reg_id = document.getElementsById("reg_id");
  reg_pw = document.getElementsById("reg_pw");
  reg_pw_check = document.getElementsById("reg_pw_check");
  reg_name = document.getElementsById("reg_name");
  reg_email = document.getElementsById("reg_email");
};

function user_reg() {
  reg_gender = document.getElementsByName("reg_gender");
  for (i = 0; i < reg_gender.length; i++) {
    if (reg_gender[i].checked == true) {
      gender = reg_gender[i].value;
      console.log(gender + "check");
    }
  }
  if (reg_id.value.length > 5 && reg_id.value.length < 13) {
    if (reg_pw.value.length > 7 && reg_pw.value.length < 20) {
      if (reg_pw.value == reg_pw_check.value) {
        if (reg_name.value.length > 2 && reg_name.value.length < 10) {
          if (reg_email.value.length > 10 && reg_email.value.length < 25) {
            alert(
              "회원가입 완료!\n이름 : " +
                reg_name.value +
                "\n이메일 : " +
                reg_email.value +
                "\n성별 : " +
                gender
            );
            location.href = "index.html";
          } else {
            alert("이메일 입력값 에러!");
          }
        } else {
          alert("이름 입력값 에러!");
        }
      } else {
        alert("비밀번호확인 입력값 에러!");
      }
    } else {
      alert("비밀번호 입력값 에러!");
    }
  } else {
    alert("아이디 입력값 에러!");
  }
}
