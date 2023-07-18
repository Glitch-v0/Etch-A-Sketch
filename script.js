// Creates a 16x16 group of divs
const container = document.getElementById("container");
container.display = 'flex';
for(let i = 0; i < 16; i++){
    const col = document.createElement("div");
    col.id = `column${i+1}`;
    console.log(col.id);
    col.style.display = "flex";
    for(let r = 0; r < 16; r++){
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

// Add the event listener to the div element
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
    }