function hinhChuNhat() {
  let str = "";

  for (let row = 1; row <= 5; row++) {
    for (let star = 1; star <= 5; star++) {
      str += "*";
    }

    str += "\n";
  }
  console.log(str);
}
hinhChuNhat();
