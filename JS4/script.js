let convertToLowercase = document.getElementById("convertToLowercase");
let outputClear = document.getElementById("outputClear");
let btn = document.getElementById("btn");
let output = document.getElementById("output");
let input = document.getElementById("input");
let originalStatement = document.getElementById("originalStatement");
let convertToUppercase = document.getElementById("convertToUppercase");
let convertToCapitalize = document.getElementById("convertToCapitalize");
let betterFormatting = document.getElementById("betterFormatting");
let printallCities = document.getElementById("printallCities");
let addYourCityInList= document.getElementById("addYourCityInList");
let checkyourCityInList = document.getElementById("checkyourCityInList");
let findThisWord = document.getElementById("findThisWord");
let replaceThisWord = document.getElementById("replaceThisWord");

// convertToLowercase button

convertToLowercase.addEventListener("click",function(){
    let value = input.value.toLowerCase();
    output.innerHTML= value ;
})

// convertToUppercase button

convertToUppercase.addEventListener("click",function(){
    let value = input.value.toUpperCase()
    output.innerHTML=value;
})

// convertToCapitalize button

convertToCapitalize.addEventListener("click",function(){
    let value = input.value;
    output.innerHTML = `<span style = "text-transform : capitalize;"> ${value} <span>`;
})

// betterFormatting button

betterFormatting.addEventListener("click",function(){
    let value = input.value.toLowerCase();

    if(!input.value){
        alert("enter your value")
        return
    }
    output.innerHTML =  `<span style = "text-transform : capitalize;"> ${value} <span>`;
})
// printallCities button

printallCities.addEventListener("click",function(){
    output.innerHTML="";
    for(let i = 0 ; i < cities.length;i++){
        output.innerHTML += cities[i] + "<br>" ;
    }
    
})

// addYourCityInList button

addYourCityInList.addEventListener("click",function(){
    output.innerHTML="";
    if(!input.value){
        alert("enter your city name")
    }
    let value = cities.push(input.value) ;
    output.innerHTML= value ;
})

// checkyourCityInList button

checkyourCityInList.addEventListener("click", function () {
    let city = input.value;

    if (!city) {
      alert("please type your city");
      return;
    }

    let cityFirstLetter = city.slice(0, 1).toUpperCase();
    let cityNextLetter = city.slice(1).toLowerCase();
    let cityWorld = cityFirstLetter + cityNextLetter;

    let cityFound = false;
    for (let i = 0; i < cities.length; i++) {
      if (cities[i] === cityWorld) {
        cityFound = true;
        let html =
          '<span style="color:red;font-size:20px;">"' +
          cityWorld +
          '"</span> found in the list.&#128151';
        output.innerHTML = html
      }
    }
    if (cityFound === false) {
      cities.push(cityWorld);
      let html =
        '</span> SORRY &#128524 We could not find your city <span style="color:red;font-size:20px;">"' +
        cityWorld +
        '"</span> in list.</span> Click <span style="color:green;font-size:20px;"> Add Your City In List </span>  to add your city &#128522;';
      output.innerHTML = html
    }
})

// find This Word

findThisWord.addEventListener("click", function () {
let newString = originalStatement.innerHTML.toLowerCase();
let word = input.value;
if (!word) {
  alert("Please input any text");
  return;
}
word = word.toLowerCase();
let findWord = newString.indexOf(word);
if (findWord !== -1) {
  let html =
    'Your word <span style="color:green;font-size:20px;">"' +
    word +
    '"</span> found ar index:' +
    findWord;
  output.innerHTML = html
} else {
  let html =
    'Your word <span style="color:red;font-size:20px;">"' +
    word +
    '"</span> does not exist in the Original String';
  output.innerHTML = html
}
})

// Replace This Word

replaceThisWord.addEventListener("click", function () {

let newString = originalStatement.innerHTML.toLowerCase();
let word = input.value;
if (!word) {
  alert("Please type a word for replacing.");
  return;
}
let replaceWith = prompt("Enter a word that you want to replace");
if (!replaceWith) {
  alert("Pleae type a word to replace it with " + word + ".");
  return;
}

word = word.toLowerCase();
word = new RegExp(word, "g");
replaceWith = replaceWith.toLowerCase();
let replaceWord = newString.replace(word, replaceWith);
output.innerHTML = replaceWord

})


























































// arry  city name 

let cities = ["faisalabad" , "lahore" , "islamabad" , "karachi"] ;

// clear input button

btn.addEventListener("click",function(){
    input.value="";
})

// output clear button

outputClear.addEventListener("click",function(){
    output.innerHTML="";
})

// output style center
 output.style.textAlign="center";