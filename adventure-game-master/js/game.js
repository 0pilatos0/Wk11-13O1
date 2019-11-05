// javascript library for simple game development

document.getElementById('option1').innerHTML = 'Start';
document.getElementById('level_title').innerHTML = 'Start het spel';
document.getElementById('option2').innerHTML = 'options';
// option2.setAttribute("onClick", "javascript:level0()");
document.getElementById('option3').innerHTML = 'stop';
document.getElementById('optie').innerHTML = 'In deze balk staat bij bijna elk level nieuwe info.';
document.getElementById("bijl3").style.visibility = "hidden";
document.getElementById("bijl3").src ='img/axenew.png';
var HasKey = false;



function level0() {
	console.log("level0()");
	document.getElementById('level_title').innerHTML = 'Level0 ';
	document.getElementById('level_image').src = 'img/wit.png';
}


function Level1() {
	console.log("Level1()");

	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'trek het binnenland in';
	opt1.setAttribute("onClick", "javascript:Level2();");
	
	var opt2 = document.getElementById('option2');
	opt2.innerHTML = 'ga de zee in';
	opt2.setAttribute("onclick", "javascript:leveldoodzee()");
	
	document.getElementById('level_image').src = 'img/strand1.jpg';
	document.getElementById('bijl3').src = 'img/axenew.png';
	document.getElementById("bijl3").style.visibility = "hidden";
	document.getElementById('level_title').innerHTML = 'Level1';
	
	document.getElementById("optie").innerHTML = "je bent wakker geworden op een eiland ergens in de Atlantische Oceaan\nwat ga je doen?<br>kijk wel uit ik zag net een of ander dier en het leek niet zo vriendelijk.";
	document.getElementById("axe").style.visibility = "visible";

	// only allow option 2 if user has a key in his inventory

	
	var opt3 = document.getElementById('option3');
	opt3.innerHTML = 'stop';
	opt3.setAttribute ("onclick", "javascript:level1()");
}
	
function Level2() {
	console.log("level2()");

	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'loop het pad rechts van je in';
	opt1.setAttribute("onClick", "javascript:level3()");
	
	var opt2 = document.getElementById('option2');
	opt2.innerHTML = 'loop het pad links van je in.';
	opt2.setAttribute("onClick", "javascript:level10()");
	
	var opt3 = document.getElementById('option3');
	opt3.innerHTML = 'stop';
	opt3.setAttribute("onClick", "javascript:Level1()");
	document.getElementById("bijl3").style.visibility = "hidden";
	document.getElementById("optie").innerHTML = "er zijn bomen op je pad gevallen\nJe ziet aan allebij de kanten een pad\nwelke kant ga je op?";
	document.getElementById('level_title').innerHTML = 'Level 2';
	document.getElementById('level_image').src = 'img/padboom.jpg';
}


function level3() {
	console.log("level3()");
	
	
	//var axe = document.getElementById('bijl3');
	//axe.innerHTML = ' ';
	//axe.setAttribute("onClick", "javascript:levelbijl()");
	var bijl3 = document.getElementById('bijl3')
	bijl3.src ='img/axenew.png';
	bijl3.setAttribute("onClick", "javascript:level4()");

	var opt2 = document.getElementById('option2')
	opt2.innerHTML = 'ga de hut in';
	opt2.setAttribute("onClick", "javascript:level13()");

	var opt3 = document.getElementById('option3');
	opt3.innerHTML = 'stop';
	opt3.setAttribute("onClick", "javascript:Level1()");
	document.getElementById("option1").style.visibility ="hidden";
    document.getElementById("bijl3").style.visibility = "visible";
	document.getElementById("optie").innerHTML = "je ziet een Hakbijl naast het hutje liggen.";
	document.getElementById('level_title').innerHTML ='level 3';
	document.getElementById('level_image').src = 'img/hut.png';

}
function bijl() {
	console.log("bijl()");
	var opt1 = document.getElementById('option1')
	opt1.innerHTML ='pak de hakbijl op';
	opt1.setAttribute("onclick", "javascript:level4()");
	
		
	var opt2 = document.getElementById('option2')
	opt2.innerHTML = 'ga de hut in';
	opt2.setAttribute("onClick", "javascript:level13()");

	var opt3 = document.getElementById('option3');
	opt3.innerHTML = 'stop';
	opt3.setAttribute("onClick", "javascript:Level1()");
	
	document.getElementById('axe').src = 'img/axenew.png';
	document.getElementById("axe").style.visibility = "visible";
	document.getElementById('level_title').innerHTML ='bijl';
	document.getElementById('level_image').src = 'img/hut.png';

}

