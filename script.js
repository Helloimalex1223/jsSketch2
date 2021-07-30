let count = 4;
let chooseColor;
let sq;


//adds event listeners to the various buttons
let clearButton = document.querySelector(".clear");
clearButton.addEventListener("click", () => {
    clearSq();
})

let resizeButton = document.querySelector(".resize");
resizeButton.addEventListener("click", () =>{
    resizeGrid();
})

let colorRandom = document.querySelector(".randColor");
colorRandom.addEventListener("click", () => {
    chooseRandomColor();
})

let colorPickButton = document.querySelector("#colorpicker");
colorPickButton.addEventListener("change", () => {
    chooseColor = colorPickButton.value;
});
chooseColor = colorPickButton.value;


//FUNCTIONS

//creates divs of squares based on how many you input
//sets height and width in relation to the parent div
//attaches event listeners and changes colors of squares based on preference
function createGrid(){
    let sqSelect = document.querySelector("#squares");
    for (let i = 0; i < (count * count); i++){
    sq = document.createElement("div");
    chooseColor = "blue"
    sq.style.height = "400"/ + count +"px";
    sq.style.width = "400"/ + count + "px";
    sq.addEventListener("mouseenter", function(e){
        e.target.style.backgroundColor = chooseColor;
    });
    sq.classList.add("etchSquare");
    sqSelect.appendChild(sq);
    }
}

//resets the grid
function clearSq() {
    let sqAll = document.querySelectorAll(".etchSquare");
    for (let j = 0; j < sqAll.length; j++){
    sqAll[j].style.backgroundColor = "white";
    }
}

//removes the old grid
function removeOldGrid(){
    for (let k = 0; k < (count * count); k++){
        let remove = document.querySelector(".etchSquare");
        if(remove === null){
            return;
        }
        else{
            remove.parentNode.removeChild(remove);
        }
    }
}
//creates new grid with the input size parameters
function resizeGrid(){
    count = prompt("How large do you want the grid?");
    removeOldGrid();
    createGrid();
}

//chooses random color
function chooseRandomColor(){
    chooseColor = "#" + Math.floor(Math.random()*16777215).toString(16);
}

createGrid();