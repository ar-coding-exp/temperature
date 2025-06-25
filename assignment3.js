function convertTemperatureC(){
let temperature = prompt("Give me the temerature in celcius");
let fahrenheit = temperature * 9/5 + 32;
console.log(`The temperature ${temperature} celcius is ${fahrenheit} farenheit`);

document.getElementById("conversion").innerHTML=fahrenheit;

if(temperature<=18){
document.getElementById("conversion").setAttribute("style", "color: blue;")
}else{
document.getElementById("conversion").setAttribute("style", "color: red;")
}
}

function convertTemperatureF(){
let temperature = prompt("Give me the temerature in fahrenheit");
let celcius = temperature * 5/9;
console.log(`The temperature ${temperature} fahrenheit is ${celcius} celcius`);

document.getElementById("conversion").innerHTML=celcius;
if(temperature<=30){
document.getElementById("conversion").setAttribute("style", "color: blue;")
}else{
document.getElementById("conversion").setAttribute("style", "color: red;")
}
}

