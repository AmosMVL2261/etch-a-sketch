let mode = "black";
let temporalMode = "black";
let totalRows = 50;
let totalColumns = 50;
const container = document.getElementById("gridDiv");

//Added class gridbox to divs just for css, while, id is for individual color change
function createGrid(rows, columns){
    container.style.setProperty('--rows', rows);
    container.style.setProperty('--columns', columns);
    for (let i = 0; i < (rows * columns); i++) {
      let cell = document.createElement("div");
      container.appendChild(cell).className = "gridBox";
      container.appendChild(cell).setAttribute("id",i.toString());
    };
}

createGrid(totalRows,totalColumns);

//Create addEventListener for each div created
let items = document.getElementsByClassName('gridBox');
for (var i = 0; i < items.length; i++) {
  items[i].addEventListener('mouseover', selection);
}

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

const buttonBlack = document.getElementById("buttonBlack");
const buttonColor = document.getElementById("buttonColor");
const buttonReset = document.getElementById("buttonReset");
buttonBlack.addEventListener("click",bBlack);
buttonColor.addEventListener("click",bColor);
buttonReset.addEventListener("click",bReset);