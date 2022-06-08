const firstNumber = document.getElementById("firstNumber");
const secondNumber = document.getElementById("secondNumber");
const btnSum = document.getElementById("btnSum");
const deleteRowTest = document.getElementById("deleteRowTest");
const myTable = document.getElementById("myTable");

btnSum.addEventListener("click", () => {
    const number1 = parseFloat(firstNumber.value);
    const number2 = parseFloat(secondNumber.value);
    insertRowOnTable(myTable,number1,number2); 
    cleanFields();
});