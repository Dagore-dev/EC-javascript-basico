const input = window.prompt('Introduzca una cadena de texto')

resumeString(input)

function resumeString(s) {
  const normalized = normalizeString(s)
  const words = normalized.split(' ').filter(char => char !== '')
  const length = words.length

  window.alert(`
    Input: ${s}
    Número de palabras: ${length}
    Primera palabra: ${length !== 0 ? words[0] : ''}
    Última palabra: ${length !== 0 ? words[length - 1] : ''}
    Palabras en orden inverso: ${words.reverse()}
    Palabras en orden alfabético: ${words.sort()}
    Palabras en ordenadas de la z a la a: ${words.reverse()}
  `)
}

function normalizeString(s) {
  let result = ' '

  for (let i = 0; i < s.length; i++) {
    const char = s[i]

    if (isLetter(char) || isWhiteSpace(char)) {
      result += char
    }
  }

  return result.toLowerCase()
}

function isLetter(s) {
  return s.toLowerCase() !== s.toUpperCase()
}

function isWhiteSpace(s) {
  return s === ' '
}
