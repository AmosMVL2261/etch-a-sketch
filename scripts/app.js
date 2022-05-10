const mode = "multicolor";
const container = document.getElementById("gridDiv");

//we add class gridbox just for css, while, id is for individual color change
function createGrid(columns, rows){
    container.style.setProperty('--rows', rows);
    container.style.setProperty('--columns', columns);
    for (let i = 0; i < (rows * columns); i++) {
      let cell = document.createElement("div");
      container.appendChild(cell).className = "gridBox";
      container.appendChild(cell).setAttribute("id",i.toString());
    };
}

createGrid(10,10);

//Create addEventListener for each div created
var items = document.getElementsByClassName('gridBox');
for (var i = 0; i < items.length; i++) {
  items[i].addEventListener('mouseover', selection);
}

//Default option
function paintBlack(identifier) {
    const box=document.getElementById(identifier);
    box.style.backgroundColor="black";
}

//Random number from 0 to 255 (inclusive), for rgba codes
function getRandomNumber(){
    let min = 0;
    let max = 255;
    return (Math.random()*(max-min+1)+min);
}

//Random rgb background color
function multiColor(identifier) {
    const box=document.getElementById(identifier);
    let red = getRandomNumber();
    let green = getRandomNumber();
    let blue = getRandomNumber();
    box.style.backgroundColor='rgb(' + red + ',' + green + ',' + blue + ')';
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
        default:
            paintBlack(this.id);
    }
}