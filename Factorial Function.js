function factorial(n) {
  if(typeof n === "number") {
    if(n === 1) {
      return (1)
    } else {
      return (n * factorial(n - 1))
    }
  } else {
    throw new TypeError("Argument must be type of number.")
  }
}
Math.factorial = factorial
