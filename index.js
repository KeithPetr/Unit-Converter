// 1 meter = 3.281 feet
// 1 liter = 0.264 gallon
// 1 kilogram = 2.204 pound

const inputEl = document.getElementById("input-el")
const convertBtn = document.getElementById("convert-btn")
const darkBtn = document.getElementById("dark-btn")
let lengthEl = document.getElementById("length-el")
let massEl = document.getElementById("mass-el")
let volumeEl = document.getElementById("volume-el")

convertBtn.addEventListener("click", convert)

inputEl.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        convertBtn.click();
    }
})

function convert() {
    lengthEl.textContent = `${inputEl.value} meters = ${(inputEl.value * 3.281).toFixed(3)} feet | 
    ${inputEl.value} feet = ${(inputEl.value / 3.281).toFixed(3)} meters`
    volumeEl.textContent = `${inputEl.value} liters = ${(inputEl.value * 0.264).toFixed(3)} gallons | 
    ${inputEl.value} gallons = ${(inputEl.value / 0.264).toFixed(3)} liters`
    massEl.textContent = `${inputEl.value} kilos = ${(inputEl.value * 2.204).toFixed(3)} pounds | 
    ${inputEl.value} pounds = ${(inputEl.value / 2.204).toFixed(3)} kilos`
}

darkBtn.addEventListener('click', darkMode)

function darkMode() {
    let outputEl = document.getElementsByClassName("output")

    for (let i = 0; i < outputEl.length; i++) {
        outputEl[i].classList.toggle("dark-mode")
    }
    let bottomSectionEl = document.getElementById("bottom-section")
    bottomSectionEl.classList.toggle("dark-mode-two")

    if (darkBtn.textContent === "Click for Dark Mode") {
        darkBtn.textContent = "Click for Light Mode"
    } else if (darkBtn.textContent === "Click for Light Mode") {
        darkBtn.textContent = "Click for Dark Mode"
    }
}