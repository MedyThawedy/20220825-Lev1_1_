/*Schreibe eine Funktion, die nach X Sekunden einen Text anzeigt.*/
// https://www.w3schools.com/jsref/met_win_settimeout.asp

const myTimeout1 = setTimeout(myGreeting1, 3000);
function myGreeting1() {
    document.getElementById("idOutput").innerHTML += '<p>Start warten für 3 Sekunden</p>';
    console.log('Start 3 Sekunden')
}
const myTimeout2 = setTimeout(myGreeting2, 6000);
function myGreeting2() {
    document.getElementById("idOutput").innerHTML += '<p>Erledigt! </p>';
    console.log('Ende! ');
}


/*
setInterval
new Date()
*/
//https://www.w3schools.com/jsref/met_win_setinterval.asp

function dateFunction() {
    dObj = new Date();
    t = dObj.toLocaleTimeString();
    console.log(t);
    document.getElementById("idOutput2").innerHTML = t;
}

setInterval(dateFunction, 1000);

// setInterval
// clearInterval
// if, else

const myInterval2 = setInterval(myTimer, 1000);
let i = 10;
function myTimer() {
    console.log(i);
    document.getElementById("idOutput3").innerHTML += '<br>' + i;

    if (i == 0) {
        document.getElementById("idOutput3").innerHTML = ' ';
        clearInterval(myInterval2);
    } i--;
}