function level4() {
	console.log("level4()");
	document.getElementById("optie").innerHTML = "je hebt de bijl <br>hak het hout";
	
	var opt1 = document.getElementById('option1')
	opt1.innerHTML ='hak het hout';
	opt1.setAttribute("onClick", "javascript:level5()");
	
	var opt2 = document.getElementById('option2')
	opt2.innerHTML ='ga naar links ';
	opt2.setAttribute("onClick", "javascript:level10()");
	
	var opt3 = document.getElementById('option3')
	opt3.innerHTML ='stop';
	opt3.setAttribute("onClick", "javascript:Level1()");
	document.getElementById("option1").style.visibility ="visible";
	document.getElementById("bijl3").style.visibility = "hidden";
	document.getElementById('level_title').innerHTML ='level 4';
	document.getElementById('level_image').src = 'img/padboom.jpg';
}	
function level5() {
	console.log("level5()");
	document.getElementById("optie").innerHTML = "welke kant kies je";
	
	var opt1 = document.getElementById('option1')
	opt1.innerHTML ='loop door';
	opt1.setAttribute("onclick", "javascript:leveldoodslang()");
	
	var opt2 = document.getElementById('option2');
		opt2.innerHTML = 'ga naar rechts';
		opt2.setAttribute("onClick", "javascript:level7()");
	
		var opt3 = document.getElementById('option3')
	opt3.innerHTML ='stop';
	opt3.setAttribute("onclick", "javascript:Level1()");
	
	document.getElementById('level_title').innerHTML ='level 5';
	document.getElementById('level_image').src = 'img/pad1.jpg';


}
function level6() {
	console.log("level6()");
	document.getElementById("optie").innerHTML = "Je bent dood. ";

	var opt1 = document.getElementById('option1')
	opt1.innerHTML =' ';
	opt1.setAttribute("onclick", "javascript:level111()");
	document.getElementById("axe").style.visibility = "hidden";

	var opt2 = document.getElementById('option2')
	opt2.innerHTML =' ';
	opt2.setAttribute("onclick", "javascript:level111()");

		var opt3 = document.getElementById('option3')
	opt3.innerHTML ='stop';
	opt3.setAttribute("onclick", "javascript:Level1()");
	document.getElementById("option1").style.visibility ="hidden";
	document.getElementById("option2").style.visibility ="hidden";
	document.getElementById('level_title').innerHTML ='level 6';
	document.getElementById('level_image').src = 'img/slang1.jpg';	
}
function level7() {
	console.log("level7()");
	document.getElementById("optie").innerHTML = "";
	var opt1 = document.getElementById('option1')
	opt1.innerHTML ='loop door';
	opt1.setAttribute("onclick", "javascript:level8()")
	var opt2 = document.getElementById('option2')
	opt2.innerHTML =' ';
	opt2.setAttribute("onClick", "javascript:level111()")
		var opt3 = document.getElementById('option3')
	opt3.innerHTML ='stop';
	opt3.setAttribute("onclick", "javascript:Level1()");
	document.getElementById("option1").style.visibility ="visible";
	document.getElementById("option2").style.visibility ="hidden";
	document.getElementById('level_title').innerHTML ='level 7';
	document.getElementById('level_image').src = 'img/pad2.jpg';

}
function level8() {
	console.log("level8()");
	
	var opt1 = document.getElementById('option1')
	opt1.innerHTML = 'kijk in het water';
	opt1.setAttribute("onclick", "javascript:level9()");

	var opt2 = document.getElementById('option2')
	opt2.innerHTML = 'ga zwemmen';
	opt2.setAttribute("onclick", "javascript:doodali()");
	
	var opt3 = document.getElementById('option3')
	opt3.innerHTML = 'stop';
	opt3.setAttribute("onclick", "javascript:Level1()");
	document.getElementById("option2").style.visibility ="visible";
	document.getElementById("optie").innerHTML = "oh oh, je kan niet verder lopen, maar wacht is even wat zie ik daar nou in het water. neem is even een kijkje.";
	document.getElementById('level_title').innerHTML ='level 8';
	document.getElementById('level_image').src = 'img/waterval2.jpg';
}
function level9() {
	console.log("level9()");
	document.getElementById("optie").innerHTML = "er glimt iets in het water<br>het is een mes, een heel scherp mes (kijk uit dat je jezelf niet snijdt)";
	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'pak het op en loop terug';
	opt1.setAttribute("onClick", "javascript:level15()");
	var opt3 = document.getElementById('option3')
	opt3.innerHTML = 'stop';
	opt3.setAttribute("onclick", "javascript:Level1()");
	document.getElementById('level_title').innerHTML ='level 9';
	document.getElementById('level_image').src = 'img/coral.jpg';
}
function level10() {
	console.log("level10()");
	document.getElementById("optie").innerHTML = "";
	var opt1 = document.getElementById('option1')
	opt1.innerHTML ='loop door';
	opt1.setAttribute("onclick", "javascript:level11()");
	var opt2 = document.getElementById('option2')
	opt2.innerHTML =' ';
	opt2.setAttribute("onClick", "javascript:level111()");
		var opt3 = document.getElementById('option3')
	opt3.innerHTML ='stop';
	opt3.setAttribute("onclick", "javascript:Level1()");
	document.getElementById('level_title').innerHTML ='level 10';
	document.getElementById('level_image').src = 'img/links1.jpg';
}
function level11() {
	console.log("level11()");
	var opt1 = document.getElementById('option1')
	opt1.innerHTML ='ga zwemmen';
	opt1.setAttribute("onClick", "javascript:doodali()");
	var opt2 = document.getElementById('option2')
	opt2.innerHTML ='ga terug';
	opt2.setAttribute("onClick", "javascript:Level2()");
		var opt3 = document.getElementById('option3')
	opt3.innerHTML ='stop';
	opt3.setAttribute("onclick", "javascript:Level1()");
	document.getElementById("optie").innerHTML = "je ziet een boot aan de overkant.<br>je kan erheen zwemmen of kies je toch het andere pad.";
	
	document.getElementById('level_title').innerHTML ='level11';
	document.getElementById('level_image').src = 'img./boot1.jpg';
}
function doodali() {
	console.log("doodali");
	document.getElementById("optie").innerHTML = "dat was niet zo slim van je.<br>je bent dood";
	var opt1 = document.getElementById('option1')
	opt1.innerHTML = '  ';
	opt1.setAttribute("onclick", "javascript:level111()");
	var opt2 = document.getElementById('option2')
	opt2.innerHTML ='Overnieuw';
	opt2.setAttribute("onclick", "javascript:Level1()");
		var opt3 = document.getElementById('option3')
	opt3.innerHTML ='stop';
	opt3.setAttribute("onclick", "javascript:Level1()");
	document.getElementById('level_title').innerHTML ='doodali';
	document.getElementById('level_image').src = 'img/ali.gif';
}
function level13() {
	console.log("level13");
	document.getElementById("optie").innerHTML = "De kikkers zien er aardig uit, maar zijn dodelijk als ze je aanraken.\ner zit er eentje op je hoofd.\n je bent dood"
	var opt1 = document.getElementById('option1');
	opt1.innerHTML = ' ';
	opt1.setAttribute("onclick", "javascript:level111()");

	var opt2 = document.getElementById('option2');
	opt2.innerHTML = ' ';
	opt2.setAttribute("onclick", "javascript:level111()");

	var opt3 = document.getElementById('option3');
	opt3.innerHTML = 'stop';
	opt3.setAttribute("onclick", "javascript:Level1()");
	document.getElementById("axe").style.visibility = "hidden";
	document.getElementById('level_title').innerHTML ='level13';
	document.getElementById('level_image').src ='img/kikker1.jpg';
	}
