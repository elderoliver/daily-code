function insertRowOnTable(myTable,number1,number2) {
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

function cleanFields(){
    firstNumber.value = "";
    secondNumber.value = "";
}

function deleteRow(rowIdDelete) {
    document.getElementById(rowIdDelete).remove(); 
};