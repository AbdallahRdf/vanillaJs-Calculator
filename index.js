const screen = document.querySelector("#display");
const upperScreen = document.querySelector("#upperScreen");
const zeroBtn = document.querySelector("#zero");
const oneBtn = document.querySelector("#one");
const twoBtn = document.querySelector("#two");
const threeBtn = document.querySelector("#three");
const fourBtn = document.querySelector("#four");
const fiveBtn = document.querySelector("#five");
const sixBtn = document.querySelector("#six");
const sevenBtn = document.querySelector("#seven");
const eigthBtn = document.querySelector("#eigth");
const nineBtn = document.querySelector("#nine");
const add = document.querySelector("#add");
const substract = document.querySelector("#substract");
const multiply = document.querySelector("#multiply");
const divide = document.querySelector("#divide");
const decimalBtn = document.querySelector("#decimal");
const clear = document.querySelector("#clear");
const equalBtn = document.querySelector("#equals");

upperScreen.value = "";
screen.value = "0";

const expression = [];
const operators = ["+", "-", "/", "x"];
const operator = null;
let result = null;

autoResizeTextarea = () => {
  upperScreen.style.height = "auto";
  upperScreen.style.height = upperScreen.scrollHeight + "px";
}

autoResizeTextarea();

oneBtn.addEventListener("click", () =>{    
    if(result !== null){
        result = null;
        screen.value = "1";
        upperScreen.value = "1";
    }else{
        (screen.value == "0" || operators.includes(screen.value)) ? (screen.value = "1") : (screen.value += "1");
        upperScreen.value == "0" ? (upperScreen.value = "1") : (upperScreen.value += "1");
    }
    autoResizeTextarea();
});
twoBtn.addEventListener("click", () => {
    if(result !== null){
        result = null;
        screen.value = "2";
        upperScreen.value = "2";
    }else{
        (screen.value == "0" || operators.includes(screen.value)) ? (screen.value = "2") : (screen.value += "2");
        upperScreen.value == "0" ? (upperScreen.value = "2") : (upperScreen.value += "2");
    }
    autoResizeTextarea();
});
threeBtn.addEventListener("click", () => {
    if(result !== null){
        result = null;
        screen.value = "3";
        upperScreen.value = "3";
    }else{
        (screen.value == "0" || operators.includes(screen.value)) ? (screen.value = "3") : (screen.value += "3");
        upperScreen.value == "0" ? (upperScreen.value = "3") : (upperScreen.value += "3");
    }
    autoResizeTextarea();
});
fourBtn.addEventListener("click", () => {
    if(result !== null){
        result = null;
        screen.value = "4";
        upperScreen.value = "4";
    }else{
        (screen.value == "0" || operators.includes(screen.value)) ? (screen.value = "4") : (screen.value += "4");
        upperScreen.value == "0" ? (upperScreen.value = "4") : (upperScreen.value += "4");
    }
    autoResizeTextarea();
});
fiveBtn.addEventListener("click", () => {
    if(result !== null){
        result = null;
        screen.value = "5";
        upperScreen.value = "5";
    }else{
        (screen.value == "0" || operators.includes(screen.value)) ? (screen.value = "5") : (screen.value += "5");
        upperScreen.value == "0" ? (upperScreen.value = "5") : (upperScreen.value += "5");
    }
    autoResizeTextarea();
});
sixBtn.addEventListener("click", () => {
    if(result !== null){
        result = null;
        screen.value = "6";
        upperScreen.value = "6";
    }else{
        (screen.value == "0" || operators.includes(screen.value)) ? (screen.value = "6") : (screen.value += "6");
        upperScreen.value == "0" ? (upperScreen.value = "6") : (upperScreen.value += "6");
    }
    autoResizeTextarea();
});
sevenBtn.addEventListener("click", () => {
    if(result !== null){
        result = null;
        screen.value = "7";
        upperScreen.value = "7";
    }else{
        (screen.value == "0" || operators.includes(screen.value)) ? (screen.value = "7") : (screen.value += "7");
        upperScreen.value == "0" ? (upperScreen.value = "7") : (upperScreen.value += "7");
    }
    autoResizeTextarea();
});
eigthBtn.addEventListener("click", () => {
    if(result !== null){
        result = null;
        screen.value = "8";
        upperScreen.value = "8";
    }else{
        (screen.value == "0" || operators.includes(screen.value)) ? (screen.value = "8") : (screen.value += "8");
        upperScreen.value == "0" ? (upperScreen.value = "8") : (upperScreen.value += "8");
    }
    autoResizeTextarea();
});
nineBtn.addEventListener("click", () => {
    if(result !== null){
        result = null;
        screen.value = "9";
        upperScreen.value = "9";
    }else{
        (screen.value == "0" || operators.includes(screen.value)) ? (screen.value = "9") : (screen.value += "9");
        upperScreen.value == "0" ? (upperScreen.value = "9") : (upperScreen.value += "9");
    }
    autoResizeTextarea();
});
zeroBtn.addEventListener("click", () => {
    if(result !== null){
        result = null;
        screen.value = "0";
        upperScreen.value = "0";
    }else{
        (screen.value != "0" && !operators.includes(screen.value)) ? (screen.value += "0") : screen.value = "0";
        upperScreen.value != "0" && (upperScreen.value += "0");
    }
    autoResizeTextarea();
});
decimalBtn.addEventListener("click", () => {
    if(result !== null){
        result = null;
        screen.value = "0.";
        upperScreen.value = "0.";
    }else{
        screen.value += ".";
        upperScreen.value += ".";
    }
    autoResizeTextarea();
});
clear.addEventListener("click", () => {
  screen.value = "0";
  upperScreen.value = "0";
  expression.splice(0);
  result = null;
  upperScreen.value = "";
  autoResizeTextarea();
});

