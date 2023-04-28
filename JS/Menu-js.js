let total_cost = 0;
let total_calories = 0;

function drinksselected() {
  appendtext("Cocktails", 7,110 )
  saveTableToLocalStorage()
}

function wodkaselected() {
  appendtext("Wodka", 20, 230)
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
  // Get a reference to the table element
  const table = document.querySelector("table");

  // Create a new row element and set its ID to the current row count
  const newRow = document.createElement("tr");

  // Create three new cell elements for the choices, cost, and calories data
  const choicesCell = document.createElement("td");
  const costCell = document.createElement("td");
  const caloriesCell = document.createElement("td");

  // Set the text content of each cell to the corresponding parameter value
  choicesCell.textContent = choicesText;
  costCell.textContent = costText;
  caloriesCell.textContent = caloriesText;

  // Append the new cells to the new row element
  newRow.appendChild(choicesCell);
  newRow.appendChild(costCell);
  newRow.appendChild(caloriesCell);

  // Add a click event listener to the new row that removes it when clicked
  newRow.addEventListener("click", function() {
    this.parentNode.removeChild(this);
    saveTableToLocalStorage()
  });

  // Append the new row element to the table element
  table.appendChild(newRow);
}




function saveTableToLocalStorage() {
  // Get the table element
  const table = document.querySelector('table');

  // Get the rows of the table (excluding the header row)
  const rows = Array.from(table.querySelectorAll('tr')).slice(1);

  // Create an array to hold the table data
  const data = [];

  // Get the column headings from the table header
  const columnHeadings = Array.from(table.querySelectorAll('th')).map(th => th.textContent);

  // Loop through the rows and extract the data from each cell
  rows.forEach(row => {
    const cells = Array.from(row.querySelectorAll('td'));
    const rowData = {};
    cells.forEach((cell, index) => {
      const heading = columnHeadings[index];
      rowData[heading] = cell.textContent;
    });
    data.push(rowData);
  });

  // Save the data to Local Storage
  localStorage.setItem('tableData', JSON.stringify(data));
}


function loadTableFromLocalStorage() {
  // Get the table element
  const table = document.querySelector('table');

  // Get the data from Local Storage
  const dataString = localStorage.getItem('tableData');

  // If there is data, parse it and add it to the table
  if (dataString) {
    const data = JSON.parse(dataString);
    data.forEach(rowData => {
      const newRow = document.createElement('tr');
      Object.values(rowData).forEach(value => {
        const newCell = document.createElement('td');
        newCell.textContent = value;
        newRow.appendChild(newCell);
      });
      table.appendChild(newRow);
      newRow.addEventListener("click", (event) => {
        if (event.target.tagName === "TD") {
          const row = event.target.parentNode;
          row.parentNode.removeChild(row);
          saveTableToLocalStorage();
        }
      });
    });
  }
}


// Add an event listener to call the loadTableFromLocalStorage function when the page is loaded
window.addEventListener('load', loadTableFromLocalStorage);


function removeTableRow() {
  const table = document.querySelector("#Your-choices table");
  table.addEventListener("click", (event) => {
    if (event.target.tagName === "TD") {
      const row = event.target.parentNode;
      row.parentNode.removeChild(row);
    }
  });
  saveTableToLocalStorage()
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