function level15() {
	console.log("level15()");
	document.getElementById("optie").innerHTML = "blijkbaar lag er op het andere pad een slang, maar goed dat je de andere kant op bent gegaan.";
	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Hak de slang met je mes.';
	opt1.setAttribute("onClick", "javascript:level16()");
	var opt2 = document.getElementById('option2');
	opt2.innerHTML = 'Doe niks en ga dood.';
	opt2.setAttribute("onClick", "javascript:leveldoodslang()");
		var opt3 = document.getElementById('option3')
	opt3.innerHTML ='stop';
	opt3.setAttribute("onclick", "javascript:Level1()");
	document.getElementById('level_title').innerHTML ='level15';
	document.getElementById('level_image').src = 'img/slang1.jpg';
}

function level16() {
	console.log("level16()");
	document.getElementById("optie").innerHTML = "";
	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'loop je door';
	opt1.setAttribute("onClick", "javascript:level17()");
	var opt2 = document.getElementById('option2');
	opt2.innerHTML = 'of ga je de jungle in ?';
	opt2.setAttribute("onClick", "javascript:level28()");
	var opt3 = document.getElementById('option3')
	opt3.innerHTML ='stop';
	opt3.setAttribute("onclick", "javascript:Level1()");
	document.getElementById('level_title').innerHTML ='level16';
	document.getElementById('level_image').src = 'img/pad2.jpg';
}
	function axe() {
	console.log("axe()");

	var opt1 = document.getElementById('axe');
	opt1.innerHTML = '';
	opt1.setAttribute("onClick", "myFunction()");
	document.getElementById('level_title').innerHTML= 'axe';
	document.getElementById('axe').src = 'img/axe.png'
	function myFunction() {

	document.getElementById("axe").style.visibility = "visible";
}
}


