function generateRandomNum(num1, num2) {
  return Math.floor(Math.random() * (num2 - num1 + 1)) + num1;
}

let generateBtn = document.getElementById('generate');
let num1Text = document.getElementById('num1');
let num2Text = document.getElementById('num2');
let resultElem = document.getElementById('value');

generateBtn.addEventListener('click', () => {
  let num1 = Number(num1Text.value);
  let num2 = Number(num2Text.value);

  resultElem.textContent = generateRandomNum(num1, num2);
});

/*
maybe:
clear button
*/
