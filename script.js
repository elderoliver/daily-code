const firstNumber = document.getElementById("firstNumber");
const secondNumber = document.getElementById("secondNumber");
const btnSum = document.getElementById("btnSum");
const myTable = document.getElementById("myTable");
const finalSum = document.getElementById("finalSum");

btnSum.addEventListener("click", () => {
    try {
        const number1 = parseFloat(firstNumber.value);
        const number2 = parseFloat(secondNumber.value);
        
        if (isNumber(number1) && isNumber(number2)){
            insertRowOnTable(myTable,number1,number2); 
        } else {
            alert('Please insert two valid numbers!');
        }
        
        cleanFields();
    } catch (error) {
        alert(`Error: ${error}`);
    }
});
