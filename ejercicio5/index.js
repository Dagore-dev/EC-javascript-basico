const form = document.getElementById('form')
const input = document.getElementById('dni')

form.addEventListener('submit', e => {
  e.preventDefault()
  const value = input.value

  if (isValidDNIFormat(value)) {
    if (isValidDNI(value)) {
      window.alert('El DNI es correcto')
    } else {
      window.alert('El DNI no es correcto')
    }
  } else {
    window.alert('No es un DNI con formato válido')
  }
})

function isValidDNIFormat(dni) {
  const pattern = /^\d{8}[a-zA-Z]$/
  return pattern.test(dni)
}

function isValidDNI(dni) {
  const array = 'TRWAGMYFPDXBNJZSQVHLCKE'

  const numbers = dni.substring(0, 8)
  const letter = dni.substring(8).toUpperCase()
  const calculatedNumber = Math.floor(Number(numbers) % 23)

  if (calculatedNumber > 23) {
    return false
  }

  const calculatedLetter = array[calculatedNumber]

  return calculatedLetter === letter
}
