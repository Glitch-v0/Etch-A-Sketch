// Creates a 16x16 group of divs
const container = document.getElementById("container");
for(let i = 0; i < 16; i++){
    const col = document.createElement("div");
    col.id = `column${i+1}`;
    console.log(col.id);
    col.style.display = "flex";
    for(let r = 0; r < 16; r++){
        const row = document.createElement("div");
        row.id = (`c${i+1}r${r+1}`);
        console.log(row.id);
        row.textContent = `${i+1}`;
        col.appendChild(row); // append the row to the col
    }
    container.appendChild(col); // append the col to the body
}