console.log('our javascript file is connected');

// step 1: grab html element:
const plusBtn = document.querySelector('#plus-btn');
const minusBtn = document.querySelector('#minus-btn');
const resetBtn = document.getElementById('reset-btn');
const counterText = document.getElementById('counter');

const themeBtns = document.querySelectorAll('.theme-buttons');

// step 2: write out cb
let count = 0;

function increase() {
    count++;
    console.log(count);
    counterText.textContent = count;
}

function decrease() {
    count--;
    console.log(count);
    counterText.textContent = count;
}

function reset() {
    count = 0;
    console.log(count);
    counterText.textContent = count;
}

function selectTheme(event) {
    console.log(event.target);
    let theme = event.target.textContent;
    document.querySelector('body').className = theme;
    document.querySelector('main').className = theme;

    const buttons = document.querySelectorAll('button');

    for(let i = 0; i < buttons.length; i++){
        buttons[i].className = theme;
    }
}


// step 3: combine everthing together using event listener
plusBtn.addEventListener('click', increase);
minusBtn.addEventListener('click', decrease);
resetBtn.addEventListener('click', reset);

for(let i = 0; i < themeBtns.length; i++){
    themeBtns[i].addEventListener('click', selectTheme);
}