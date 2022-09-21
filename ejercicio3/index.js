function iterativeFactorial(n) {
  if (n < 1 || !Number.isInteger(n)) {
    throw new Error('Introduzca un número entero mayor o igual a 1')
  }

  let result = 1

  for (let i = n; i > 0; i--) {
    result *= i
  }

  return result
}

console.log('5! =', iterativeFactorial(5))
