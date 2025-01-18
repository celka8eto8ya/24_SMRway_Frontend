document.getElementById("btn_delete").onclick = function () {
  document.getElementById("screen").value =
    document.getElementById("btn_delete").value;
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

// adding button text to screen
function printBtnText(btn) {
  screenText = document.getElementById("screen").value;
  if (screenText == "0") {
    document.getElementById("screen").value = btn.value;
  } else {
    document.getElementById("screen").value += btn.value;
  }
}
// Функция для обработки нажатия на кнопку
function handleButtonClick(button) {
  printBtn(button);
}

// Привязываем обработчик событий к каждой кнопке
buttonIds.forEach((id) => {
  document.getElementById(id).onclick = function () {
    printBtnText(document.getElementById(id));
  };
});

// Привязываем обработчик событий к каждой кнопке
buttonIds.forEach((id) => {
  console.log(id);
});