function level17() {
	console.log("level17()");
	
	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'hak de tijger.';
	opt1.setAttribute("onclick", "javascript:level18()");
	var opt2 = document.getElementById('option2');
	opt2.innerHTML = 'blijf staan en ga dood';
	opt2.setAttribute("onClick", "javascript:leveldood()");
	var opt3 = document.getElementById('option3')
	opt3.innerHTML ='stop';
	opt3.setAttribute("onclick", "javascript:Level1()");
	document.getElementById('level_title').innerHTML ='level17';
	document.getElementById('level_image').src = 'img/tijger.jpg';
	document.getElementById("optie").innerHTML = " de tijger valt je aan, vecht snel terug, of je gaat dood";
}
function level18() {
	console.log("level18()");
	document.getElementById("optie").innerHTML = "je bent gebeten in je been en je loopt niet meer goed.";
	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'steek de brug over.';
	opt1.setAttribute("onClick", "javascript:level19()");
	var opt2 = document.getElementById('option2');
	opt2.innerHTML = 'loop naar de rand van het water.';
	opt2.setAttribute("onClick", "javascript:level20()");
	var opt3 = document.getElementById('option3')
	opt3.innerHTML ='stop';
	opt3.setAttribute("onclick", "javascript:Level1()");
	//opt1.setAttribute("onClick", "alert:je valt om()");
	document.getElementById('level_title').innerHTML ='level18';
	document.getElementById('level_image').src = 'img/brug1.jpg';
	

}
function level19() {
	console.log("level19()");
	document.getElementById("optie").innerHTML = "";
	var opt1 = document.getElementById('option1')
	opt1.innerHTML =' ';
	opt1.setAttribute("onclick", "javascript:level111()");
    var opt2 = document.getElementById('option2')
	opt2.innerHTML =' ';
	opt2.setAttribute("onclick", "javascript:level111()");
		var opt3 = document.getElementById('option3')
	opt3.innerHTML ='stop';
	opt3.setAttribute("onclick", "javascript:Level1()");
	document.getElementById('level_title').innerHTML ='level19';
	document.getElementById('level_image').src = 'img/plons1.jpg';
	alert ('je bent gevallen in het water en de brug is gebroken.');
}
function level20() {
	console.log("level20()");
	document.getElementById("optie").innerHTML = "";
	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'stap de boot in ';
	opt1.setAttribute("onClick", "javascript:level21()");
	var opt2 = document.getElementById('option2')
	opt2.innerHTML =' ';
	opt2.setAttribute("onclick", "javascript:level111()");
	document.getElementById('level_title').innerHTML ='level20';
	document.getElementById('level_image').src = 'img/boot2.jpg';
}
function level21() {
	console.log("level21()");
	document.getElementById("optie").innerHTML = "";
	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'vaar door ';
	opt1.setAttribute("onClick", "javascript:level22()");
	document.getElementById('level_title').innerHTML ='level21';
	document.getElementById('level_image').src = 'img/boot3.jpg';

}
function level22() {
	console.log("level22()");
	document.getElementById("optie").innerHTML = "";
	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'vaar door ';
	opt1.setAttribute("onClick", "javascript:level25()");
	document.getElementById('level_title').innerHTML ='level21';
	document.getElementById('level_image').src = 'img/boot4.jpg';
	alert ('weet je zeker dat je weg wilt van dit eiland.\n het gaat zo stormen.');	
}
function level23() {
	console.log("level23")
	document.getElementById("optie").innerHTML = "";
}

