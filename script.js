function insert_Row() {
    //Write your code here
  const table = document.getElementById("sampleTable");

    // 2. Create a new row
    const newRow = table.insertRow(0);

    // 3. Create new cells and add text
    const nameCell = document.createElement("td");
    nameCell.textContent = "New Cell1";

    const ageCell = document.createElement("td");
    ageCell.textContent = "New Cell2";

    // 4. Append cells to the row
    newRow.appendChild(nameCell);
    newRow.appendChild(ageCell);

    // 5. Append the row to the table
   
  
}
