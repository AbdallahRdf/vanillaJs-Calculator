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
const eigthBtn = document.querySelector("#eight");
const nineBtn = document.querySelector("#nine");
const add = document.querySelector("#add");
const substract = document.querySelector("#subtract");
const multiply = document.querySelector("#multiply");
const divide = document.querySelector("#divide");
const decimalBtn = document.querySelector("#decimal");
const clear = document.querySelector("#clear");
const equalBtn = document.querySelector("#equals");

upperScreen.value = "";
screen.value = "0";

const expression = [];
const operators = ["+", "-", "/", "x"];
// let operator = null;
let result = null;

autoResizeTextarea = () => {
  upperScreen.style.height = "auto";
  upperScreen.style.height = upperScreen.scrollHeight + "px";
}

autoResizeTextarea();

oneBtn.addEventListener("click", () =>{    
    if(result !== null){
        startAnotherOp("1");
    }else{
        (screen.value == "0" || operators.includes(screen.value)) ? (screen.value = "1") : (screen.value += "1");
        upperScreen.value == "0" ? (upperScreen.value = "1") : (upperScreen.value += "1");
    }
    autoResizeTextarea();
});

twoBtn.addEventListener("click", () => {
    if(result !== null){
        startAnotherOp("2");
    }else{
        (screen.value == "0" || operators.includes(screen.value)) ? (screen.value = "2") : (screen.value += "2");
        upperScreen.value == "0" ? (upperScreen.value = "2") : (upperScreen.value += "2");
    }
    autoResizeTextarea();
});

threeBtn.addEventListener("click", () => {
    if(result !== null){
        startAnotherOp("3");
    }else{
        (screen.value == "0" || operators.includes(screen.value)) ? (screen.value = "3") : (screen.value += "3");
        upperScreen.value == "0" ? (upperScreen.value = "3") : (upperScreen.value += "3");
    }
    autoResizeTextarea();
});

fourBtn.addEventListener("click", () => {
    if(result !== null){
        startAnotherOp("4");
    }else{
        (screen.value == "0" || operators.includes(screen.value)) ? (screen.value = "4") : (screen.value += "4");
        upperScreen.value == "0" ? (upperScreen.value = "4") : (upperScreen.value += "4");
    }
    autoResizeTextarea();
});

fiveBtn.addEventListener("click", () => {
    if(result !== null){
        startAnotherOp("5");
    }else{
        (screen.value == "0" || operators.includes(screen.value)) ? (screen.value = "5") : (screen.value += "5");
        upperScreen.value == "0" ? (upperScreen.value = "5") : (upperScreen.value += "5");
    }
    autoResizeTextarea();
});

sixBtn.addEventListener("click", () => {
    if(result !== null){
        startAnotherOp("6");
    }else{
        (screen.value == "0" || operators.includes(screen.value)) ? (screen.value = "6") : (screen.value += "6");
        upperScreen.value == "0" ? (upperScreen.value = "6") : (upperScreen.value += "6");
    }
    autoResizeTextarea();
});

sevenBtn.addEventListener("click", () => {
    if(result !== null){
        startAnotherOp("7");
    }else{
        (screen.value == "0" || operators.includes(screen.value)) ? (screen.value = "7") : (screen.value += "7");
        upperScreen.value == "0" ? (upperScreen.value = "7") : (upperScreen.value += "7");
    }
    autoResizeTextarea();
});

eigthBtn.addEventListener("click", () => {
    if(result !== null){
        startAnotherOp("8");
    }else{
        (screen.value == "0" || operators.includes(screen.value)) ? (screen.value = "8") : (screen.value += "8");
        upperScreen.value == "0" ? (upperScreen.value = "8") : (upperScreen.value += "8");
    }
    autoResizeTextarea();
});

nineBtn.addEventListener("click", () => {
    if(result !== null){
        startAnotherOp("9");
    }else{
        (screen.value == "0" || operators.includes(screen.value)) ? (screen.value = "9") : (screen.value += "9");
        upperScreen.value == "0" ? (upperScreen.value = "9") : (upperScreen.value += "9");
    }
    autoResizeTextarea();
});

zeroBtn.addEventListener("click", () => {
    if(result !== null){
        startAnotherOp("0");
    }else{
        (screen.value != "0" && !operators.includes(screen.value)) ? (screen.value += "0") : (screen.value = "0");
        (upperScreen.value != "0" && screen.value != "0") && (upperScreen.value += "0");
    }
    autoResizeTextarea();
});

