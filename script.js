const firstNumber = document.getElementById("firstNumber");
const secondNumber = document.getElementById("secondNumber");
const btnSum = document.getElementById("btnSum");
const deleteRowTest = document.getElementById("deleteRowTest");
const myTable = document.getElementById("myTable");

btnSum.addEventListener("click", () => {
    const number1 = parseFloat(firstNumber.value);
    const number2 = parseFloat(secondNumber.value);

    let row = myTable.insertRow(1);
    
    const rowId = myTable.getElementsByTagName("tr").length; 
    row.setAttribute("id",`row${rowId}`);

    let colSum = row.insertCell(0);
    let colResult = row.insertCell(1);
    let colClean = row.insertCell(2); 
    
    let btnClean = createTableButton(row); 

    colSum.innerText = `${firstNumber.value} + ${secondNumber.value}`;
    colResult.innerText = `${number1 + number2}`; 
    colClean.appendChild(btnClean); 

    cleanFields();
    
});

function cleanFields(){
    firstNumber.value = "";
    secondNumber.value = "";
}

function createTableButton(rowIdDelete) {
    let btnClean = document.createElement('input');
    btnClean.type = 'button';
    btnClean.className = 'btnClean'; 
    btnClean.value = 'X'; 
    const idRow = rowIdDelete.getAttribute("id");
    btnClean.setAttribute('onclick', 'deleteRow("'+idRow+'")');
    return btnClean;
}

function deleteRow(rowIdDelete) {
    document.getElementById(rowIdDelete).remove(); 
};
