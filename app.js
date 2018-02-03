//variables
const resetBtn = document.querySelector('#reset');
const gridSizeForm = document.querySelector('#grid-size');
const main = document.querySelector('main');
const colorPicker = document.querySelector('#pick');

//eventlisteners
resetBtn.addEventListener('click', clearGrid);
gridSizeForm.addEventListener('submit', changeGrid);



//initialized or started
changeGrid();
//functions

function changeBoxColor(e){
    const element = e.target;
    if(element.style.backgroundColor){ //element = whatever was clicked (where the event originated)
        element.style.backgroundColor = '';
    } else{
        element.style.backgroundColor = colorPicker.value;
    }
    
}

function clearGrid(e){
    const boxes = document.querySelectorAll('.box');
    boxes.forEach((box, index) => {
        box.style.backgroundColor = '';
    });
}

function changeGrid(e){
    if(e){
        e.preventDefault();
    }
    const gridSizeValue = +gridSizeForm.querySelector('input:checked').value;
    const grid = makeGrid(gridSizeValue);
    //set the main to the grid
    main.innerHTML = ''; // this clears the main area
    grid.forEach((row) => {
        main.appendChild(row);
    });

}


function makeGrid(size){
    const rows = [];
    for(let i = 0; i < size; i += 1){
        //make the grid
        //make a div with class of row
        const row = document.createElement('div');
        row.classList.add('row');
        //make a div with class col-md-12 inside of row
        const col = document.createElement('div');
        col.classList.add('col-md-12');
        row.appendChild(col);
        //make 6 divs with class of box inside of col-md-12
        for(let i = 0; i < size; i += 1){
            const box = document.createElement('div');
            box.classList.add('box');
            box.addEventListener('click', changeBoxColor); 
            col.appendChild(box);
        }
        rows.push(row);
        //copy and pasted 6 times
    }

    return rows;
}
