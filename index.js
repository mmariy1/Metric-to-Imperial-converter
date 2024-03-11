/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

/* Fetching HTML elements using the DOM*/

const convertBtn = document.getElementById("convert-btn")
let lengthEl = document.getElementById("length-el")
let volumeEl = document.getElementById("volume-el")
let massEl = document.getElementById("mass-el")

/* Adding event listener to the button so it converts when clicked */

convertBtn.addEventListener("click", function() {
    const numberEl = Number(document.getElementById("number-el").value) /* getting what its typed in the input field only after the button is clicked so it saves the number typeds */
    
    /* Convertions happen here */
    lengthEl.textContent = `${numberEl} meters = ${(numberEl * 3.281).toFixed(3)} feet / ${numberEl} feet = ${(numberEl / 3.281).toFixed(3)} meters`
    volumeEl.textContent = `${numberEl} liters = ${(numberEl * 0.264).toFixed(3)} gallons / ${numberEl} gallons = ${(numberEl / 0.264).toFixed(3)} liters`
    massEl.textContent = `${numberEl} kilos = ${(numberEl * 2.204).toFixed(3)} pounds / ${numberEl} pounds = ${(numberEl / 2.204).toFixed(3)} kilos`
})