add.addEventListener("click", () => {
    if(result !== null){
        expression.push(result, "+");
        screen.value = "+";
        upperScreen.value = result+"+";
        result = null;
    }else{
        if(screen.value == "0"){
            expression.push("0","+");
        }else if(screen.value=="+"){
            expression.push("+");
        }else if(!["x", "/"].includes(screen.value)){
            expression.push(screen.value, "+");
        }
        screen.value = "+";
        upperScreen.value += "+"
    }
    autoResizeTextarea();
});

substract.addEventListener("click", () => {
    if(result !== null){
        expression.push(result, "-");
        screen.value = "-";
        upperScreen.value = result+"-";
        result = null;
    }else{
        if (screen.value == "0") {
          expression.push("0", "-");
        } else if (screen.value == "-") {
          expression.push("-");
        } else if (!["x", "/"].includes(screen.value)) {
          expression.push(screen.value, "-");
        }
        screen.value = "-";
        upperScreen.value += "-";
    }
    autoResizeTextarea();
});

multiply.addEventListener("click", () => {
    if(result !== null){
        expression.push(result, "x");
        screen.value = "x";
        upperScreen.value = result+"x";
        result = null;
    }else if(!operators.includes(screen.value)){
        screen.value == "0" ? expression.push("0","x") : expression.push(screen.value, "x");
        screen.value = "x";
        upperScreen.value += "x";
    }
    autoResizeTextarea();
});

divide.addEventListener("click", () => {
    if(result !== null){
        expression.push(result, "/");
        screen.value = "/";
        upperScreen.value = result+"/";
        result = null;
    }else if(!operators.includes(screen.value)){
        screen.value == "0" ? expression.push("0","/") : expression.push(screen.value, "/");
        screen.value = "/";
        upperScreen.value += "/";
    }
    autoResizeTextarea();
});

equalBtn.addEventListener("click", () => {
    expression.push(screen.value);
    if(expression.length == 0){
        screen.value = "NAN";
        upperScreen.value = "=NAN";
    }else{
      console.log(expression);

      //* handling the sign of a number;
      for(let i=0; i<expression.length-1; i++){
        if((expression[i]=="-" && expression[i+1]=="-") || (expression[i]=="+" && expression[i+1]=="+")){
            expression.splice(i, 2, "+");
            i = 0;
        }else if((expression[i]=="-" && expression[i+1]=="+") || (expression[i]=="+" && expression[i+1]=="-")){
            expression.splice(i, 2, "-");
            i = 0;
        }
      }

      //* handling "*" and "/" operation;
      for (let i = 0; i < expression.length; i++) {
        if (["x", "/"].includes(expression[i])) {
          switch (expression[i]) {
            case "x":
              result = parseFloat(expression[i - 1]) * parseFloat(expression[i + 1]);
              break;
            case "/":
              result = parseFloat(expression[i - 1]) / parseFloat(expression[i + 1]);
              break;
          }
          expression.splice(i - 1, 3, result);
          if (expression.length === 1) {
            break;
          }
          i = 0;
        }
      }

      //* handling "+" and "-" operation;
      if (expression.length !== 1) {
        for (let i = 0; i < expression.length; i++) {
          if (["+", "-"].includes(expression[i])) {
            switch (expression[i]) {
              case "+":
                result =
                  parseFloat(expression[i - 1]) + parseFloat(expression[i + 1]);
                break;
              case "-":
                result =
                  parseFloat(expression[i - 1]) - parseFloat(expression[i + 1]);
                break;
            }
            expression.splice(i - 1, 3, result);
            if (expression.length === 1) {
              break;
            }
            i = 0;
          }
        }
      }
      console.log(expression);
      screen.value = expression.join("");
      upperScreen.value += "=" + expression.join("");
      expression.splice(0);
      result = result?.toString();
      console.log(expression);
      console.log(result);
    }
});