decimalBtn.addEventListener("click", () => {
    if(result !== null){
        startAnotherOp("0.");
    }else if(!(/\./g.test(screen.value))){
        screen.value += ".";
        upperScreen.value += ".";
    }
    autoResizeTextarea();
});

clear.addEventListener("click", () => {
  screen.value = "0";
  upperScreen.value = "";
  expression.splice(0);
  result = null;
  autoResizeTextarea();
});

add.addEventListener("click", () => {
    if(result !== null){
        continueOperation("+");
    }else{
        if (operators.includes(screen.value)) {
            twoOpertorsEntered("+");
        }else{
            regularOp("+");
        }
    }
    autoResizeTextarea();
});

substract.addEventListener("click", () => {
    if(result !== null){
        continueOperation("-");
    }else if(!(expression[expression.length-1]==="-" && expression[expression.length-2]==="-")){
        if (operators.includes(screen.value)) {
            expression.push("-");
        }else{
            expression.push(screen.value, "-");
        }
        screen.value = "-";
        upperScreen.value += "-";
    }
    autoResizeTextarea();
});

multiply.addEventListener("click", () => {
    if(result !== null){
        continueOperation("x");
    }else if (operators.includes(screen.value)) {
      twoOpertorsEntered("x");
    } else {
      regularOp("x");
    }
    autoResizeTextarea();
});

divide.addEventListener("click", () => {
    if(result !== null){
        continueOperation("/");
    }else if(operators.includes(screen.value)){
        twoOpertorsEntered("/");
    }else{
        regularOp("/");
    }
    autoResizeTextarea();
});

equalBtn.addEventListener("click", () => {
    expression.push(screen.value);

    //* fixing the expression;
    removeOperatorAtEnd();

    //* callign function to fix number sign;
    fixSign();

    //* calling function for * and / operations;
    multiplyAndDivide();

    //* calling function for + and - operations;
    (expression.length !== 1) && addAndSubtruct();

    screen.value = expression[0];
    upperScreen.value += "=" + expression[0];
    expression.splice(0);
    result = result?.toString();
});

 //* handling "+" and "-" operation;
const addAndSubtruct = () => {
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

//* handling "*" and "/" operation;
const multiplyAndDivide = () => {
    for (let i = 0; i < expression.length; i++) {
      if (["x", "/"].includes(expression[i])) {
        switch (expression[i]) {
          case "x":
            result =
              parseFloat(expression[i - 1]) * parseFloat(expression[i + 1]);
            break;
          case "/":
            result =
              parseFloat(expression[i - 1]) / parseFloat(expression[i + 1]);
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

//* handling the sign of numbers;
const fixSign = () => {
    for (let i = 0; i < expression.length - 1; i++) {
      if (
        (expression[i] == "-" && expression[i + 1] == "-") ||
        (expression[i] == "+" && expression[i + 1] == "+")
      ) {
        expression.splice(i, 2, "+");
        i = 0;
      } else if (
        (expression[i] == "-" && expression[i + 1] == "+") ||
        (expression[i] == "+" && expression[i + 1] == "-")
      ) {
        expression.splice(i, 2, "-");
        i = 0;
      } else if(["/", "x"].includes(expression[i]) && ["-", "+"].includes(expression[i+1])){
        expression[i+2] = expression[i+1]+expression[i+2];
        expression.splice(i+1, 1);
        i=0;
      }
    }
}

//* handle new operation based on the result of the previous one
const continueOperation = (operatorChar) => {
    expression.push(result, operatorChar);
    screen.value = operatorChar;
    upperScreen.value = result + operatorChar;
    result = null;
}

//* handle when two consecutive operators are entered, the operation performed should be the last operator;
const twoOpertorsEntered =(opertorChar) => {
    let condi = (expression[expression.length-1] == '-' && operators.includes(expression[expression.length-2]));
    expression.pop();
    condi && expression.pop();
    expression.push(opertorChar);
    screen.value = opertorChar;
    upperScreen.value = expression.join("");
}

//* fixing the expression, 
const removeOperatorAtEnd = ()=>{
    while(/[/+-/x//]$/.test(upperScreen.value)){
        expression.pop();
        upperScreen.value = expression.join("");
    }
}

//* handle starting a new operation;
const startAnotherOp = (number) => {
    result = null;
    screen.value = number;
    upperScreen.value = number;
}

//* this function pushes the value intered and the operator, and show them on both the screen and upperScreen
const regularOp = (operatorChar) => {
    expression.push(screen.value, operatorChar);
    screen.value = operatorChar;
    upperScreen.value += operatorChar;
}
