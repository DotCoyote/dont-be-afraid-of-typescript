const inputOne = document.querySelector('#input1');
const inputTwo = document.querySelector('#input2');
const resultInput = document.querySelector('#input3');
const submitButton = document.querySelector('button');

function addNumbers(num1, num2) {
  return num1 + num2;
}

submitButton.onclick = (event) => {
  event.preventDefault();
  const value1 = parseInt(inputOne.value);
  const value2 = parseInt(inputTwo.value);
  
  resultInput.value = addNumbers(value1, value2).toString();
}