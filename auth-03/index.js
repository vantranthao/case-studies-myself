// Get elements
var btnLogin = document.getElementById('login');
var btnLogout = document.getElementById('logout');

// Add event
btnLogin.addEventListener('click', e => {
    firebase.auth().signInAnonymously();
});

firebase.auth().onAuthStateChanged(firebaseUser => {
    console.log(firebaseUser);
});