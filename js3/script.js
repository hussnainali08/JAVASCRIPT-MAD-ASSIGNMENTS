let input = document.getElementById("input");
let clear = document.getElementById("btn");
let simpleAlert = document.getElementById("Simple-Alert");
let printMyName = document.getElementById("Print-my-name");
let outPut = document.getElementById("output");
let printAllCcities = document.getElementById("Print-all-cities");
let addYourCityInlist = document.getElementById("add-your-city-in-list");
let generateTables = document.getElementById("Generate-tables");
let outputClear = document.getElementById("outputClear");


// clear button
clear.addEventListener("click",function(){
    input.value=" ";
})

// alert button
simpleAlert.addEventListener("click",function(){
    alert(input.value)
    
})
// print button
printMyName.addEventListener("click",function(){
    outPut.innerHTML=" ";
outPut.innerHTML= input.value ;
outPut.style.textAlign="center";
})
// print all cities
let cities = ["Faisalabad","Lahore","Karachi","Islamabad","Sheikhupura","Kashmir"];

printAllCcities.addEventListener("click",function(){
    outPut.innerHTML=" ";
for (let i = 0; i < cities.length; i++) {
    outPut.innerHTML += cities[i] + "<br>";    
}
outPut.style.textAlign="center";
})
// add cities
addYourCityInlist.addEventListener("click",function(){
    outPut.innerHTML=" ",
    cities.push(input.value);
})
// table
generateTables.addEventListener("click",function(){
    outPut.innerHTML=" ";
    for( let i = 1 ; i <= 10 ; i++){
outPut.innerHTML +=input.value + "*" + i + "=" + i*input.value + "<br>";
    }
   outPut.style.textAlign="center";
})
// clear output
outputClear.addEventListener("click",function(){
    outPut.innerHTML=" ";
})





















