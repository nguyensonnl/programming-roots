function bangCuuChuong() {
  let str = "";

  for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
      str += `${j} * ${i} = ${j * i} `;
    }
    str += "\n";
  }
  console.log(str);
}
bangCuuChuong();
