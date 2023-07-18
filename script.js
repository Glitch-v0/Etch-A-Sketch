let size = 12;
function loadout(){
// Creates a custom-sized group of divs
const container = document.getElementById("container");
container.display = 'flex';
for(let i = 0; i < size; i++){
    const col = document.createElement("div");
    col.id = `column${i+1}`;
    col.class = 'col';
    console.log(col.id);
    col.style.display = "flex";
    for(let r = 0; r < size; r++){
        const row = document.createElement("div");
        row.id = (`c${i+1}r${r+1}`);
        row.className = "row";
        console.log(row.id);
        //row.textContent = `C${i+1}R${r+1}`;
        //row.textContent = `[...]`;
        col.appendChild(row); // append the row to the col
    }
    container.appendChild(col); // append the col to the body
}

// Get the div element by class name
var rows = document.getElementsByClassName("row");

// Set the width and height of each row
for (let i = 0; i < rows.length; i++) {
    let row = rows[i];
    row.style.width = `${window.innerWidth/size*0.45}px`;
    row.style.height = `${row.style.width}`;
  }

// Change color when moused over
for(let div of rows){
    div.addEventListener("mouseover", function(){
        console.log("Mouse is over the row");
        // Generate a random number between 0 and 16777215
        var randomNum = Math.floor(Math.random() * 16777215);

        // Convert the number to a hexadecimal string
        var randomColor = randomNum.toString(16);

        // Prepend a # sign to the string
        randomColor = "#" + randomColor;

        // Use the random color as the background color
        div.style.backgroundColor = randomColor;

})
    }}

// Size Button
const sizeButton = document.getElementById('size');
sizeButton.addEventListener("click", function(){
    size = parseInt(prompt("How big would you like your grid? (1-100)"));
    if(size > 100){
        size = 100
    }
    let currentGrid = document.querySelectorAll('.row, .col');
    currentGrid.forEach(item => {
        item.remove();
      });
    loadout();
})

// Reset Button
const resetButton = document.getElementById('reset');
resetButton.addEventListener("click", function(){
   let cells = document.getElementsByClassName("row");
   for(cell of cells){
    cell.style.backgroundColor = "white";
   }
})
loadout();