# Mainly syntaxes used in the project

## Allowing the use of media queries in the CSS file
```
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```
## Crating a table
```
<table>
```
## Creating a line in the table
```
<tr>
```
## Creating a header column
```
<th>
```
## Creating a normal column
```
<td>
```

## Adding rows in a table 
```
let row = myTable.insertRow(1);
```
## Adding columns in a row table
```
let colSum = row.insertCell(0);
```
## Writing something on the new column (example)
```
colSum.innerText = `${firstNumber.value} + ${secondNumber.value}`;
```

## Creating a button dynamically
```
let btnClean = document.createElement('input');
btnClean.type = 'button';
btnClean.className = 'btnClean'; 
btnClean.value = 'X'; 
btnClean.setAttribute('onclick', 'alert("are you sure?")');
```

## Adding this button into a td
```
colClean.appendChild(btnClean); 
```

## Get a array of elements
```
myTable.getElementsByTagName("tr");
```

## Get and Set an attribute 
```
row.setAttribute("id",`row${rowId}`);
const idRow = rowIdDelete.getAttribute("id");
```

## how to put a div in the bottom of the viewport
```
    .footer {
        position: fixed;
        height: 5%;
        bottom: 0;
        width: 100%;
        background-color: #4BAB3C;
    }
```

## how to get the number of lines from a table and access the cell content in the table
```
    for(let i = 1;i < myTable.rows.length; i++){
        sum = sum + parseFloat(myTable.rows[i].cells.item(1).innerText); 
    }
```