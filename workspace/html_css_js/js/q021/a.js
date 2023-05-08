for (i = 1; i <= 10; i++) {
  for (k = 10; k - i >= 1; k--) {
    document.write("&nbsp&nbsp&nbsp");
  }
  for (j = 1; j <= i; j++) {
    document.write("☆");
  }
  document.write("<br>");
}
