# Mainly syntaxes used in the project

## HTML 5

## Allowing the use of media queries in the CSS file
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

## Crating a table
```html
<table>
```
## Creating a line in the table
```html
<tr>
```
## Creating a header column
```html
<th>
```
## Creating a normal column
```html
<td>
```

## JavaScript

## Adding rows in a table 
```JavaScript
let row = myTable.insertRow(1);
```
## Adding columns in a row table
```JavaScript
let colSum = row.insertCell(0);
```
## Writing something on the new column (example)
```JavaScript
colSum.innerText = `${firstNumber.value} + ${secondNumber.value}`;
```

## Creating a button dynamically
```JavaScript
let btnClean = document.createElement('input');
btnClean.type = 'button';
btnClean.className = 'btnClean'; 
btnClean.value = 'X'; 
btnClean.setAttribute('onclick', 'alert("are you sure?")');
```

## Adding this button into a td
```JavaScript
colClean.appendChild(btnClean); 
```

## Get a array of elements
```JavaScript
myTable.getElementsByTagName("tr");
```

## Get and Set an attribute 
```JavaScript
row.setAttribute("id",`row${rowId}`);
const idRow = rowIdDelete.getAttribute("id");
```

## how to get the number of lines from a table and access the cell content in the table
```JavaScript
    for(let i = 1;i < myTable.rows.length; i++){
        sum = sum + parseFloat(myTable.rows[i].cells.item(1).innerText); 
    }
```

## CSS

## how to put a div in the bottom of the viewport
```css
    .footer {
        position: fixed;
        height: 5%;
        bottom: 0;
        width: 100%;
        background-color: #4BAB3C;
    }
```
