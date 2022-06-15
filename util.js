function insertRowOnTable(myTable,number1,number2) {
    let row = myTable.insertRow(1);
    
    const rowId = myTable.rows.length; 
    row.setAttribute("id",`row${rowId}`);

    let colSum = row.insertCell(0);
    let colResult = row.insertCell(1);
    let colEdit = row.insertCell(2); 
    let colClean = row.insertCell(3); 
    
    let btnEdit = createTableButton(row,'edit');
    let btnClean = createTableButton(row,'delete'); 

    colSum.innerText = `${firstNumber.value} + ${secondNumber.value}`;
    colResult.innerText = `${number1 + number2}`;
    colEdit.appendChild(btnEdit); 
    colClean.appendChild(btnClean); 

    sumAllItems();
}

function createTableButton(rowId, operation) {
    let btnClean = document.createElement('input');
    btnClean.type = 'button';
    btnClean.className = 'btnClean'; 
    
    const idRow = rowId.getAttribute("id");
    if (operation === 'delete'){
        btnClean.value = 'X'; 
        btnClean.setAttribute('onclick', 'deleteRow("'+idRow+'")');
    } else if (operation === 'edit'){
        btnClean.value = 'edit'; 
        btnClean.setAttribute('onclick', 'editRow("'+idRow+'")');
    }
    
    return btnClean;
}

function cleanFields(){
    firstNumber.value = "";
    secondNumber.value = "";
}

function editRow(rowIdEdit){
    const boxEdit = document.getElementsByClassName("box_edit_item")[0];
    boxEdit.setAttribute("id", rowIdEdit);

    const element = document.querySelector('.box_edit_item');
    element.style.setProperty('visibility', 'visible');

    const sumString = myTable.rows[rowIdEdit].cells.item(0).innerText;

    number1Edit.value = sumString.split("+")[0].trim();
    number2Edit.value = sumString.split("+")[1].trim();
}

function deleteRow(rowIdDelete) {
    document.getElementById(rowIdDelete).remove(); 
    sumAllItems();
};

function sumAllItems() {
    let sum = 0.0;
    for(let i = 1;i < myTable.rows.length; i++){
        sum = sum + parseFloat(myTable.rows[i].cells.item(1).innerText); 
    }
    finalSum.innerText = `Total: ${sum}`;
}

function isNumber(value){
    if (isNaN(value)){
        return false;
    }
    return typeof value == 'number';
}