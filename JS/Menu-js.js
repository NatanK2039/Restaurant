let total_cost = 0;
let total_calories = 0;

function drinksselected() { 
  appendtext("Cocktails", 7,110 ) //appendtext function is called with the appropriate parameters
  saveTableToLocalStorage() //save to local storage function is called with appropriate parameters
}
//many functions below are the same as above
function wodkaselected() {
  appendtext("vodka", 20, 230)
  saveTableToLocalStorage()
}

function tiramisuselected() {
  appendtext("Tiramisu", 7, 500)
  saveTableToLocalStorage()
}

function karpatkaselected() {
  appendtext("Karpatka", 6, 300)
  saveTableToLocalStorage()
}

function juiceselected() {
  appendtext("Juice", 4, 60)
  saveTableToLocalStorage()
}

function tymbarkselected() {
  appendtext("Tymbark", 5, 45)
  saveTableToLocalStorage()
}

function schabselected() {
  appendtext("Schab", 15, 1200)
  saveTableToLocalStorage()
}

function bigosselected() {
  appendtext("Bigos", 10, 400)
  saveTableToLocalStorage()
}

function zurekselected() {
  appendtext("Zurek", 13, 350) 
  saveTableToLocalStorage()
}

function pierogiruskieselected() {
  appendtext("Pierogi Ruskie", 15, 500)
  saveTableToLocalStorage()
}

function pierogikapustaselected() {
  appendtext("Pierogi with cabbage", 15, 500)
  saveTableToLocalStorage()
}

let rowCount = 1; // initialize row count variable

function appendtext(choicesText, costText, caloriesText) {
  const table = document.querySelector("table"); //find table element

  const newRow = document.createElement("tr"); //create row

  const choicesCell = document.createElement("td"); //create field
  const costCell = document.createElement("td"); //create field
  const caloriesCell = document.createElement("td"); //create field 

  choicesCell.textContent = choicesText; //set text of field 
  costCell.textContent = costText; //set text of field 
  caloriesCell.textContent = caloriesText; //set text of field 

  newRow.appendChild(choicesCell); //append field to row
  newRow.appendChild(costCell); //append field to row
  newRow.appendChild(caloriesCell); //append field to row

  // event listener - rows are removed when clicked 
  newRow.addEventListener("click", function() {
    this.parentNode.removeChild(this);
    saveTableToLocalStorage()
  });

  // Append row element to the table 
  table.appendChild(newRow);
}




function saveTableToLocalStorage() {

  const table = document.querySelector('table'); //find table


  const rows = Array.from(table.querySelectorAll('tr')).slice(1); //get each row (except the header row)

  const data = []; //create array to store data

  const columnHeadings = Array.from(table.querySelectorAll('th')).map(th => th.textContent); //get column headings from header row

  // Loop through rows and extract data from each field
  rows.forEach(row => { //for each row
    const cells = Array.from(row.querySelectorAll('td')); //find fields 
    const rowData = {}; //create array 
    cells.forEach((cell, index) => { //for each field/cell
      const heading = columnHeadings[index]; // get heading from columnHeadings created previously
      rowData[heading] = cell.textContent; // get the row data under that heading
    });
    data.push(rowData); //add to rowdata
  });

  // Save the data to Local Storage
  localStorage.setItem('tableData', JSON.stringify(data)); //save in Json
}


function loadTableFromLocalStorage() {
  const table = document.querySelector('table'); //find table

  const dataString = localStorage.getItem('tableData'); //find data in local storage

  if (dataString) { //if dataString exists
    const data = JSON.parse(dataString); //the json saved in local storage is read and set to the data variable
    data.forEach(rowData => { // for each element in rowdata
      const newRow = document.createElement('tr'); //new row created 
      Object.values(rowData).forEach(value => { // for each value in row in rowdata
        const newCell = document.createElement('td'); // create new field
        newCell.textContent = value; //save field text
        newRow.appendChild(newCell); // create the row
      });
      table.appendChild(newRow); // add the new row to table 
      newRow.addEventListener("click", (event) => { // add event listener which removes the row on click then saves table to local storage
        if (event.target.tagName === "TD") { 
          const row = event.target.parentNode;
          row.parentNode.removeChild(row);
          saveTableToLocalStorage();
        }
      });
    });
  }
}


// call on load
window.addEventListener('load', loadTableFromLocalStorage);


function removeTableRow() {
  const table = document.querySelector("#Your-choices table"); // find table
  table.addEventListener("click", (event) => { //event listener to remove the row on click
    if (event.target.tagName === "TD") {
      const row = event.target.parentNode;
      row.parentNode.removeChild(row);
    }
  });
  saveTableToLocalStorage() //save to local storage 
}




//   const choices = document.querySelectorAll('.choice');
//   choices.forEach(choice => {
//     const heading = choice.querySelector('.column-heading');
//     let text;
//     switch (heading.innerText) {
//       case 'Choices':
//         text = choicesText;
//         break;
//       case 'Cost':
//         text = costText;
//         break;
//       case 'Calories':
//         text = caloriesText;
//         break;
//     }
//     if (text) {
//       let paragraph = choice.querySelector(`#${heading.innerText.toLowerCase()}-paragraph`);
//       if (!paragraph) {
//         paragraph = document.createElement('p');
//         paragraph.setAttribute('id', `${heading.innerText.toLowerCase()}-paragraph`);
//         choice.appendChild(paragraph);
//       }
//       paragraph.innerText = text;
//     }
//   });
//   savechoicestolocalstorage()
// }

