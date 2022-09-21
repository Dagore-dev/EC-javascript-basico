const target = document.getElementById('target')
const buttons = [...document.querySelectorAll('.buttons button')]

buttons.forEach(btn => {
  btn.addEventListener('click', e => {
    const color = btn.dataset.color
    target.style.color = color
  })
})
