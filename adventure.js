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
    console.log("(Game) Hoofdmenu")
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
    location.reload();

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
    console.log("(objects) item succesvol opgepakt" + waarde1)
    inventoryItem.style.display = "block"
    inventoryItem.innerHTML = "<br> Sleutel"
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
    console.log("(Game) Options")
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
    console.log("(Game) het bos")
    buttonstylehori("85%", "85%", "85%")
    buttondoorverwijzen(links, rechts, stop)
    veranderbuttonText("links", "rechts", "stop")
    verandertitel("het bos");
    veranderBackground("bos");
    veranderdescriptionText("Het bos ziet er prachtig uit, een aantal bomen naast een pad en wat stenen op de");
    knoppendisplay("block", "block", "none");
    if(itemsgespawned == "false"){
        VeranderObject("kleinesleutel", "20px", "20px")
        Objectlocatie("absolute", "97%", "30%")
        itemsgespawned = "true"
    }
    if(inventoryItems == "false"){
        objectdisplay("block")
    }
}

function links(){
    console.log("(Game) Het kasteel")
    objectdisplay("none")
    knoppendisplay("block", "block", "none");
    buttondoorverwijzen(linkslinkspre, start, start)
    veranderbuttonText("doorgaan", "terug", "rechts")
    verandertitel("Het kasteel");
    veranderBackground("kasteelgate");
    veranderdescriptionText("Je bent bij een kasteel aangekomen, de kasteelwachter roept dat je alleen door mag lopen indien je een sleutel hebt ");
}

function rechts(){
    console.log("(Game) Game over")
    objectdisplay("none")
    knoppendisplay("block", "none", "none");
    buttondoorverwijzen(Restart, start, start)
    veranderbuttonText("Restart", "terug", "rechts")
    verandertitel("Helaas game over!");
    veranderBackground("dood");
    veranderdescriptionText("Na een tijdje lopen ben je een groep wachters tegengekomen die je aan de galg hebben gehangen");
}

function linkslinkspre(){
    if(inventoryItems == "false"){
        console.log("(Game) Death")
        knoppendisplay("block", "none", "none");
        buttondoorverwijzen(Restart, start, start)
        veranderbuttonText("Restart", "terug", "rechts")
        verandertitel("Helaas game over!");
        veranderBackground("dood");
        veranderdescriptionText("Je was gewaarshuwd en de kasteelwachters hebben je laten hangen aan de galg");   
    }
    else{
        linklinks()
    }
    
}
function linklinks(){
    console.log("(Game) De stad")
    knoppendisplay("block", "block", "block");
    buttondoorverwijzen(linkslinkslinks, links, linkslinksrechts)
    veranderbuttonText("links", "terug", "rechts")
    verandertitel("De stad");
    veranderBackground("town");
    veranderdescriptionText("Je bent binnen gekomen in de stad, het lijkt best wel heel erg rustig te zijn ");    
}
function linkslinkslinks(){
    console.log("(Game) Pleintje")
    verandertitel("Pleintje");
    veranderdescriptionText("Je bent op een rustigge plaats aangekomen, hier kan je een mooi bestaan opbouwen");
    veranderbuttonText("mensen aanspreken", "terug", "inbreken")
    veranderBackground("town2");
    knoppendisplay("block", "block", "block");
    buttondoorverwijzen(aanspreken, linkslinkspre, inbreken)
}
function linkslinksrechts(){
    console.log("(Game) De Guard")
    verandertitel("De guard!");
    veranderdescriptionText("Je bent tegen een stadswachter aangelopen, hij pakt zijn zwaard!");
    veranderbuttonText("overgeven", "rennen", "richting")
    veranderBackground("guard");
    knoppendisplay("block", "block", "none");
    buttondoorverwijzen(overgevenguard, linkslinksrechtsdoor, start)
    console.log("debug")
}
function overgevenguard(){
    console.log("(Game) Game over")
    knoppendisplay("block", "none", "none");
    buttondoorverwijzen(Restart, start, start)
    veranderbuttonText("Restart", "terug", "rechts")
    verandertitel("Helaas game over!");
    veranderBackground("dood");
    veranderdescriptionText("De kasteel wachter heeft je meegenomen en dezelde dag nog aan de galg gehangen");  
}
function linkslinksrechtsdoor(){
    console.log("(Game) Victory")
    verandertitel("Victory");
    veranderdescriptionText("Je hebt kunnen ontsnappen aan de guard en je kan nu een bestaan opbouwen");
    veranderbuttonText("Restart", "terug", "rechts")
    veranderBackground("victory");
    knoppendisplay("block", "none", "none");
    buttondoorverwijzen(Restart, start, start)
}
function aanspreken(){
    console.log("(Game) Game over")
    knoppendisplay("block", "none", "none");
    buttondoorverwijzen(Restart, start, start)
    veranderbuttonText("Restart", "terug", "rechts")
    verandertitel("Helaas game over!");
    veranderBackground("dood");
    veranderdescriptionText("De kasteel wachter heeft je gevonden en dezelde dag nog aan de galg gehangen");  
}
function inbreken(){
    console.log("(Game) Game over")
    knoppendisplay("block", "none", "none");
    buttondoorverwijzen(Restart, start, start)
    veranderbuttonText("Restart", "terug", "rechts")
    verandertitel("Helaas game over!");
    veranderBackground("dood");
    veranderdescriptionText("De kasteel wachter heeft je gevonden en dezelde dag nog aan de galg gehangen");  
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