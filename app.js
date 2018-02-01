//variables
const resetBtn = document.querySelector('#reset');
const boxes = document.querySelectorAll('.box');
const gridSizeForm = document.querySelector('#grid-size');

//eventlisteners
boxes.forEach(function(box, index){
    box.addEventListener('click', toggleRed);
});
resetBtn.addEventListener('click', clearGrid);

gridSizeForm.addEventListener('submit', changeGrid);

//functions

function toggleRed(e){
    const element = e.target;
    element.classList.toggle('red');
}

function clearGrid(e){
    boxes.forEach((box, index) => {
        box.classList.remove('red');
    });
}

function changeGrid(e){
    e.preventDefault();
    const gridSizeValue = +gridSizeForm.querySelector('input:checked').value;
    console.log(e);
}