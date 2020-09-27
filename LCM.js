// find the lowest common multiple of two given numbers
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
      return z;
      break;
    }
  }
}
const lcm = function (a, b) {
  let z = gcd(a, b);
  let x = a / z;
  let y = b / z;
  let hello = z * x * y;
  return hello;
}

console.log(lcm(24, 18)) //72



