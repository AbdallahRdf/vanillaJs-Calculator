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

const expression = [];
const operators = ["+", "-", "/", "x"];
const operator = null;

oneBtn.addEventListener("click", () =>{        
        (screen.value == "0" || operators.includes(screen.value)) ? (screen.value = "1") : (screen.value += "1")
        upperScreen.value == "0" ? (upperScreen.value = "1") : (upperScreen.value += "1");
    }
);
twoBtn.addEventListener("click", () => {
    (screen.value == "0" || operators.includes(screen.value)) ? (screen.value = "2") : (screen.value += "2");
    upperScreen.value == "0" ? (upperScreen.value = "2") : (upperScreen.value += "2");
});
threeBtn.addEventListener("click", () => {
    (screen.value == "0" || operators.includes(screen.value)) ? (screen.value = "3") : (screen.value += "3");
    upperScreen.value == "0" ? (upperScreen.value = "3") : (upperScreen.value += "3");
});
fourBtn.addEventListener("click", () => {
    (screen.value == "0" || operators.includes(screen.value)) ? (screen.value = "4") : (screen.value += "4");
    upperScreen.value == "0" ? (upperScreen.value = "4") : (upperScreen.value += "4");
});
fiveBtn.addEventListener("click", () => {
    (screen.value == "0" || operators.includes(screen.value)) ? (screen.value = "5") : (screen.value += "5");
    upperScreen.value == "0" ? (upperScreen.value = "5") : (upperScreen.value += "5");
});
sixBtn.addEventListener("click", () => {
    (screen.value == "0" || operators.includes(screen.value)) ? (screen.value = "6") : (screen.value += "6");
    upperScreen.value == "0" ? (upperScreen.value = "6") : (upperScreen.value += "6");
});
sevenBtn.addEventListener("click", () => {
    (screen.value == "0" || operators.includes(screen.value)) ? (screen.value = "7") : (screen.value += "7");
    upperScreen.value == "0" ? (upperScreen.value = "7") : (upperScreen.value += "7");
});
eigthBtn.addEventListener("click", () => {
    (screen.value == "0" || operators.includes(screen.value)) ? (screen.value = "8") : (screen.value += "8");
    upperScreen.value == "0" ? (upperScreen.value = "8") : (upperScreen.value += "8");
});
nineBtn.addEventListener("click", () => {
    (screen.value == "0" || operators.includes(screen.value)) ? (screen.value = "9") : (screen.value += "9");
    upperScreen.value == "0" ? (upperScreen.value = "9") : (upperScreen.value += "9");
});
zeroBtn.addEventListener("click", () => {
    (screen.value != "0" && !operators.includes(screen.value)) ? (screen.value += "0") : screen.value = "0";
    upperScreen.value != "0" && (upperScreen.value += "0");
});
decimalBtn.addEventListener("click", () => {
    screen.value += ".";
    upperScreen.value += ".";
});
clear.addEventListener("click", () => {
  screen.value = "0";
  upperScreen.value = "0";
  expression.splice(0);
});

add.addEventListener("click", () => {
    screen.value == "0" ? expression.push("0","+") : expression.push(screen.value, "+");
    screen.value = "+";
    upperScreen.value += "+"
});

substract.addEventListener("click", () => {
    screen.value == "0" ? expression.push("0","-") : expression.push(screen.value, "-");
    screen.value = "-";
    upperScreen.value += "-";
});

multiply.addEventListener("click", () => {
    screen.value == "0" ? expression.push("0","x") : expression.push(screen.value, "x");
    screen.value = "x";
    upperScreen.value += "x";
});

divide.addEventListener("click", () => {
    screen.value == "0" ? expression.push("0","/") : expression.push(screen.value, "/");
    screen.value = "/";
    upperScreen.value += "/";
});

equalBtn.addEventListener("click", () => {
    expression.push(screen.value);
    if(expression.length == 0){
        screen.value = "NAN";
        upperScreen.value = "=NAN";
    }else{
        const expressionCopy = expression.slice();
        let result;
        console.log(expression);
        for(let i = 0; i<expression.length; i++){
            if(["x", "/"].includes(expression[i])){
                switch(expression[i]){
                    case "x": result = parseFloat(expression[i-1])*parseFloat(expression[i+1]); break;
                    case "/": result = parseFloat(expression[i-1])/parseFloat(expression[i+1]); break;
                }
                expression.splice(i-1, 3, result);
                if(expression.length === 1){
                    break;
                }
                i=0;
            }
        }
        if(expression.length !== 1){
            for(let i = 0; i<expression.length; i++){
                if(['+', '-'].includes(expression[i])){
                    switch(expression[i]){
                        case "+": result = parseFloat(expression[i-1])+parseFloat(expression[i+1]); break;
                        case "-": result = parseFloat(expression[i-1])-parseFloat(expression[i+1]); break;
                    }
                    expression.splice(i-1, 3, result);
                    if(expression.length === 1){
                        break;
                    }
                    i=0;
                }
                
            }
        }
        console.log(expression);
        screen.value = expression.join("");
        upperScreen.value += "="+expression.join("");
    }
});