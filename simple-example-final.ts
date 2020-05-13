const inputOne = document.querySelector('#input1') as HTMLInputElement
const inputTwo = document.querySelector('#input2') as HTMLInputElement
const resultInput = document.querySelector('#input3') as HTMLInputElement
const submitButton = document.querySelector('button')

function addNumbers(num1: number, num2: number): number {
  return num1 + num2;
}

submitButton.onclick = (event: MouseEvent) => {
  event.preventDefault()
  const value1 = parseInt(inputOne.value);
  const value2 = parseInt(inputTwo.value);
  
  resultInput.value = addNumbers(value1, value2).toString();
}