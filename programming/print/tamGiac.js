function tamGiac1() {
  let str = "";

  for (let row = 1; row <= 5; row++) {
    for (let star = 1; star <= 1 + row - 1; star++) {
      str += "*";
    }
    str += "\n";
  }
  console.log(str);
}
tamGiac1();

//(n + 1) - 1
function tamGiac2() {
  let str = "";

  for (let row = 1; row <= 5; row++) {
    for (let star = 1; star <= 5; star++) {
      if (star < 1 + row - 1) {
        str += "-";
      } else {
        str += "*";
      }
    }
    str += "\n";
  }
  console.log(str);
}
tamGiac2();

//<=n
function tamGiac3() {
  let str = "";
  for (let row = 1; row <= 5; row++) {
    for (let star = 1; star <= 5; star++) {
      if (star <= row) {
        str += "*";
      } else {
        str += "-";
      }
    }
    str += "\n";
  }
  console.log(str);
}
tamGiac3();
