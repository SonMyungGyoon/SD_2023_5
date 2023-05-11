function func1() {
  return 100;
}
function func2() {
  return 200;
}
function fucn3(a, b) {
  return a + b;
}
function func4() {
  document.write(fucn3(func1(), func2()));
  return fucn3(func1(), func2());
}

func4();
