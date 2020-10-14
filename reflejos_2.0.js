var seconds=30;
var contador=0;

function BackgroundColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

function aparecerForma() {

var top=Math.random()*300;
var left=Math.random()*600;
var width=(Math.random()*200)+100;
var height=(Math.random()*200)+100;
var color=BackgroundColor();

//circulo o cuadrado

if(Math.random()>0.5) {
    document.getElementById("forma").style.borderRadius="0%";
}
else {
    document.getElementById("forma").style.borderRadius="50%";
}

document.getElementById("forma").style.display="block";
document.getElementById("forma").style.top=top+"px";
document.getElementById("forma").style.left=left+"px";
document.getElementById("forma").style.width=width+"px";
document.getElementById("forma").style.height=height+"px";
document.getElementById("forma").style.backgroundColor=color;
}

document.getElementById("start").onclick=

function () {
    setTimeout(function () {
            alert("Se acabo\nTú puntaje es: "
            +contador+"\nEres muy bueno en este juego :)");
            location.reload();
        }, 30000);
 
    setInterval(() => {
        seconds--;
        document.getElementById("crono").innerHTML=seconds+"s";
    }, 1000);

    document.getElementById("forma").style.display="block";
    aparecerForma();

    document.getElementById("forma").onclick=
    function () {
        contador++;
        aparecerForma();
        document.getElementById("fig").innerHTML=contador;
    }
}