firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        // User is signed in.

        document.getElementById('user-div').style.display = 'block';
        document.getElementById('login-div').style.display = 'none';
    } else {
        // No user is signed in.

        document.getElementById('user-div').style.display = 'none';
        document.getElementById('login-div').style.display = 'block';
    }
});

var login = document.getElementById('login');

login.addEventListener('click', () => {
    // window.alert('workingg....')
    var email = document.getElementById('email').value;
    var pwd = document.getElementById('pwd').value;

    alert(email + '  ' + pwd)

    firebase.auth().createUserWithEmailAndPassword(userEmail, userPass).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;

        window.alert('Error: ' + errorMessage)
        // ...
    });
})