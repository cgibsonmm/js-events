// First, select each button.

// const redButton = document.querySelector('.red')
// console.log(redButton)

// const whiteButton = document.querySelector('.white')

// const blueButton = document.querySelector('.blue')

// const yellowButton = document.querySelector('.yellow')



// Second, write an event listener for each of the buttons you selected. You can use callback functions or anonymous functions.

// redButton.addEventListener('click', () => {
//   document.body.className = 'red'
// })

// whiteButton.addEventListener('click', () => {
//   document.body.className = 'white'
// })

// blueButton.addEventListener('click', () => {
//   document.body.className = 'blue'
// })

// yellowButton.addEventListener('click',  () => {
//   document.body.className = 'yellow'
// })


// Refactor

const colorCircles = document.querySelectorAll('a')

colorCircles.forEach((circle) => {
  circle.addEventListener('click', () => {
    document.body.className = circle.className
  })
})


