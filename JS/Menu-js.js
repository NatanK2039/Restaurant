let total_cost = 0;
let total_calories = 0;

function drinksselected() {
  appendtext("Drinks", 20, 50)
  saveTableToLocalStorage()
}

function wodkaselected() {
  appendtext("Wodka", 30, 30)
  saveTableToLocalStorage()
}

function appendtext(choicesText, costText, caloriesText) {
  // Get a reference to the table element
  const table = document.querySelector("table");

  // Create a new row element
  const newRow = document.createElement("tr");

  // Create three new cell elements
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

