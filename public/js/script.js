let text = document.getElementById("thetext")
let text1 = document.getElementById("text1")
let text2 = document.getElementById("text2")
let text3 = document.getElementById("text3")

function clickButton(knapp){
    if(knapp === 1){
        text.textContent = text1.textContent
    }else if (knapp === 2) {
        text.textContent = text2.textContent
        
    } else if(knapp === 3) {
        text.textContent = text3.textContent
    }

}