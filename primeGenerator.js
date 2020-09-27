// generate a list of prime numbers from 2 up to a value, n
// you can use the Sieve of Eratosthenes method to do this. 

const isPrime = function (num) {
  let x = ""
  if (num === 1 || num === 2) {
    x = "true"
  } else {
    for (i = 2; i <= num - 1; i++) {
      if (num % i === 0) {
        x = "false"
        break;
      } else {
        x = "true"
      }
    }
  }
return x;
}
const primeGenerator = function(n) {

for (j=1; j<=n ; j++) {
  if (isPrime(j) === "true") {
    console.log(j);
  }
}
  }

primeGenerator(67);