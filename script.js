let numberOfRows = 16;
let initialNumber = 0;
let randomColor = '';

// Function who create square divs

function showGrid (rows) {

    for (let i = 1; i < ((rows **2) + 1); i++) {
    const divGrid = document.createElement('div');
    divGrid.id = `grid${i}`;
    const container = document.querySelector('.container');
    divGrid.textContent = '';
    divGrid.style.cssText = `height : ${16 / rows}cm; width : ${16 / rows}cm; outline : 1px solid; display: flex; align-content: center;\
                            justify-content: center; align-items: center;`;
    container.style.cssText = `display : flex; flex-direction : row; flex-wrap : wrap; \
                            border : 2px solid blue; height: 16cm; width : 16cm;\
                            align-content : flex-start;`;
    container.appendChild(divGrid);
    initialNumber += 1
    };
};

// Function who let the user choose the number of rows (max = 100)

function chooseRow () {
    const domButton = document.querySelector('button');
    domButton.addEventListener('click', () => {
        console.log(initialNumber)
        numberOfRows = prompt('Choose the number of rows (max = 100) :');
        if (numberOfRows > 100) {
            alert('Max number of row = 100 \nTry again !');
            numberOfRows = 16;
        };
        for (let i = 1; i < (initialNumber  + 1); i++) {
            const remove = document.querySelector(`#grid${i}`);
            remove.parentNode.removeChild(remove);
        };
        initialNumber = 0;
        showGrid(numberOfRows);
        mouseover();
        
    });
};


// Function who change the color (in black) of the grid on mouseover
function mouseover () {
    for (let i = 1; i < ((numberOfRows**2)+1); i++) {
        const allGrid = document.querySelector(`#grid${i}`);
        allGrid.addEventListener('mouseenter', () => {
            randomRBG();
            allGrid.style.cssText = `height : ${16 / numberOfRows}cm; width : ${16 / numberOfRows}cm; outline : 1px solid; display: flex; align-content: center;\
            justify-content: center; align-items: center; background-color : ${randomColor};`;
            
    })
}};

// Function who generate random RBG color

function randomRBG () {
    let randomNum1 = Math.floor((Math.random() * 255));
    let randomNum2 = Math.floor((Math.random() * 255));
    let randomNum3 = Math.floor((Math.random() * 255));
    randomColor =`rgb(${randomNum1}, ${randomNum2}, ${randomNum3})`;
}


showGrid(numberOfRows);
chooseRow();
mouseover();

