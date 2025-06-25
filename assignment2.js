function temperatureCF(){
let temperature = prompt("Give me the temerature in celcius");
let farenheit = temperature * 9/5 + 32;
console.log(`The temperature ${temperature} celcius is ${farenheit} farenheit`);

document.getElementById("conversion").innerHTML=farenheit;
}

