let mode = "black";
let temporalMode = "black";
let totalRows = 30;
let totalColumns = 30;
const container = document.getElementById("gridDiv");
const dimension = document.getElementsByClassName("actualSize");

//Added class gridbox to divs just for css, while, id is for individual color change
function createGrid(rows, columns){
    container.style.setProperty('--rows', rows);
    container.style.setProperty('--columns', columns);
    for (let i = 0; i < (rows * columns); i++) {
      let cell = document.createElement("div");
      container.appendChild(cell).className = "gridBox";
      container.appendChild(cell).setAttribute("id",i.toString());
    };
    //Actual dimension section
    for (let i = 0; i < dimension.length; i++){
        dimension[i].innerText = totalColumns.toString();
    }
    dimension.i
    //Create addEventListener for each div created
    let items = document.getElementsByClassName('gridBox');
    for (let i = 0; i < items.length; i++) {
        items[i].addEventListener('mouseover', selection);
    }
}

//Initial grid
createGrid(totalRows,totalColumns);


//Default option
function paintBlack(identifier) {
    //If you clicked a button, you're not pointing nothing, so gets error. This prevent that error
    if(identifier!==undefined){
        const box=document.getElementById(identifier);
        box.style.backgroundColor="black";
    }
}

//Random number from 0 to 255 (inclusive), for rgba codes
function getRandomNumber(){
    let min = 0;
    let max = 255;
    return (Math.random()*(max-min+1)+min);
}

//Random rgb background color
function multiColor(identifier) {
    if(identifier!==undefined){
        const box=document.getElementById(identifier);
        let red = getRandomNumber();
        let green = getRandomNumber();
        let blue = getRandomNumber();
        box.style.backgroundColor='rgb(' + red + ',' + green + ',' + blue + ')';
    }
}


function paintWhite(){
    let items = document.getElementsByClassName('gridBox');
    for (var i = 0; i < items.length; i++) {
      items[i].style.backgroundColor="white";
    }
    console.log();
    mode = temporalMode; //Restore the last mode before erase
}

//User selection
function selection(){
    switch(mode){
        case "black":
            paintBlack(this.id);
            break;
        case "multicolor":
            multiColor(this.id);
            break;
        case "erase":
            paintWhite();
        default:
            paintBlack(this.id);
    }
}


function bBlack(){
    mode = "black";
    selection();
}
function bColor(){
    mode = "multicolor";
    selection();
}
function bReset(){
    temporalMode = mode; //conserve the actual mode before erase all
    mode = "erase";
    selection();
}

function changeGridSize(){
    let newSize = Number(window.prompt("New grid size:"));
    //Grid limited from 1 to 100
    if(newSize>0 && newSize<=100){
        totalRows = newSize;
        totalColumns = newSize;
        //Remove all old divs to create new later
        while (container.firstChild) {
            container.removeChild(container.lastChild);
        }
        createGrid(totalRows,totalColumns);
    }else{
        //If the user put an invalid number or a word, it doesn't create a new grid
        window.alert("Invalid input");
    }
}

const buttonBlack = document.getElementById("buttonBlack");
const buttonColor = document.getElementById("buttonColor");
const buttonReset = document.getElementById("buttonReset");
const gridSize = document.getElementById("newSize");
buttonBlack.addEventListener("click",bBlack);
buttonColor.addEventListener("click",bColor);
buttonReset.addEventListener("click",bReset);
gridSize.addEventListener("click",changeGridSize);