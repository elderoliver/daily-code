const firstNumber = document.getElementById("firstNumber");
const secondNumber = document.getElementById("secondNumber");
const btnSum = document.getElementById("btnSum");
const myTable = document.getElementById("myTable");

btnSum.addEventListener("click", () => {
    const number1 = parseFloat(firstNumber.value);
    const number2 = parseFloat(secondNumber.value);

    let row = myTable.insertRow(1);

    let colSum = row.insertCell(0);
    let colResult = row.insertCell(1);
    let colClean = row.insertCell(2); 
    
    let btnClean = document.createElement('input');
    btnClean.type = 'button';
    btnClean.className = 'btnClean'; 
    btnClean.value = 'X'; 
    btnClean.setAttribute('onclick', 'alert("are you sure?")');

    colSum.innerText = `${firstNumber.value} + ${secondNumber.value}`;
    colResult.innerText = `${number1 + number2}`; 
    colClean.appendChild(btnClean); 

    firstNumber.value = "";
    secondNumber.value = "";
});
 