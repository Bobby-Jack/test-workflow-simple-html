
let clickSpan = document.getElementById("clickSpan")
let clickBtn = document.getElementById("clickBtn")

let click = 0

function setupDisplay () {
    clickSpan.textContent=click
}

clickBtn.addEventListener('click', ()=>{
    click++
    setupDisplay()
})
