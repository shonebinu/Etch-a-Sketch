

let grid_size = 16;

const container = document.querySelector('#grid-container');

const putSquare = (grid_size) => {
    for (let i = 0; i < grid_size; i++) {
        const newHorizontal = document.createElement('div');
        newHorizontal.style.cssText = `width: 100%; height: ${70/grid_size}vh; display: flex;`
        container.appendChild(newHorizontal);
        for (let j = 0; j < grid_size; j++) {
            const newTinySquare = document.createElement('div');
            newTinySquare.style.cssText = `height: 100%; width: ${70/grid_size}vh;`
            newTinySquare.classList.add('tinySquare');
            newHorizontal.appendChild(newTinySquare);
        };
    };
};

function findSquare() {

const tinySquare = document.querySelectorAll('.tinySquare');


tinySquare.forEach(tiny => {
    tiny.addEventListener('mouseover', () => {
        tiny.style.backgroundColor = `#cf6679`;
    });
});

};

putSquare(grid_size);
findSquare();


const button = document.querySelector('#grid');

button.addEventListener('click', () => {

    let newGridSize = prompt('How many squares do you want in one side of the box? Enter a number below 100.');
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    };
    if (newGridSize > 100) newGridSize = 100;
    putSquare(newGridSize);


    findSquare();

});

const liveGrid = (size) => {


    const liveGridSize = document.querySelector('#liveGridSize');
    liveGridSize.textContent = `${size} × ${size}`;

};

liveGrid(grid_size);