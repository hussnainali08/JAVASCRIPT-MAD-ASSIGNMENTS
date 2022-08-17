let alertName = document.getElementById("alertName");
let originalStatement = document.getElementById("originalStatement");
let clearStatement = document.getElementById("clearStatement");
let alertNumber = document.getElementById("alertNumber");
let showVariableName = document.getElementById("showVariableName");
let output = document.getElementById("output");
let clearOutput = document.getElementById("clearOutput");
let showCamelcase = document.getElementById("showCamelcase");
let sumTwoNumbers = document.getElementById("sumTwoNumbers");
let subsctractTwoNumbers = document.getElementById("subsctractTwoNumbers");
let multiplyTwoNumbers = document.getElementById("multiplyTwoNumbers");
let divideTwoNumbers = document.getElementById("divideTwoNumbers");
let calculateSomeNumbers = document.getElementById("calculateSomeNumbers");

// ALERT NAME

alertName.addEventListener("click", function () {
  alert("Hussnain Ali");

  originalStatement.innerHTML = "alert('Hussnain Ali')";
  output.innerHTML = "";
  originalStatement.style.textAlign = "center";
});

// clear Statement

clearStatement.addEventListener("click", function () {
  originalStatement.innerHTML = "";
});

// alert Number

alertNumber.addEventListener("click", function () {
  alert("0123456789");
  output.innerHTML = "";
  originalStatement.innerHTML = "alert('0123456789')";
  originalStatement.style.textAlign = "center";
});

// show Variable Name

showVariableName.addEventListener("click", function () {
  originalStatement.innerHTML = "";

  output.innerHTML =
    "<ul><li>Variable names must begin with a letter, an underscore (_) or a dollar sign ($).</li><li>Variable names can only contain letters,numbers,underscores,or dollar signs</li><li>Variable names can only contain letters,numbers,underscores,or dollar signs</li><li>Variable names can only contain letters,numbers,underscores,or dollar signs</li></ul>";
  output.style.textAlign = "center";
});

// clear Statement

clearOutput.addEventListener("click", function () {
  output.innerHTML = "";
});

// show Camelcase

showCamelcase.addEventListener("click", function () {
  originalStatement.innerHTML = "";
  output.innerHTML =
    "<ul><li>user</li><li>userResponse</li><li>userResponseTime</li><li>userResponseTimeLimit</li></ul>";
  output.style.textAlign = "center";
});

// sum Two Numbers

sumTwoNumbers.addEventListener("click", function () {
  let num1 = 10;
  let num2 = 10;
  let sum = num1 + num2;
  output.innerHTML = sum;
  originalStatement.innerHTML =
    "let num1 = 10; <br> let num2 = 10; <br> let sum = num1 + num2;";
  originalStatement.style.textAlign = "center";
  output.style.textAlign = "center";
});

// subsctract Two Numbers

subsctractTwoNumbers.addEventListener("click", function () {
  let num1 = 10;
  let num2 = 10;
  let subsctract = num1 - num2;
  output.innerHTML = subsctract;
  originalStatement.innerHTML =
    "let num1 = 10; <br> let num2 = 10; <br> let subsctract = num1 - num2;";
  originalStatement.style.textAlign = "center";
  output.style.textAlign = "center";
});

// multiply Two Numbers

multiplyTwoNumbers.addEventListener("click", function () {
  let num1 = 10;
  let num2 = 10;
  let multiply = num1 * num2;
  output.innerHTML = multiply;
  originalStatement.innerHTML =
    "let num1 = 10; <br> let num2 = 10; <br> let multiply = num1 * num2;";
  originalStatement.style.textAlign = "center";
  output.style.textAlign = "center";
});

// divide Two Numbers

divideTwoNumbers.addEventListener("click", function () {
  let num1 = 10;
  let num2 = 10;
  let divide = num1 / num2;
  output.innerHTML = divide;
  originalStatement.innerHTML =
    "let num1 = 10; <br> let num2 = 10; <br> let multiply = num1 / num2;";
  originalStatement.style.textAlign = "center";
  output.style.textAlign = "center";
});

// calculate Some Numbers

calculateSomeNumbers.addEventListener("click", function () {
  let calculateSomeNumbers = (24 / 6) * 3 + 3 ** 4 - (9 + 8);

  output.innerHTML = calculateSomeNumbers;
  originalStatement.innerHTML =
    "let calculateSomeNumbers = 24 / 6 * 3 + 3 ** 4 - (9 + 8)";
  originalStatement.style.textAlign = "center";
  output.style.textAlign = "center";
});