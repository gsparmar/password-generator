const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let display1 = document.getElementById('display1');
let display2 = document.getElementById('display2');
let passLength = 15
let password1 = []
let password2 = []

function genPassword(){
    reset()
    for(let i = 0; i < passLength; i++){
        password1.push(characters[getRand()])
        password2.push(characters[getRand()])
    }
    display1.textContent = password1.join("")
    display2.textContent = password2.join("")
}

function getRand(){
    let rand = Math.floor(Math.random() * characters.length)
    return rand
}

function reset(){
    password1 = []
    password2 = []
}




