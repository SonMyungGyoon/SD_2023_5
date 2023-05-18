function Monster(char_name = "", char_hp = 100, char_attack = 10) {
  this.name = char_name;
  this.nowHp = char_hp;
  this.maxHp = char_hp;
  this.attack = char_attack;
  this.info = function () {
    document.write(
      "[ " + this.name + " (" + this.nowHp + "/" + this.maxHp + ")]<br>"
    );
  };
}
