// Paul van der Lei
// Media- en Applicatieontwikkelaar leerjaar 1

//het maken van alle variablen en uitlezen van informatie
document.title = "Adventure Game"
let buttons = document.getElementById('game-buttons')
let button1 = document.getElementById('button1')
let button2 = document.getElementById('button2')
let button3 = document.getElementById('button3')
let inventoryItem = document.getElementById('inventoryItem')
let game = document.getElementById('game-container')
let title = document.getElementById('title')
let description = document.getElementById('description')
let fullscreenEnabled = "false"
let inventoryItems = "false"
let itemsgespawned = "false"
let object;
//Main function die bij het opstarten de layout van het level bepaalt en daarmee aanpast

Main();

function Main(){
    verandertitel("Hoofdmenu");
    veranderBackground("Main");
    veranderbuttonText("Start", "Opties", "Stop")
    veranderdescriptionText("Welkom bij de Adventure game!!")
    buttondoorverwijzen(start, options, stop)
    buttonposition("relative", "relative", "relative")
    buttonstylehori("45%", "45%", "45%")
    knoppendisplay("block", "block", "none");
    inventoryitemdisplay("none")
}

function Restart(){
    inventoryItems = { "kleinesleutel" : false, "grotesleutel" : false}
    Main();

}

function VeranderObject(waarde1, waarde2, waarde3){
        let img = document.createElement('img')
        img.id = "Object"
        img.src = "./images/" + waarde1 + ".png"
        img.onclick = function(){objectPickup(waarde1)}
        img.style.width = waarde2
        img.style.height = waarde3
        document.body.appendChild(img)
        object = document.getElementById('Object')
        console.log("(objects)" + waarde1 + " gespawnd")
}

function objectPickup(waarde1){
    inventoryItems = "true"
    object.style.display = "none"
    console.log("item succesvol opgepakt" + waarde1)
}
function objectdisplay(waarde1){
    object.style.display = waarde1
}

function Objectlocatie(waarde1, waarde2, waarde3){
    VeranderObjectPosition(waarde1)
    VeranderObjectverti(waarde2)
    VeranderObjecthori(waarde3)
}

function VeranderObjectPosition(waarde1){
    object.style.position = waarde1
}

function VeranderObjectverti(waarde1){
    object.style.top = waarde1
}

function VeranderObjecthori(waarde1){
    object.style.left = waarde1
}

function inventoryitemdisplay(waarde1){
    inventoryItem.style.display = waarde1
}

function buttonstylehori(waarde1, waarde2, waarde3){
    button1.style.left = waarde1
    button2.style.left = waarde2
    button3.style.left = waarde3
}

function buttonstyleverti(waarde1, waarde2, waarde3){
    button1.style.top = waarde1
    button2.style.top = waarde2
    button3.style.top = waarde3
}

function buttondoorverwijzen(waarde1, waarde2, waarde3){
    button1.onclick = function(){waarde1()}
    button2.onclick = function(){waarde2()}
    button3.onclick = function(){waarde3()}
}

function buttonposition(waarde1, waarde2, waarde3){
    button1.style.position = waarde1
    button2.style.position = waarde2
    button3.style.position = waarde3
}

function knoppendisplay(waarde1, waarde2, waarde3){
    button1.style.display = waarde1
    button2.style.display = waarde2
    button3.style.display = waarde3
}

function verandertitel(titeltekst){
    title.innerHTML = titeltekst
    title.style.backgroundColor = "rgba(255,255,255,0.5)";
}

function veranderBackground(background){
    game.style.background = "url('./images/" + background + ".png') "
    game.style.backgroundSize = "100%"
}

function veranderbuttonText(waarde1, waarde2, waarde3){
    button1.innerHTML = waarde1
    button2.innerHTML = waarde2
    button3.innerHTML = waarde3
}

function veranderdescriptionText(descriptiontekst){
    description.innerHTML = descriptiontekst
    description.style.backgroundColor = "rgba(255,255,255,0.5)";
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

function options(){
    veranderbuttonText("fullscreen", "Terug", "Stop")
    verandertitel("Options");
    veranderBackground("Main");
    veranderdescriptionText("De instellingen van de game")
    buttonstylehori("5%", "5%", "5%")
    knoppendisplay("block", "block", "none");
    buttondoorverwijzen(start, Main, stop)
    if (fullscreenEnabled == "true"){
        button1.onclick = function(){exitFullscreen()}
        veranderbuttonText("Uit Fullscreen", "Terug")
    }
    else if (fullscreenEnabled == "false"){
        button1.onclick = function(){fullscreen()}
        veranderbuttonText("Fullscreen", "Terug")
    }
}

function start(){
    
    buttonstylehori("85%", "85%", "85%")
    buttondoorverwijzen(links, rechts, stop)
    veranderbuttonText("links", "rechts", "stop")
    verandertitel("Level 1: het bos");
    veranderBackground("bos");
    veranderdescriptionText("Het bos ziet er prachtig uit, een aantal bomen naast een pad en wat stenen op de");
    knoppendisplay("block", "block", "none");
    if(itemsgespawned == "false"){
        VeranderObject("kleinesleutel", "20px", "20px")
        Objectlocatie("absolute", "97%", "30%")
        itemsgespawned = "true"
    }
    objectdisplay("block")
}

function links(){
    objectdisplay("none")
    knoppendisplay("block", "block", "block");
    buttondoorverwijzen(linkslinks, start, linksrechts)
    veranderbuttonText("links", "terug", "rechts")
    verandertitel("Het kasteel");
    veranderBackground("kasteelgate");
    veranderdescriptionText("Je bent bij een kasteel aangekomen, de kasteelwachter roept dat je alleen door mag lopen indien je een sleutel hebt ");
}

function rechts(){
    objectdisplay("none")
    knoppendisplay("block", "block", "block");
    buttondoorverwijzen(rechtslinks, start, rechtrechts)
    veranderbuttonText("links", "terug", "rechts")
    verandertitel("Don't starve");
    veranderBackground("bos");
    veranderdescriptionText("Het bos ziet er prachtig uit, een aantal bomen naast een pad en wat stenen op de");
}

function linkslinks(){
    if(inventoryItems == "false"){
        knoppendisplay("block", "none", "none");
        buttondoorverwijzen(Restart, start, linksrechts)
        veranderbuttonText("Restart", "terug", "rechts")
        verandertitel("Helaas game over!");
        veranderBackground("dood");
        veranderdescriptionText("Je was gewaarshuwd en de kasteelwachters hebben je laten hangen aan de galg");   
    }
    else{
        knoppendisplay("block", "block", "block");
        buttondoorverwijzen(linkslinks, start, linksrechts)
        veranderbuttonText("links", "terug", "rechts")
        verandertitel("Het kasteel");
        veranderBackground("kasteelgate");
        veranderdescriptionText("Je bent bij een kasteel aangekomen, de kasteelwachter roept dat je alleen door mag lopen indien je een sleutel hebt ");    
    }
    
}


function linksrechts(){

}

function rechtslinks(){

}

function rechtrechts(){

}
/* 
        level template
    verandertitel("Levelnaam");
    veranderdescriptionText("levelbeschijving");
    veranderbuttonText("richting", "richting", "richting")
    veranderBackground("background naam");
    knoppendisplay("block", "block", "block");
    buttondoorverwijzen(richting, richting, richting)
    */