function convertTemperatureRange(){
    let startValue = prompt("Provide a starting number");
    let endValue = prompt("Provide an ending number");
    let scale = prompt("Convert to Celcius \"C\" or Fahrenheit \"F\"?");

    for(i=startValue;i<=endValue;i++){

    if(scale=="F"){
    Celcius = i;
    Fahrenheit = (Celcius * 9/5) + 32;
    console.log(Fahrenheit);
    document.getElementById("conversion").innerHTML += `The temperature converted to fahrenheit is ${Fahrenheit}. <br>`

}else{
    Fahrenheit = i;
    Celcius = (Fahrenheit - 32) * 5/9;
    console.log(Celcius);
    document.getElementById("conversion").innerHTML += `The temperature converted to celcius is ${Celcius}. <br>`
    }

    }
}

convertTemperatureRange();
