const alertBox = document.querySelector('.alertBox')

for(let i = 1; i <= 25; i++) {
  const box = document.createElement('input')
  box.classList.add('box')
  box.readOnly = true
  document.querySelector('.container').appendChild(box)
  let newColor = RandomHexColorCode()
  box.style.backgroundColor = newColor
  box.value = newColor
  box.id = newColor

  box.addEventListener('click', () => {
    const copyColor = document.getElementById(`${box.id}`)
    copyColor.select()
    copyColor.setSelectionRange(0,9999)
    document.execCommand('copy')

    alertBox.classList.add('active')
    alertBox.style.backgroundColor = box.id
    alertBox.textContent = `Copied Color: ${box.id}`

    setTimeout(() => {
      alertBox.classList.remove('active')
      alertBox.classList.add('out')
      setTimeout(() => {
        alertBox.classList.remove('out')
      }, 3000)
    }, 2000)
  })
}

const btn = document.querySelector('.btn')
const randomColorBlock = document.querySelectorAll('.box')

function RandomHexColorCode () {
  let chars = '0123456789abcdef'
  const colorLength = 6
  let color = ''

  for (let i = 0; i < colorLength; i++) {
    let randomColor = Math.floor(Math.random() * chars.length)
    color += chars.substring(randomColor, randomColor+1)
  }

  return `#${color}`
}
