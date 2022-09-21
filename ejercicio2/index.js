const result = document.getElementById('result')
const fragment = new window.DocumentFragment()

for (let i = 1; i <= 6; i++) {
  const textContent = 'Hola Javascript'
  const element = document.createElement(`h${i}`)

  element.textContent = textContent
  fragment.appendChild(element)
}

result.appendChild(fragment)
