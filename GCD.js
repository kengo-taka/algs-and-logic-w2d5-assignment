// find the greatest common divisor of the two numbers given

const gcd = function (a, b) {
  let arrA = [];
  let arrB = [];
  let x = Math.max(a, b);
  let y = Math.min(a, b);
  let z = 0;
  for (i = 1; i <= x; i++) {
    if (x % i === 0) {
      arrA.push(i);
    }
  }
  for (j = 1; j <= y; j++) {
    if (y % j === 0) {
      arrB.push(j);
    }
  }
  for (k = arrB[arrB.length - 1]; k >= 0; k--) {
    if (arrA.includes(arrB[k])) {
      z = arrB[k];
      console.log(z);
      break;
    }
  }
}

gcd(24, 18);