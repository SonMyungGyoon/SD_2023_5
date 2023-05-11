var random = Math.floor(Math.random() * 10) + 1;

for (i = 1; i <= 10; i++) {
  if (random == i) continue;
  document.write(i + "<br>");
}
