function cat(a = "", b = 0, c = 0, d = "", e = "") {
  this.name = a;
  this.age = b;
  this.weight = c;
  this.family = d;
  this.color = e;
}

var kitty = new cat("키티", 3, 5, "샴", "모카");
var yaongi = new cat("야옹이", 2, 4, "코리안숏헤어", "치즈");
// kitty.name = "야옹이";
// kitty.age = 3;
// kitty.weight = 5;
// kitty.family = "shameez";
// kitty.color = "moka";

// document.write(kitty.name + "<br>");
// document.write(kitty.age + "<br>");
// document.write(kitty.weight + "<br>");
// document.write(kitty.family + "<br>");
// document.write(kitty.color + "<br>");

if (kitty.age == yaongi.age) {
  document.write(kitty.name + " (이)와 " + yaongi.name + "(이)는 친구!!!");
} else if (kitty.age > yaongi.age) {
  document.write(
    "형님고양이 : " + kitty.name + "<br>" + "동생고양이 : " + yaongi.name
  );
} else {
  document.write(
    "형님고양이 : " + yaongi.name + "<br>" + "동생고양이 : " + kitty.name
  );
}
