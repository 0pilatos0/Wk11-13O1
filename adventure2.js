
document.title = "Adventure Game"
let game = document.getElementById('game-container')
let title = document.getElementById('title')
let description = document.getElementById('description')
let buttons = document.getElementById('game-buttons')
let button1 = document.getElementById('button1')
let button2 = document.getElementById('button2')
let button3 = document.getElementById('button3')
let inventoryItem = document.getElementById('inventoryItem')

let inventoryItems = { "Knife" : false, "Pistol" : false}
let fullscreenEnabled = "false"

main()

function main(){
    Intervals()
    ChangeTitle("MainMenu")
    ChangeBackground("Main")
    ChangeButtonText("Start", "Opties", "Stop")
    ChangeDescriptionText("Welkom bij deze coole adventure game! :)")
    buttons.style.position = "relative"
    button1.onclick = function(){start()}
    button2.onclick = function(){options()}
    button1.style.position = "relative"
    button2.style.position = "relative"
    button3.style.position = "relative"
    button1.style.left = "45%"
    button2.style.left = "45%"
    button3.style.left = "45%"
    button3.style.display = "none"
    button1.style.display = "block"
    button2.style.display = "block"
}

function start(){
    buttons.style.top = "70%"
    button1.style.position = "relative"
    button2.style.position = "relative"
    button3.style.position = "relative"
    button1.style.display = "inline-block"
    button2.style.display = "inline-block"
    button3.style.display = "inline-block"
    button1.style.left = "0%"
    button2.style.left = "0%"
    button3.style.left = "0%"
}

function options(){
    button1.style.display = "block"
    button2.style.display = "block"
    button3.style.display = "none"
    button2.onclick = function(){main()}
    if (fullscreenEnabled == "true"){
        button1.onclick = function(){exitFullscreen()}
        ChangeButtonText("Uit Fullscreen", "Terug")
    }
    else if (fullscreenEnabled == "false"){
        button1.onclick = function(){fullscreen()}
        ChangeButtonText("Fullscreen", "Terug")
    }
}

function fullscreen(){
    game.requestFullscreen()
    fullscreenEnabled = "true"
    options()
}

function exitFullscreen(){
    document.exitFullscreen()
    fullscreenEnabled = "false"
    options()
}

function ChangeButtonText(buttonText1, buttonText2, buttonText3){
    button1.innerHTML = buttonText1
    button2.innerHTML = buttonText2
    button3.innerHTML = buttonText3
}

function ChangeTitle(titleText){
    title.innerHTML = titleText
    title.style.backgroundColor = "rgba(255,255,255,0.5)";
}

function ChangeDescriptionText(descText){
    description.innerHTML = descText
    description.style.backgroundColor = "rgba(255,255,255,0.5)";
}

function ChangeBackground(background){
    game.style.background = "url('./images/" + background + ".png') no-repeat"
    game.style.backgroundSize = "100%"
}

function CheckInventoryItem(){
    if (inventoryItems["Knife"] == false && inventoryItems["Pistol"] == false){
        inventoryItem.style.display = "none"
    }
    if (inventoryItems["Knife"] == true){
        ChangeInventoryItem("Knife")
    }
    if (inventoryItems["Pistol"] == true){
        ChangeInventoryItem("Pistol")
    }
}

function ChangeInventoryItem(item){
    inventoryItem.style.display = "block"
    inventoryItem.alt = item
    inventoryItem.src = "./images/" + item + ".png"
}

function Intervals(){
    setInterval(CheckInventoryItem, 100)
}


