const input1 = document.querySelector('#input1')
const input2 = document.querySelector('#input2')
const input3 = document.querySelector('#input3')
const submitButton = document.querySelector('button')

function add(num1, num2) {
  return num1 + num2;
}

submitButton.onclick = (event) => {
  event.preventDefault();
  const value1 = input1.value;
  const value2 = input2.value;
  
  input3.value = add(value1, value2).toString();
}