function reverseNumber(num) {
  let result = 0;
  while (num > 0) {
    let a = num % 10;
    result = result * 10 + a;
    num = Math.floor(num / 10);
  }
  console.log(result);
}
reverseNumber(12345);

function reverseNumber1(num) {
  let str = String(num);
  let arr = Array.from(str);
  return arr.reverse().toString();
}
const a = reverseNumber1(12345);
console.log(a);
