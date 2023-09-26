const incrementBtn = document.getElementById("increment-btn")
const saveBtn = document.getElementById("save-btn")
const counterEl = document.getElementById("counter-el")
const savedEl = document.getElementById("saved-el")
const sumEl = document.getElementById("sum-el")
let count = 0
let counts = []

incrementBtn.addEventListener("click", function(){
    count += 1
    counterEl.textContent = count
})

saveBtn.addEventListener("click", function(){
    if (count !== 0 && counts.length <= 2){
        counts.push(count)
        renderCounts()
        count = 0
        counterEl.textContent = count
        renderSum()
    }
})

function renderCounts(){
    let countsEl
    for (let i = 0; i < counts.length; i++){
        if (i !== 0) {
            countsEl = " | " + counts[i] + " "
        }  else {
            countsEl = " " + counts[i]
        }
    }
    savedEl.textContent += countsEl
}

function renderSum(){
    let sum = 0
    for (let i = 0; i < counts.length; i++){
        sum += counts[i]
    }    
    sumEl.textContent = "Sum: " + sum
}