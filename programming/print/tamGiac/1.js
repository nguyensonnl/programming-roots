function tamGiacCan() {
  for (let row = 1; row <= 5; row++) {
    let str = "";
    for (let space = 1; space <= 5 - row; space++) {
      str += " ";
    }

    for (let star = 1; star <= 2 * row - 1; star++) {
      str += "*";
    }
    console.log(str);
  }
}

tamGiacCan();
