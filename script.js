const firstNumber = document.getElementById("firstNumber");
const secondNumber = document.getElementById("secondNumber");
const btnSum = document.getElementById("btnSum");
const myTable = document.getElementById("myTable");
const finalSum = document.getElementById("finalSum");

const number1Edit = document.getElementById("number1Edit");
const number2Edit = document.getElementById("number2Edit");
const btnSaveEdit = document.getElementById("btnSaveEdit");

const boxEdit = document.getElementsByClassName("box_edit_item")[0];

const editBox = document.querySelector('.box_edit_item');



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

btnSaveEdit.addEventListener("click", () => {
    try {
        const number1 = parseFloat(number1Edit.value)
        const number2 = parseFloat(number2Edit.value);

        if (isNumber(number1) && isNumber(number2)){
            editBox.style.setProperty('visibility', 'hidden');
            const idItem = boxEdit.getAttribute("id");
            const currentRow = document.getElementById(idItem);
            currentRow.cells.item(0).innerText = `${number1} + ${number2}`;
            currentRow.cells.item(1).innerText = number1 + number2; 
            sumAllItems();
        } else {
            alert('Please insert two valid numbers!');
        }
    } catch(error){
        alert(`Error: ${error}`);
    }
});
