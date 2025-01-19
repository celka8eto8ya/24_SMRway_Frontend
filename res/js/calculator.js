// Remove last character
document.getElementById("btn_delete").onclick = function () {
  screenArray = Array.from(document.getElementById("screen").value);
  if (document.getElementById("screen").value.length == 1) {
    document.getElementById("screen").value = "0";
  }
  if (document.getElementById("screen").value != "0") {
    screenArray.pop();
    document.getElementById("screen").value = screenArray.join("");
  }
};

// Массив с идентификаторами кнопок
const buttonIds = [
  "btn_1",
  "btn_2",
  "btn_3",
  "btn_4",
  "btn_5",
  "btn_6",
  "btn_7",
  "btn_8",
  "btn_9",
  "btn_0",
];

// Привязываем обработчик событий к каждой кнопке
buttonIds.forEach((id) => {
  document.getElementById(id).onclick = function () {
    printBtnText(document.getElementById(id));
  };
});

// Reverse sign
document.getElementById("btn_plus-minus").onclick = function () {
  if (document.getElementById("screen").value != "0") {
    document.getElementById("screen").value =
      +document.getElementById("screen").value * -1;
  }
};

// Adding `dot` to number
document.getElementById("btn_dot").onclick = function () {
  if (
    !Array.from(document.getElementById("screen").value).includes(",") &&
    document.getElementById("screen").value.length < 14
  ) {
    document.getElementById("screen").value += ",";
  }
};

// Clear screen
document.getElementById("btn_CE").onclick = function () {
  document.getElementById("screen").value = "0";
  document.getElementById("screenOperation").value = "";
  document.getElementById("screenHistory").value = "0";
};

// Массив с идентификаторами кнопок
const buttonOpersIds = [
  "btn_multiply",
  "btn_division",
  "btn_plus",
  "btn_minus",
  "btn_equal",
];

buttonOpersIds.forEach((id) => {
  document.getElementById(id).onclick = function () {
    calcByOperator(
      document.getElementById(id),
      document.getElementById("screen"),
      document.getElementById("screenHistory"),
      document.getElementById("screenOperation")
    );
  };
});

// FUNCTIONS ___________________________

// adding button text to screen
function printBtnText(btn) {
  screenText = document.getElementById("screen").value;
  if (screenText.length < 15) {
    if (screenText == "0") {
      document.getElementById("screen").value = btn.value;
    } else {
      document.getElementById("screen").value += btn.value;
    }
  }
}

// Calculation by operator
function calcByOperator(btn, screen, history, operator) {
  if (operator.value.length == 0) {
    history.value = screen.value;
  } else {
    if (operator.value == "+") {
      history.value = String(Number(history.value) + Number(screen.value));
    }
    if (operator.value == "-") {
      history.value = String(Number(history.value) - Number(screen.value));
    }
    if (operator.value == "*") {
      history.value = String(Number(history.value) * Number(screen.value));
    }
    if (operator.value == "/") {
      history.value = String(Number(history.value) / Number(screen.value));
    }
  }
  if (btn.value == "+") {
    operator.value = "+";
  }
  if (btn.value == "-") {
    operator.value = "-";
  }
  if (btn.value == "*") {
    operator.value = "*";
  }
  if (btn.value == "/") {
    operator.value = "/";
  }
  if (btn.value == "=") {
    operator.value = "";
    screen.value = history.value;
    history.value = 0;
  }
  if (btn.value != "=") {
    screen.value = 0;
  }
}
