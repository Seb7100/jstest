let udregning = [22, 80, 50, 70];

const die = function () {
    var i = + 200 - 100 + 300; 
    return udregning [3] + i;
};



let time = function () {
    var hours = new Date();
    var times = hours.getUTCDate();
}

document.getElementById('flex-box8').innerHTML = time();

//From Celcius to Fahrenheit

'use strict';
/* print conversion table
   celcius to fahrenheit */
const c2f = function () {
    let fahr;
    let celsius;

    let lower = 0;                       // define constants
    let upper = 300;
    let step = 20;

    let s = '<table>';
    s += '<tr><th>Celcius</th><th>Fahrenheit</th></tr>';
    celsius = lower;
    while (celsius <= upper) {
       fahr = celsius * 9/5 + 32;   // the conversion formula
        s += `<tr><td>${celsius}</td><td>${fahr}</td></tr>`;
        celsius = celsius + step;
    }
    s += '</table>';
    return s;
}
window.addEventListener('load', c2f);

document.getElementById('place_c2f_here').innerHTML = c2f();

// Dice 

let dice = 3;

const roll = function (foo) {    
    return Math.floor(Math.random() * foo) + 1;
    }
    window.addEventListener('load', roll);

// usage
dice = roll(6);   // generates a random natural number such that 1 < x < 37

document.getElementById('flex-box2').innerHTML = dice;

// Dice Array

let dicetwo = 1;

const rolls = function (foo) {    
    return Math.floor(Math.random() * foo) + 1;
    }
    window.addEventListener('load', rolls);

dicetwo = rolls(6); 

var dicearray = []

dicearray.push (dicetwo)
dicearray.push (dicetwo)
dicearray.push (dicetwo)
dicearray.push (dicetwo)
dicearray.push (dicetwo)

document.getElementById('flex-box3').innerHTML = dicearray[0]
document.getElementById('flex-box4').innerHTML = dicearray[1]
document.getElementById('flex-box5').innerHTML = dicearray[2]
document.getElementById('flex-box6').innerHTML = dicearray[3]
document.getElementById('flex-box7').innerHTML = dicearray[4]