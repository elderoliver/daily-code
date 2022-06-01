const firstNumber = document.getElementById("firstNumber");
const secondNumber = document.getElementById("secondNumber");
const btnSum = document.getElementById("btnSum");
const result = document.getElementById("result");
const myTable = document.getElementById("myTable");


btnSum.addEventListener("click", () => {
    const number1 = parseFloat(firstNumber.value);
    const number2 = parseFloat(secondNumber.value);
    result.innerText = `The result is: ${number1 + number2}`;

    let row = myTable.insertRow(1);
    let colSum = row.insertCell(0);
    let colResult = row.insertCell(1);

    colSum.innerText = `${firstNumber.value} + ${secondNumber.value}`;
    colResult.innerText = `${number1 + number2}`; 
});
 