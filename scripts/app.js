const container = document.getElementById("gridDiv");

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

var items = document.getElementsByClassName('gridBox');
for (var i = 0; i < items.length; i++) {
  items[i].addEventListener('mouseover', paintBlack);
}

function paintBlack() {
    const box =document.getElementById(this.id);
    box.style.backgroundColor="black";
}
