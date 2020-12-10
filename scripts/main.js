const container = document.querySelector('#container');

const boxGrid = document.createElement('div');
boxGrid.classList.add('boxGrid');

const boxButtons = document.createElement('div');
boxButtons.classList.add('boxButons');

function makeGrid(sizeGrid){
    if(sizeGrid <= 100){
        for(var i = 0; i < sizeGrid * sizeGrid; i++){
            const cellGrid = document.createElement('div');
            cellGrid.classList.add('cellGrid');
            boxGrid.appendChild(cellGrid);
        }
    } else {
        alert('Input wrong. Please choose a size between 0 - 100');
        return;
    }
}

function colourChange(){
    document.querySelectorAll('.cellGrid').forEach((div) =>{
        div.addEventListener('mouseenter', e => {
            div.setAttribute('style', 'background : pink;');
        });
        div.addEventListener('mouseleave', e => {
            div.setAttribute('style', 'background : pink; ');
        });
    
    });
};

function removeGrid(){
    document.querySelectorAll('.cellGrid').forEach(function(a){
        a.remove();
    });
};

const clearBtn = document.querySelector('#clear');
function clear(){
    clearBtn.addEventListener('click', () => {
        document.querySelectorAll('.cellGrid').forEach((cell) =>{
        cell.setAttribute('style', 'background : white;' );
        });
    });
};

const resetBtn = document.querySelector('#reset');
resetBtn.addEventListener('click',() => {
    removeGrid();
    var choice = prompt('Choose the size of your grid (0-100)');
    makeGrid(choice);
    boxGrid.style.setProperty('grid-template-columns', 'repeat(' + choice + ', auto)');
    colourChange();
});

boxButtons.appendChild(resetBtn);
boxButtons.appendChild(clearBtn);
container.appendChild(boxButtons);
container.appendChild(boxGrid);

// Initial grid (by default)
makeGrid(16);
colourChange();
clear();
