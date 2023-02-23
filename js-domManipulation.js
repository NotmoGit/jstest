const container = document.querySelector('#container')
const contentA = document.createElement('div')
const contentB = document.createElement('div')
const paragraphA = document.createElement('p')
const paragraphB = document.createElement('p')
const headerA = document.createElement('h3')
const headerB = document.createElement('h1')

contentA.classList.add('content')
contentA.textContent = 'This is the glorious text-content!'
headerA.textContent = "I'm a blue H3"
paragraphA.textContent = "Hey I'm red"
paragraphA.style.color = "red"
headerA.style.color = "blue"
contentB.setAttribute('style','border: 1px solid black; background-color: pink')
paragraphB.textContent = "ME TOO"
headerB.textContent = "I'm in a div"

container.appendChild(contentA)
contentA.appendChild(headerA)
contentA.appendChild(paragraphA)
container.appendChild(contentB)
contentB.appendChild(headerB)
contentB.appendChild(paragraphB)

const btn = document.querySelector('#btn')
btn.onclick = () => alert("JS onclick alert")

const btn2 = document.querySelector('#btn2')
btn2.addEventListener('click', () => {
    alert("Alert eventListener")
})

const alertFunction = () => alert("function alert")
const btn3 = document.querySelector('#btn3')
const btn4 = document.querySelector('#btn4')
btn3.onclick = alertFunction
btn4.addEventListener('click', alertFunction)
const btn5 = document.querySelector('#btn5')
btn5.addEventListener('click', function (event){
console.log(event.target.style.background = 'blue')
})


const buttons = document.querySelector('#selector').querySelectorAll('button')

buttons.forEach((button) => {
    button.addEventListener('click', () => {alert(button.id)})
})