var showMe = document.getElementById('show-me');
var clickMe = document.getElementById('click-me');

const changeColor = () => {
    var hexColor = ['a', 'b', 'c', 'e', 'd', 'f', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    let hex = '#';
    for(let i = 0 ; i < 6; i++) {
        let index = Math.floor(Math.random()*hexColor.length);
        hex += hexColor[index];
    }
    document.body.style.background = hex;
    showMe.innerHTML = hex;
}

clickMe.addEventListener('click', changeColor);

/// no