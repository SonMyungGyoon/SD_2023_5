var random;
random = Math.floor(Math.random() * 100) + 1;

for (var i = 1; i <= random; i++) {
  document.write(
    "<img src='cat.jpg' style='border-style: solid; border-width: 3px; border-color: #ffd700;' witdh='100px' height='100px'>"
  );
  document.write(i);
  document.write("<br>");
}
