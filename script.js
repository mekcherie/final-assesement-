// The headline element
const display = document.querySelector('#headline-display')
console.log (display)

// The input for size
const inputSize = document.querySelector('#input-size')
console.log(inputSize)
// The element that displays the value 
const showSize = document.querySelector('#show-size')
// Repeat this for the input and "show" elements
// adding event listener cause thats how it functions 
inputSize.addEventListener('input', handleInput)
const inputFont = document.querySelector('#select-font')
const showFont = document.querySelector('#show-font')
inputFont.addEventListener('input', handleInput)
const inputColor = document.querySelector('#input-color')
const showColor = document.querySelector('#show-color')
inputColor.addEventListener('input', handleInput)
const selectedBG = document.querySelector('#input-bg-color')
const showBGvalue = document.querySelector('#show-bg-color')
selectedBG.addEventListener('input', handleInput)
const inputText = document.querySelector('#enter-text')
const showText = document.querySelector('#headline-display')
inputText.addEventListener('input', handleInput)
// style properties 
function handleInput() {
	// font size:
    const fontSize = inputSize.value + 'px'
    console.log(fontSize)
	// style 
    display.style.fontSize = fontSize

	// size
    showSize.innerHTML = fontSize
    const selectedFont = inputFont.value
    console.log(selectedFont)
    display.style.selectedFont = selectedFont
    showFont.innerHTML = selectedFont
    const fontColor = inputColor.value
    console.log(fontColor)
    display.style.fontColor = fontColor
    showColor.innerHTML = fontColor
    const bgColor = selectedBG.value
    display.style.bgColor = bgColor
    showBGvalue.innerHTML = bgColor
    const userText = inputText.value
    display.style.inputText = inputText
    showText.innerHTML = userText
}
handleInput(); 
