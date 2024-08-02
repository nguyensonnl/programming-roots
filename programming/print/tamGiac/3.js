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
