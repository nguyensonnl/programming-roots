function hinhChuNhatRong() {
  let str = "";

  for (let row = 1; row <= 5; row++) {
    for (let star = 1; star <= 5; star++) {
      if (row === 1 || row === 5 || star === 1 || star === 5) {
        str += "*";
      } else {
        str += " ";
      }
    }
    str += "\n";
  }
  console.log(str);
}
hinhChuNhatRong();
