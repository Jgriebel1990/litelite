//variables
const resetBtn = document.querySelector('#reset');
const boxes = document.querySelectorAll('.box');

//eventlisteners
boxes.forEach(function(box, index){
    box.addEventListener('click', toggleRed);
});
resetBtn.addEventListener('click', clearGrid);

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