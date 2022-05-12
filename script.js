const firstNumber = document.getElementById("firstNumber");
const secondNumber = document.getElementById("secondNumber");
const btnSum = document.getElementById("btnSum");
const result = document.getElementById("result");

btnSum.addEventListener("click",() => {
    const number1 = parseFloat(firstNumber.value);
    const number2 = parseFloat(secondNumber.value);
    result.innerText = `The result is: ${number1 + number2}`;
});
 