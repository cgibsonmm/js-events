// const button = document.querySelector('.js-button')
// console.log(button)

// const sayHello = function(e) {
//   console.log(e)
//   console.log('Hello Bees!!!!')
// }

// button.addEventListener('click', sayHello)

// const title = document.querySelector('h1')
// console.log(title)

// title.addEventListener('mouseover', sayHello)


// With form submit

const form = document.querySelector('form')

const getName = function (e) {
  e.preventDefault()
  console.log(e.target)
  
  let inputValue = document.querySelector('input').value
  console.log(inputValue)
  sayName(inputValue)
  document.querySelector('input').value = ""
  console.log(inputValue)
  // e.target.remove()
  removeForm()
  changeBackground()
}

const sayName = function (name) {
  const title = document.querySelector('h1')
  title.textContent = `${name} Event Day!`
}

const removeForm = () => {
  form.remove()
}

const changeBackground = () => {
  document.body.style.backgroundColor = 'yellow'
}

form.addEventListener('submit', getName)