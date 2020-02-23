var colors = ['yellow', 'yellowgreen', 'violet', 'teal', 'tomato','turquoise'];

var clickMeButton = document.getElementById('click-me');

const changeColor = () => {
    var colorIndex = parseInt(Math.random() * colors.length+1);
    document.body.style.background = colors[colorIndex];
};

clickMeButton.addEventListener('click', changeColor);