function level24() {
	console.log("level24()");
	document.getElementById("optie").innerHTML = "";
	var opt1 = document.getElementById('option1')
	opt1.innerHTML =' ';
	opt1.setAttribute("onclick", "javascript:level111()");

var number = prompt("enter the code", " ");
    if (number != 1237) {
        document.getElementById("demo").innerHTML =
       alert ("Hello survivor! How are you today?");

        }
        else { greeting = "nope";
        }
       

	document.getElementById('level_title').innerHTML ='level24';
	document.getElementById('level_image').src = 'img/flash2.jpg';
}


function toggleFullScreen() {
  if ((document.fullScreenElement && document.fullScreenElement !== null) ||    
   (!document.mozFullScreen && !document.webkitIsFullScreen)) {
    if (document.documentElement.requestFullScreen) {  
      document.documentElement.requestFullScreen();  
    } else if (document.documentElement.mozRequestFullScreen) {  
      document.documentElement.mozRequestFullScreen();  
    } else if (document.documentElement.webkitRequestFullScreen) {  
      document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);  
    }  
  } else {  
    if (document.cancelFullScreen) {  
      document.cancelFullScreen();  
    } else if (document.mozCancelFullScreen) {  
      document.mozCancelFullScreen();  
    } else if (document.webkitCancelFullScreen) {  
      document.webkitCancelFullScreen();  
    }  
  }  
}

