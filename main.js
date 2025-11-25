
let clickSpan = document.getElementById("clickSpan")
let clickBtn = document.getElementById("clickbtn")

let click = 0

function setupDisplay () {
    clickSpan.textContent=click
}

setupDisplay()

clickBtn.addEventListener('click', ()=>{
    click++
    setupDisplay()
})
