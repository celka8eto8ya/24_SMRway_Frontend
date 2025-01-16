let a = "Welcome to the club buddy!";
alert(a);

// document.getElementById("outputText").textContent = 1;
// alert(document.getElementById("outputText").value);

document.getElementById("outputNum1").value = 13 / 2;
document.getElementById("outputText").value = "wow";
document.getElementById("outputText2").textContent = "wow2";
// alert(output.textContent);

let x1 = 10;
console.log(2 + 3);

document.getElementById("get").onclick = function () {
  document.getElementById("outputText2").textContent =
    Number(document.getElementById("outputNum1").value) +
    Number(document.getElementById("outputNum2").value);
};

document.writeln("<h1>Hello, Recall knowleges.</h1>");

let a1 = 10,
  a2 = 52;

let b1 = false,
  b2 = `fuck ${a2}`;

console.log(`a1+a2: ${a1 + a2}`);
console.log(`b1+b2: ${b1 + b2}`);
