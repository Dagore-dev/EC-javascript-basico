const form = document.getElementById('form')
const numInput = document.getElementById('num')
const result = document.getElementById('result')

form.addEventListener('submit', e => {
  e.preventDefault()
  const num = Number(numInput.value)

  if (!Number.isNaN(num)) {
    showMultiplicationTable(num, result)
  } else {
    alert('No ha introducido un número')
  }
})

function showMultiplicationTable(num, element) {
  element.innerHTML = ''
  const list = document.createElement('ul')
  const multiplicationTable = calculateMultiplicationTable(num)

  list.appendChild(multiplicationTable)
  element.appendChild(list)
}

function calculateMultiplicationTable(num) {
  let multiplicationTable = new window.DocumentFragment()

  for (let i = 0; i <= 10; i++) {
    const li = document.createElement('li')
    li.textContent = `${num} x ${i} = ${num * i}`

    multiplicationTable.appendChild(li)
  }

  return multiplicationTable
}
