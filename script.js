let numberOfRows = 16;
let initialNumber = 0;
const blackColor = "rgb(0,0,0)";
let randomColor = "";
let colorBtnClicked = false;
// Function who create square divs

function showGrid(rows) {
  for (let i = 1; i < rows ** 2 + 1; i++) {
    const divGrid = document.createElement("div");
    divGrid.id = `grid${i}`;
    divGrid.className = `grid-class`;
    const container = document.querySelector(".container");
    divGrid.textContent = "";
    divGrid.style.cssText = `height : ${10 / rows}cm; width : ${
      10 / rows
    }cm; outline : 1px solid; display: flex; align-content: center;\
                            justify-content: center; align-items: center;`;
    container.style.cssText = `display : flex; flex-direction : row; flex-wrap : wrap; \
                            border : 2px solid black; height: 10cm; width : 10cm;\
                            align-content : flex-start;  box-shadow: 0px 0px 5px 3px rgba(0, 0, 0, 0.3);`;
    container.appendChild(divGrid);
    initialNumber += 1;
  }
}

// Function who let the user choose the number of rows (max = 100)

function chooseRow() {
  const domButton = document.getElementById("select-row");
  domButton.addEventListener("click", () => {
    console.log(initialNumber);
    numberOfRows = prompt("Choose the number of rows (max = 100) :");
    const checkValue = Number(numberOfRows);

    if (numberOfRows === null) {
      numberOfRows = 16;
    }
    if (!Number.isInteger(checkValue) || checkValue < 0 || checkValue > 100) {
      alert("Must be a integer between 0 and 100.");
      numberOfRows = 16;
    }

    for (let i = 1; i < initialNumber + 1; i++) {
      const remove = document.querySelector(`#grid${i}`);
      remove.parentNode.removeChild(remove);
    }
    initialNumber = 0;
    showGrid(numberOfRows);
    mouseover();
  });
}

// Function to select the color
function colorSelect() {
  const colorBtn = document.getElementById("select-color");
  colorBtn.addEventListener("click", () => {
    colorBtnClicked = !colorBtnClicked;
    randomRBG();
  });
}

//Function to reset the grid color
function resetColor() {
  const resetBtn = document.getElementById("reset-btn");
  resetBtn.addEventListener("click", () => {
    for (let i = 1; i < numberOfRows ** 2 + 1; i++) {
      const allGrid = document.querySelector(`#grid${i}`);
      allGrid.style.cssText = `height : ${10 / numberOfRows}cm; width : ${
        10 / numberOfRows
      }cm; outline : 1px solid; display: flex; align-content: center;\
            justify-content: center; align-items: center; background-color : rgb(255, 255, 255)   };`;
    }
  });
}

// Function who change the color of the grid on mouseover
function mouseover() {
  for (let i = 1; i < numberOfRows ** 2 + 1; i++) {
    const allGrid = document.querySelector(`#grid${i}`);
    allGrid.addEventListener("mouseenter", () => {
      randomRBG();
      allGrid.style.cssText = `height : ${10 / numberOfRows}cm; width : ${
        10 / numberOfRows
      }cm; outline : 1px solid; display: flex; align-content: center;\
            justify-content: center; align-items: center; background-color : ${
              colorBtnClicked ? randomColor : blackColor
            };`;
    });
  }
}

// Function who generate random RBG color

function randomRBG() {
  let randomNum1 = Math.floor(Math.random() * 255);
  let randomNum2 = Math.floor(Math.random() * 255);
  let randomNum3 = Math.floor(Math.random() * 255);
  randomColor = `rgb(${randomNum1}, ${randomNum2}, ${randomNum3})`;
}

showGrid(numberOfRows);
resetColor();
chooseRow();
colorSelect();
mouseover();
