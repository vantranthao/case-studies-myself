var titleClick = document.getElementById('title');
titleClick.addEventListener('click', () => {
    location.href = 'https://www.google.com/'
});

titleClick.addEventListener('mouseover', () => {
    titleClick.style.color = 'gray';
});

titleClick.addEventListener('mouseout', () => {
    titleClick.style.color = 'white';
});

// count up and count down
var numCount = document.getElementById('numCount');
var decreaseButton = document.getElementById('decrease');
var increaseButton = document.getElementById('increase');
var result = document.getElementById('final-result');

let countNumber = 0;
decreaseButton.addEventListener('click', () => {
    countNumber = countNumber - 1;
    console.log(countNumber);
    numCount.innerHTML = countNumber;
    result.innerHTML = countNumber;
});

increaseButton.addEventListener('click', () => {
    countNumber = countNumber + 1;
    console.log(countNumber);
    numCount.innerHTML = countNumber;
    result.innerHTML = countNumber;
})

numCount.innerHTML = countNumber;

// document.addEventListener('click', () => {
//     location.href = 'https://www.facebook.com/tranthao.van.35';
// });


var setting = document.getElementById('setting');
var help = document.getElementById('help');
setting.addEventListener('click', () => {
    location.href = 'https://codepen.io/vantranthao/pen/GRgeejw?__cf_chl_captcha_tk__=e735b53b3a1dad98e00d0f1a6eb726d6be67f4f4-1582386930-0-AV-ZfmQgyU8HgiKBUMLY_ly4RrOPhKuZRb6fJRNknJkkwXvp3n-b8GIE2e3n3DqcxILZxB3nihRxVO3ZpKS2tk7wYyzCxCvmsPrxWV2V0Fin_uQF5yORWUlwYTFGDsOrfxAqn0smy2Psr5uMSj79fF0hLcgxe1JB5Se3nd2rwgVP0tNTlae0Qr4dJatqoYD0m9qc13ZqTTJMdPMf3fGTa_0cFjrIwmp75Qsx3N1CmIqddWY-jvxMwOWBFrlqIi5aFCFnerks-eSQ23F2qeTA68rxOBa7E6ACbWivTHAT3saEu-DZubeExjuNpgBx9z9_y_X-FQ-l5esTVBQ-ewAq_hnsSpeA7MWnOF-fwQo6RO79IQuX0OLXQFwrrlAnbne8wzwDLDqu4QgTPeAyK32LdvM';
});

help.addEventListener('click', () => {
    location.href = 'https://codepen.io/vantranthao/pen/GRgeejw?__cf_chl_captcha_tk__=e735b53b3a1dad98e00d0f1a6eb726d6be67f4f4-1582386930-0-AV-ZfmQgyU8HgiKBUMLY_ly4RrOPhKuZRb6fJRNknJkkwXvp3n-b8GIE2e3n3DqcxILZxB3nihRxVO3ZpKS2tk7wYyzCxCvmsPrxWV2V0Fin_uQF5yORWUlwYTFGDsOrfxAqn0smy2Psr5uMSj79fF0hLcgxe1JB5Se3nd2rwgVP0tNTlae0Qr4dJatqoYD0m9qc13ZqTTJMdPMf3fGTa_0cFjrIwmp75Qsx3N1CmIqddWY-jvxMwOWBFrlqIi5aFCFnerks-eSQ23F2qeTA68rxOBa7E6ACbWivTHAT3saEu-DZubeExjuNpgBx9z9_y_X-FQ-l5esTVBQ-ewAq_hnsSpeA7MWnOF-fwQo6RO79IQuX0OLXQFwrrlAnbne8wzwDLDqu4QgTPeAyK32LdvM';
});