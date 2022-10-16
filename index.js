
let grid_size = 100;

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

putSquare(grid_size);

const tinySquare = document.querySelectorAll('.tinySquare');


tinySquare.forEach(tiny => {
    tiny.addEventListener('mouseover', () => {
        tiny.style.backgroundColor = `#cf6679`;
    });
});

const button = document.querySelector('#grid');