function level25() {
	console.log("level25()");
	document.getElementById("optie").innerHTML = "";
	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'vaar door ';
	opt1.setAttribute("onClick", "javascript:level26()");
	document.getElementById('level_title').innerHTML ='level25';
	document.getElementById('level_image').src = 'img/storm1.jpg';
}
function level26() {
	console.log("level26()");
		document.getElementById("optie").innerHTML = "je bent weer gestrand op hetzelfde eiland, idioot.";
	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'ga terug naar het begin'
	opt1.setAttribute("onClick", "javascript:level27()");
		var opt3 = document.getElementById('option3')
	opt3.innerHTML ='stop';
	opt3.setAttribute("onclick", "javascript:Level1()");
	document.getElementById('level_title').innerHTML ='level26';
	document.getElementById('level_image').src = 'img/gestrand1.jpg';
}
function leveldoodzee() {
	console.log("leveldoodzee()");
	var opt1 = document.getElementById('option1');
	opt1.innerHTML ='Overnieuw';
	opt1.setAttribute("onClick", "javascript:level1()");
	var opt2 = document.getElementById('option2');
	opt2.innerHTML = 'options';
	opt2.setAttribute("onClick", "javascript:options()");
		var opt3 = document.getElementById('option3')
	opt3.innerHTML ='stop';
	opt3.setAttribute("onclick", "javascript:Level1()");
	document.getElementById("optie").innerHTML = "Je ging zwemmen, maar er zaten haaien in de zee en je bent dus opgegeten.";
	document.getElementById("level_title").innerHTML ='leveldoodzee';
	document.getElementById("level_image").src = 'img/haai2.jpg';
}
function leveldoodtijger() {
	console.log("leveldoodtijger()");
	var opt1 = document.getElementById('option1');
	opt1.innerHTML ='Overnieuw';
	opt1.setAttribute("onClick", "javascript:level1()");
	var opt2 = document.getElementById('option2');
	opt2.innerHTML = 'options';
	opt2.setAttribute("onClick", "javascript:options()");
	var opt3 = document.getElementById('option3')
	opt3.innerHTML ='stop';
	opt3.setAttribute("onclick", "javascript:Level1()");
	document.getElementById("optie").innerHTML = "je moet juist geen snelle bewegingen en geluiden maken.en nu ben je dood.";
	document.getElementById("level_title").innerHTML ='leveldoodtijger';
	document.getElementById("level_image").src = 'img/tijger3.jpg';
}
function leveldoodslang() {
	console.log("leveldoodslang()");
	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Overnieuw';
	opt1.setAttribute("onClick", "javascript:Level1()");
	
	var opt2 = document.getElementById('option2');
	opt2.innerHTML = 'options';
	opt2.setAttribute("onClick", "javascript:options()");
	
	var opt3 = document.getElementById('option3')
	opt3.innerHTML ='stop';
	opt3.setAttribute("onclick", "javascript:Level1()");
	
	document.getElementById("optie").innerHTML = "je bent gebeten door een slang met gif en je bent na de bijt na 5 minuten dood gegaan.";
	document.getElementById("level_title").innerHTML ='leveldoodslang';
	document.getElementById("level_image").src = 'img/slang1.jpg';
}
function options() {
	console.log("options()");
	var opt1 = document.getElementById('option1');
	opt1.innerHTML ='sound of/sound on';
	opt1.setAttribute()
	function pauseAudio() { 
    x.pause(); 
	} 	var x = document.getElementById("myAudio");
	document.getElementById("level_title").innerHTML ='options';
}
function level27() {
	console.log("level27()");

	function f() {
	  alert('te laat')

	}
	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'zwaai naar de boot';
	opt1.setAttribute("onClick", "javascript:einde()");
	var opt3 = document.getElementById('option3')
	opt3.innerHTML ='stop';
	opt3.setAttribute("onclick", "javascript:Level1()");
	setTimeout(f, 10000)
	document.getElementById("optie").innerHTML = "oh maar wacht is even wat zie je daar in de verte, schiet op en zwaai anders gaan ze weg";
	document.getElementById("level_title").innerHTML ='level27';
	document.getElementById("level_image").src = 'img/sos1.jpg';
}
function level28() {
	console.log("level28()");
	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'probeer verder te lopen';
	opt1.setAttribute("onClick", "javascript:level29()");
	var opt2 = document.getElementById('option2');
	opt2.innerHTML = ' ';
		var opt3 = document.getElementById('option3')
	opt3.innerHTML ='stop';
	opt3.setAttribute("onclick", "javascript:Level1()");
	document.getElementById("optie").innerHTML = " ";
	document.getElementById("level_title").innerHTML ='level28';
	document.getElementById("level_image").src = 'img/jungle2.jpg';
}
function level29() {
	console.log("level29()");
	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'loop rustig naar rechts';
	opt1.setAttribute("onclick", "javascript:level30()");
	var opt2 = document.getElementById('option2');
	opt2.innerHTML = 'maak snelle bewegingen en geluid';
	opt2.setAttribute("onclick", "javascript:leveldoodtijger()");
		var opt3 = document.getElementById('option3')
	opt3.innerHTML ='stop';
	opt3.setAttribute("onclick", "javascript:Level1()");
	document.getElementById("optie").innerHTML = "het is je gelukt om verder te lopen, maar je bent nu wel tijger tegengekomen.<br>als ik jouw was zal ik naar rechts lopen";
	document.getElementById("level_title").innerHTML ='level29';
	document.getElementById("level_image").src = 'img/tijger2.jpg';
}
function level30() {
	console.log("level30()");
	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'steek de brug over.';
	opt1.setAttribute("onClick", "javascript:level31()");
	var opt2 = document.getElementById('option2');
	opt2.innerHTML = 'loop naar de rand van het water.';
	opt2.setAttribute("onClick", "javascript:level20()");
		var opt3 = document.getElementById('option3')
	opt3.innerHTML ='stop';
	opt3.setAttribute("onclick", "javascript:Level1()");
	document.getElementById("optie").innerHTML = "je ziet een brug, maar je ziet ook een boot aan de wal";
	document.getElementById("level_title").innerHTML ='level30';
	document.getElementById("level_image").src = 'img/brug1.jpg';
}
function level31() {
	console.log("level31()");
	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'ga naar binnen.';
	opt1.setAttribute("onClick", "javascript:level32()");
		var opt3 = document.getElementById('option3')
	opt3.innerHTML ='stop';
	opt3.setAttribute("onclick", "javascript:Level1()");
	document.getElementById("optie").innerHTML = "het dorp is verlaten, maar mischien is er nog wel een radio die je kan gebruiken.";
	document.getElementById("level_title").innerHTML ='level30';
	document.getElementById("level_image").src = 'img/dorp2.jpg';
}
function level32() {
	console.log("level32()");
	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'sein voor hulp';
	opt1.setAttribute("onClick", "javascript:level33()");
		var opt3 = document.getElementById('option3')
	opt3.innerHTML ='stop';
	opt3.setAttribute("onclick", "javascript:Level1()");
	document.getElementById("optie").innerHTML ="je checkt de radio en hij werkt nog."
	document.getElementById("level_title").innerHTML ='level32';
	document.getElementById("level_image").src = 'img/radio1.jpg';
}
function level33() {
	console.log("level33()");
	
	var opt1 = document.getElementById('option1')
	opt1.innerHTML = 'finsh';
	opt1.setAttribute("onclick", "javascript:einde()");
	var opt2 = document.getElementById('option2')
	opt2.innerHTML = 'blijf op het eiland'
	var opt3 = document.getElementById('option3')
	opt3.innerHTML ='stop';
	opt3.setAttribute("onclick", "javascript:Level1()");
	document.getElementById("optie").innerHTML = 'Na een paar dagen wachten is er een helikopter aangekomen die je weghaalt van het eiland.'
	document.getElementById("level_title").innerHTML = 'level33';
	document.getElementById("level_image").src = 'img/heli1.jpg';
}
function einde() {
	console.log("einde()");

	document.getElementById("optie").innerHTML = 'Thats all folks!'
	document.getElementById("level_title").innerHTML = 'einde';
	document.getElementById("level_image").src = 'img/eind.gif';
}