
document.title = "Adventure Game"
let game = document.getElementById('game-container')
let title = document.getElementById('title')
let description = document.getElementById('description')
let buttons = document.getElementById('game-buttons')
let button1 = document.getElementById('button1')
let button2 = document.getElementById('button2')
let button3 = document.getElementById('button3')
let inventoryItem = document.getElementById('inventoryItem')
let fullscreenEnabled = "false"
let inventoryItems = { "kleinesleutel" : false, "grotesleutel" : false}


Main();
function Main(){
    verandertitel("Hoofdmenu");
    veranderBackground("Main");
    veranderbuttonText("Start", "Opties", "Stop")
    veranderdescriptionText("Welkom bij de Adventure game!!")
    button1.onclick = function(){start()}
    button2.onclick = function(){options()}
    button3.onclick = function(){Main()}
    button1.style.position = "relative"
    button2.style.position = "relative"
    button3.style.position = "relative"
    button1.style.left = "45%"
    button2.style.left = "45%"
    button3.style.left = "45%"
    button3.style.display = "none"
    button1.style.display = "block"
    button2.style.display = "block"
    inventoryItem.style.display = "none "
}

function verandertitel(titeltekst){
    title.innerHTML = titeltekst
    title.style.backgroundColor = "rgba(255,255,255,0.5)";
}

function veranderBackground(background){
    game.style.background = "url('./images/" + background + ".png') "
    game.style.backgroundSize = "100%"
}
function veranderbuttonText(buttonText1, buttonText2, buttonText3){
    button1.innerHTML = buttonText1
    button2.innerHTML = buttonText2
    button3.innerHTML = buttonText3

}

function veranderdescriptionText(descriptiontekst){
    description.innerHTML = descriptiontekst
    description.style.backgroundColor = "rgba(255,255,255,0.5)";
}

function start(){
    button1.style.left = "85%"
    button2.style.left = "85%"
    button3.style.left = "85%"
    button1.onclick = function(){links()}
    button2.onclick = function(){rechts()}
    veranderbuttonText("links", "rechts", "stop")
    verandertitel("Level 1: het bos");
    veranderBackground("bos");
    veranderdescriptionText("Het bos ziet er prachtig uit, een aantal bomen naast een pad en wat stenen op de");
    button3.style.display = "none"
}
function options(){
    veranderbuttonText("fullscreen", "Terug", "Stop")
    verandertitel("Options");
    veranderBackground("Main");
    veranderdescriptionText("De instellingen van de game")
    button1.style.left = "5%"
    button2.style.left = "5%"
    button3.style.display = "none"
    button2.onclick = function(){Main()}
    if (fullscreenEnabled == "true"){
        button1.onclick = function(){exitFullscreen()}
        veranderbuttonText("Uit Fullscreen", "Terug")
    }
    else if (fullscreenEnabled == "false"){
        button1.onclick = function(){fullscreen()}
        veranderbuttonText("Fullscreen", "Terug")
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

function links(){
    button1.style.display = "block"
    button2.style.display = "block"
    button3.style.display = "block"
    button1.onclick = function(){linkslinks()}
    button2.onclick = function(){start()}
    button3.onclick = function(){linksrechts()}
    veranderbuttonText("links", "terug", "rechts")
    verandertitel("Don't starve");
    veranderBackground("bos");
    veranderdescriptionText("Het bos ziet er prachtig uit, een aantal bomen naast een pad en wat stenen op de");
}

function rechts(){
    button1.style.display = "block"
    button2.style.display = "block"
    button3.style.display = "block"
    button1.onclick = function(){rechtslinks()}
    button2.onclick = function(){start()}
    button3.onclick = function(){rechtrechts()}
    veranderbuttonText("links", "terug", "rechts")
    verandertitel("Don't starve");
    veranderBackground("bos");
    veranderdescriptionText("Het bos ziet er prachtig uit, een aantal bomen naast een pad en wat stenen op de");
}
function linkslinks(){

}
function linksrechts(){

}
function rechtslinks(){

}
function rechtrechts(){

}