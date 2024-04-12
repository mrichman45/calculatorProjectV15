let displayText = ''
let display = document.querySelector('.displayText')
let on = document.querySelector('.buttonOnBox')
let off = document.querySelector('.buttonOffBox')
let one = document.querySelector('.button1Box')
let two = document.querySelector('.button2Box')
let three = document.querySelector('.button3Box')
let four = document.querySelector('.button4Box')
let five = document.querySelector('.button5Box')
let six = document.querySelector('.button6Box')
let seven = document.querySelector('.button7Box')
let eight = document.querySelector('.button8Box')
let nine = document.querySelector('.button9Box')
let mul = document.querySelector('.buttonMulBox')
let div = document.querySelector('.buttonDivBox')
let min = document.querySelector('.buttonMinBox')
let plu = document.querySelector('.buttonPluBox')

on.addEventListener('click', (e) => {
  display.innerText = 'hello'
setTimeout(()=> {display.innerText = ''}, 2000)
})

off.addEventListener('click', (e) => {
  display.innerText = displayText
})

one.addEventListener('click', (e) => {
  display.innerText += '1'
})
two.addEventListener('click', (e) => {
  display.innerText += '2'
})

three.addEventListener('click', (e) => {
  display.innerText += '3'
})

four.addEventListener('click', (e) => {
  display.innerText += '4'
})

five.addEventListener('click', (e) => {
  display.innerText += '5'
})

six.addEventListener('click', (e) => {
  display.innerText += '6'
})

seven.addEventListener('click', (e) => {
  display.innerText += '7'
})

eight.addEventListener('click', (e) => {
  display.innerText += '8'
})

nine.addEventListener('click', (e) => {
  display.innerText += '9'
})

mul.addEventListener('click', (e) => {
  display.innerText += 'X'
})

div.addEventListener('click', (e) => {
  display.innerText += '/'
})

min.addEventListener('click', (e) => {
  display.innerText += '-'
})
plu.addEventListener('click', (e) => {
  display.innerText += '+'
})