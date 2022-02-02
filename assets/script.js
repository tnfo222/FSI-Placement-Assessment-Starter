// First, tell us your name
let yourName = "Taylor Forbes"

// We'll use these variables to track the counts of each cookie type
let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle
let total = 0 // Cookie Total

//Functions for updating the display quantities of each cookie and the total number of cookies
function gbUpdateQuan (displayQuantity){
    let gb = document.querySelector('#qty-gb')
    gb.innerHTML = displayQuantity
}
function ccUpdateQuan (displayQuantity){
    let cc = document.querySelector('#qty-cc')
    cc.innerHTML = displayQuantity
}
function sugarUpdateQuan (displayQuantity){
    let sugar = document.querySelector('#qty-sugar')
    sugar.innerHTML = displayQuantity
}
function totQuan (displayTotQuantity){
    let total = document.querySelector('#qty-total')
    total.innerHTML = displayTotQuantity
}
// selecting the element with an id of credit
const credit = document.querySelector('#credit')

// selecting the element with an id of add-gb, add-cc, and add-sugar
const gbPlusBtn = document.querySelector('#add-gb')
const ccPlusBtn = document.querySelector('#add-cc')
const sugarPlusBtn = document.querySelector('#add-sugar')
const gbMinBtn = document.querySelector('#minus-gb')
const ccMinBtn = document.querySelector('#minus-cc')
const sugarMinBtn = document.querySelector('#minus-sugar')

// Code to update name display
credit.textContent = `Created by ${yourName}`

// Event listener for clicks on the "+" button for Gingerbread cookies
gbPlusBtn.addEventListener('click', function() {
    gb++
    total++
    gbUpdateQuan(`${gb}`)
    totQuan(`${total}`)
})

// Event listener for clicks on the "-" button for Gingerbread cookies
gbMinBtn.addEventListener('click', function() {
    if (gb > 0) {
        gb--
        total--
    }
    else {
        window.alert('You do not have Gingerbread cookies in your basket :(')
    }
    gbUpdateQuan(`${gb}`)
    totQuan(`${total}`)
})

//Event listener for clicks on the "+" button for Chocolate Chip cookies
ccPlusBtn.addEventListener('click', function() {
    cc++
    total++
    ccUpdateQuan(`${cc}`)
    totQuan(`${total}`)
})

// Event listener for clicks on the "-" button for Chocolate Chip cookies
ccMinBtn.addEventListener('click', function() {
    if (cc > 0) {
        cc--
        total--
    }
    else {
        window.alert('You do not have Chocolate Chip cookies in your basket :(')
    }
    ccUpdateQuan(`${cc}`)
    totQuan(`${total}`)
})

//Event listener for clicks on the "+" button for Sugar Sprinkle cookies
sugarPlusBtn.addEventListener('click', function() {
    sugar++
    total++
    sugarUpdateQuan(`${sugar}`)
    totQuan(`${total}`)
})

// Event listener for clicks on the "-" button for Sugar Sprinkle cookies
sugarMinBtn.addEventListener('click', function() {
    if (sugar > 0) {
        sugar--
        total--
    }
    else {
        window.alert('You do not have Sugar Sprinkle cookies in your basket :(')
    }
    sugarUpdateQuan(`${sugar}`)
    totQuan(`${total}`)
})
