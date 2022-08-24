let concatenateSomeString = document.getElementById("concatenate-Some-String");
let output = document.getElementById("output");
let clearStatement = document.getElementById("clearStatement");
let clearOutput = document.getElementById("clearOutput");
let askNameFromUser = document.getElementById("Ask-Name-From-User");
let comparisonOperators = document.getElementById("Comparison-Operators");
let ifelseif = document.getElementById("if-else-if");
let testingSetsOfConditions = document.getElementById("Testing-Sets-of-Conditions");
let Login = document.getElementById("Login");
let ifStatementsNasted = document.getElementById("if-Statements-Nasted");



concatenateSomeString.addEventListener("click", function () {
    let value1 = prompt("enter your first value");
    let value2 = prompt("enter your second value");

    let somevalue = value1 + " " + value2;
    output.innerHTML = somevalue;
    output.style.textAlign = "center";
    originalStatement.innerHTML = "<p> let value1 = prompt('enter your first value'); <br> let value2 = prompt('enter your second value'); <br> let somevalue = value1 + ' ' + value2 ; </p>";
    originalStatement.style.textAlign = "center";
})

askNameFromUser.addEventListener("click", function () {
    let name = prompt("enter your name");
    output.innerHTML = name;
    output.style.textAlign = "center";
    originalStatement.innerHTML = "let name = prompt('enter your name');";
    originalStatement.style.textAlign = "center";
})

comparisonOperators.addEventListener("click", function () {
    let operators = "<b> Javascript Comparison Operators</b> <br> == Equal to <br> === Equal value and equal type <br> != Not equal <br> !== Not equal value or not equal type <br> > Greater than <br> < Less than <br> >= Greater than or equal to <br> <= Less than or equal to <br> ? Ternary operator";
    output.innerHTML = operators ;
    output.style.textAlign="center";
    originalStatement=" ";
})

ifelseif.addEventListener("click",function(){
    let number = prompt("enter a number");
    if(number > 0){
        output.innerHTML= "this number is positive" ;
        }
        else if(number < 0){
            output.innerHTML= "this number is negative";
        }
        else if(number === 0){
            output.innerHTML="this number is zero";
        }
        else{
            output.innerHTML="enter your number";
        }
    output.style.textAlign="center";
    originalStatement.style.textAlign="center";
    originalStatement.innerHTML="if(number > 0){output.innerHTML= 'this number is positive'}<br>else if(number < 0){output.innerHTML= 'this number is negative'}<br>else if(number = 0){output.innerHTML='this number is zero'}<br>else{output.innerHTML='enter your number'}";
})

testingSetsOfConditions.addEventListener("click",function(){
    let number1 = prompt("enter a number");
    if(number1 > 0){
        output.innerHTML= "this number is positive and condition is true" ;
        }
        else if(number1 < 0){
            output.innerHTML= "this number is negative and condition is true";
        }
        else{
            output.innerHTML="this condition is false"
        } 
        output.style.textAlign="center";
        originalStatement.style.textAlign="center";
        originalStatement.innerHTML="let number1 = prompt('enter a number')<br>if(number1 > 0){output.innerHTML= 'this number is positive and condition is true';}<br>else if(number1 < 0){output.innerHTML= 'this number is negative and condition is true';}<br>else{output.innerHTML='this condition is false'}";
})

Login.addEventListener("click",function(){
    let userName = prompt("enter your username");
    let  password1 = prompt("enter your password");
    if(userName == "hussnain" && password1 == "12345"){
        output.innerHTML="login";
        }
        else{
            output.innerHTML="invailed"
        }
    originalStatement.style.textAlign="center";
     output.style.textAlign="center";   
    originalStatement.innerHTML="let username = prompt('enter your username');<br>let  password = prompt('enter ypur password');<br>if(username == hussnain && password == 12345){} ";
})



ifStatementsNasted.addEventListener("click", function () {
  
    let smallNumber1 = prompt("Enter Your Number 1"); 
    let smallNumber2 = prompt("Enter Your Number 2");
    let smallNumber3 = prompt("Enter Your Number 3");
  
    if (smallNumber1 < smallNumber2) {
      if (smallNumber1 < smallNumber3) {
       output.innerHTML = "Smallest Number is 1"
      } else {
        output.innerHTML = "Smallest Number is 3"
     }
    } else {
      if (smallNumber2 < smallNumber3) {
        output.innerHTML = "Smallest Number is 2";
      } else {
        output.innerHTML = "Smallest Number is 3";
      }
   }
  
    output.style.textAlign = "center"
    originalStatement.innerHTML = 'if (smallNumber1 < smallNumber2) {<br>if (smallNumber1 < smallNumber3) {<br> output.innerHTML = "Smallest Number is 1"<br>} else {<br>output.innerHTML = "Smallest Number is 3"<br>}<br>} else {<br>if (smallNumber2 < smallNumber3) {<br>output.innerHTML = "Smallest Number is 2";<br>} else {<br>output.innerHTML = "Smallest Number is 3";<br>}<br>}'
    originalStatement.style.textAlign = "center"
  
  
  })


clearStatement.addEventListener("click", function () {
    originalStatement.innerHTML = " ";
})

clearOutput.addEventListener("click", function () {
    output.innerHTML = " ";
})


