function cat() {
  this.name = "";
  this.age = 0;
  this.weight = 0;
  this.family = "";
  this.color = "";
}

var kitty = new cat();
kitty.name = "야옹이";
kitty.age = 3;
kitty.weight = 5;
kitty.family = "shameez";
kitty.color = "moka";

document.write(kitty.name + "<br>");
document.write(kitty.age + "<br>");
document.write(kitty.weight + "<br>");
document.write(kitty.family + "<br>");
document.write(kitty.color + "<br>");
