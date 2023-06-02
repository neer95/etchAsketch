const main = document.getElementById("main");
const reset = document.getElementById("reset");
let gridSize = 16;
let squares = [];

/**
 * Create a 16X16 grid using the for loop.
 */
for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
        let square = document.createElement("div");
        main.appendChild(square);
        square.classList.add("square");
        square.addEventListener("mouseenter", changeColor);
        squares.push(square);
    }
}

// reset button
reset.addEventListener("click", resetButton);

// change background color by hovering over the target element
function changeColor(e) {
    let targetSquare = e.target;
    targetSquare.classList.add("black");
}

console.log(squares);

// Click to remove .black class from the element
function resetButton() {
    squares.forEach((item) => {
        item.classList.remove("black");
    });
}
