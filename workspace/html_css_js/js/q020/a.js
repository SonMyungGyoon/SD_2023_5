for (i = 10; i >= 0; i--) {
  for (k = 10; k - i > 0; k--) {
    document.write("&nbsp&nbsp&nbsp");
  }
  for (j = 0; j < i; j++) {
    document.write("☆");
  }
  document.write("<br>");
}
