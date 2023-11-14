console.log("Hello World");
console.log('I Love Bangladesh');


//Use Srict Mood
"use strict";
MyName();
function MyName(){
    MyName=("Ibrahim Khalil");
}

//Spread Operator

let developingCountry=['Bangladesh', 'Srilanka'];

let richCountry=['America','China', 'Japan'];

let richCountry2=[...developingCountry,'America','China','Japan'];

let allCountry=[...developingCountry,...richCountry2];
console.log(allCountry);

console.log(developingCountry);