// check if a given number is prime. return true or false. 

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
  console.log(x);
}

isPrime(1);
isPrime(2);
isPrime(3);
isPrime(4);
isPrime(5);
isPrime(6);
isPrime(7);
isPrime(8);
isPrime(9);