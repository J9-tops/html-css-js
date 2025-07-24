const keyC = document.querySelector("#C");
const keyBckSpace = document.querySelector("#bck-space");
const equals = document.querySelector("#equals");
const operator = document.querySelectorAll(".operator");
const numKeys = document.querySelectorAll(".num-key");
const display = document.querySelector(".display");
const text = document.querySelector(".text");
const historyE = document.querySelector(".history");
text.style.fontSize = "93px";
historyE.style.fontSize = "30px";
let signState = false;
let operatorString = "";
let result;
let x = "";
let y = "";
let historyArray = [];
let operationNumber = 1;

function addToArray(x, y, sign, result) {
  let newObject = {
    name: `Operation ${operationNumber}`,
    value1: x,
    value2: y,
    sign: sign,
    result: result,
  };
  historyArray.push(newObject);
  operationNumber++;
}

function fontSizeAdjustment() {
  if (text.clientWidth > display.clientWidth) {
    let fontSize = parseInt(text.style.fontSize);
    for (i = fontSize; i >= 50; i--) {
      fontSize--;
      text.style.fontSize = fontSize + "px";
    }
  }
}

function getXValue(number) {
  x = x.toString();
  if (number == "." && x.includes(".")) {
    return;
  }
  x += number;
}

function getYValue(number) {
  y = y.toString();
  if (number == "." && y.includes(".")) {
    return;
  }
  y += number;
  // text.textContent = y;
}

function clear() {
  operatorString = "";
  text.textContent = "";
  x = "";
  y = "";
  signState = false;
  result = undefined;
}

function equalTo() {
  let ans = operation();
  ans = Number(ans);
  let answer = ans.toFixed(5);
  let finalAnswer = formatDecimal(answer);
  text.textContent = finalAnswer;
}

function deleteNumbers(variable) {
  if (variable == "x") {
    let num = x;
    let number = Number(num.toString().slice(0, -1));
    x = number;
    text.textContent = x;
  } else if (variable == "y") {
    let num = y;
    let number = Number(num.toString().slice(0, -1));
    y = number;
    text.textContent = y;
  }
}

function runWithKey() {
  document.body.addEventListener("keydown", function (event) {
    const key = event.key;
    if (key == "Escape") {
      return clear();
    }
    if (key == "Enter") {
      equalTo();
      historyE.textContent = `${x} ${operatorString} ${y} = ${result}`;
    }

    if (key == "Backspace") {
      if (signState) {
        deleteNumbers("y");
      } else {
        deleteNumbers("x");
      }
    }

    const ignoredKeys = ["Control", "Shift", "Alt", "Meta", "CapsLock", "Tab", " "];
    const allowedKeys = ["/", "*", "+", "-", "%"];
    if (ignoredKeys.includes(key)) {
      return;
    }

    if (allowedKeys.includes(key)) {
      operatorString = key;
      signState = true;
    }

    if ((key >= "a" && key <= "z") || (key >= "A" && key <= "Z")) {
      return;
    }
    let xString = x.toString();
    let yString = y.toString();

    if (key)
      if ((key >= "0" && key <= "9" && signState) || key == ".") {
        if (yString.length >= 15) {
          event.preventDefault();
        } else {
          getYValue(key);
        }
      } else if ((key >= "0" && key <= "9") || key == ".") {
        {
          if (xString.length >= 15) {
            event.preventDefault();
          } else {
            getXValue(key);
          }
        }
      }

    if (result != undefined) {
      if (signState) {
        x = result;
        y = "";
      } else {
        x = "";
        y = "";
      }
    }

    fontSizeAdjustment();
    text.innerText = `${x} ${operatorString} ${y}`;
  });
}

function runWithScreen() {
  numKeys.forEach((button) => {
    button.addEventListener("click", function () {
      if (button.getAttribute("data-value") == "!") {
        if (signState) {
          y = -Number(y);
          text.textContent = y;
        } else {
          x = -Number(x);
          text.textContent = x;
        }
        return;
      }
      if (result != undefined) {
        if (signState) {
          x = result;
          y = "";
        } else {
          x = "";
          y = "";
        }
      }

      let xString = x.toString();
      let yString = y.toString();

      if (signState) {
        if (yString.length >= 15) {
          button.preventDefault();
        } else {
          getYValue(button.getAttribute("data-value"));
        }
      } else {
        if (xString.length >= 15) {
          button.preventDefault();
        } else {
          getXValue(button.getAttribute("data-value"));
        }
      }
      fontSizeAdjustment();
      text.innerText = `${x} ${operatorString} ${y}`;
    });
  });
}

operator.forEach((sign) => {
  sign.addEventListener("click", function () {
    operatorString = this.getAttribute("data-value");
    signState = true;
  });
});

function operation() {
  if (operatorString == "/") {
    let valueX = x;
    let valueY = y;
    valueX = Number(valueX);
    valueY = Number(valueY);
    result = valueX / valueY;
  } else if (operatorString == "*") {
    let valueX = x;
    let valueY = y;
    valueX = Number(valueX);
    valueY = Number(valueY);
    result = valueX * valueY;
  } else if (operatorString == "+") {
    let valueX = x;
    let valueY = y;
    valueX = Number(valueX);
    valueY = Number(valueY);
    result = valueX + valueY;
  } else if (operatorString == "-") {
    let valueX = x;
    let valueY = y;
    valueX = Number(valueX);
    valueY = Number(valueY);
    result = valueX - valueY;
  } else if (operatorString == "%") {
    let valueX = x;
    valueX = Number(valueX);
    result = valueX / 100;
  } else if (operatorString == "sqrt") {
    let valueX = x;
    valueX = Number(valueX);
    result = Math.sqrt(valueX);
  }
  return result;
}

function formatDecimal(num) {
  let [integer, decimal] = num.toString().split(".");
  if (decimal == undefined) {
    return;
  } else {
    dec = decimal.replace(/0+$/, "");
    return dec ? `${integer}.${dec}` : integer;
  }
}

equals.addEventListener("click", function () {
  equalTo();
  // history.textContent = `${x} ${operatorString} ${y} = ${result}`;
  addToArray(x, y, operatorString, result);
  historyE.innerText = "";
  let startIndex = historyArray.length > 2 ? historyArray.length - 2 : 0;

  for (let i = startIndex; i < historyArray.length; i++) {
    let obj = historyArray[i];
    let spans = document.createElement("span");
    spans.setAttribute("class", "spans");
    spans.innerText = `${obj.name}: ${obj.value1} ${obj.sign} ${obj.value2} = ${obj.result}`;
    historyE.appendChild(spans);
  }

  // historyArray.forEach((obj) => {
  //   history.textContent = `${obj.name}: ${obj.value1} ${obj.sign} ${obj.value2} = ${result}`;
  // });
});

keyC.addEventListener("click", function () {
  clear();
});

keyBckSpace.addEventListener("click", function () {
  if (signState) {
    deleteNumbers("y");
  } else {
    deleteNumbers("x");
  }
});

function program() {
  runWithKey();
  runWithScreen();
}

program();
