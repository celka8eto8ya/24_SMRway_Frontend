let age = 25;
let firstName = "Andrei";
let birthPlace = "Korsun";
const girlfriend = false;

// girlfriend = true;

// alert(age);
// alert(firstName);
// alert(birthPlace);
// alert(girlfriend);
// alert("Assalyam Ualeikum!");

console.log(age, "+ 10 =", age + 10, birthPlace);
console.log();

const res = document.getElementById("result");
console.log(res.textContent);
document.getElementById("result").textContent = 40;
document.getElementById("resultText").textContent = "Your answer is:";

const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const calc = document.getElementById("calc");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const multiply = document.getElementById("multiply");
const divide = document.getElementById("divide");

// const sum = Number(input1.value) + Number(input2.value);
// console.log(typeof sum, sum);
// document.getElementById("result").textContent = sum;

function calculateWithAction(inp1, inp2, action, RES) {
  if (action == "+") {
    return Number(inp1.value) + Number(inp2.value);
  } else if (action == "-") {
    return Number(inp1.value) - Number(inp2.value);
  } else if (action == "*") {
    return Number(inp1.value) * Number(inp2.value);
  } else if (action == "/") {
    return Number(inp1.value) / Number(inp2.value);
  }
}

// plus
plus.onclick = function () {
  document.getElementById("result").textContent = calculateWithAction(
    input1,
    input2,
    plus.value
  );
};

// minus
minus.onclick = function () {
  document.getElementById("result").textContent = calculateWithAction(
    input1,
    input2,
    minus.value
  );
};

// multiply
multiply.onclick = function () {
  document.getElementById("result").textContent = calculateWithAction(
    input1,
    input2,
    multiply.value
  );
};

// divide
divide.onclick = function () {
  document.getElementById("result").textContent = calculateWithAction(
    input1,
    input2,
    divide.value
  );
};
