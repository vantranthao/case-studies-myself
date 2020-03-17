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


function login() {
    // window.alert('hello');
    var userEmail = document.getElementById('email_field').value;
    var userPass = document.getElementById('password_field').value;

    // window.alert(userEmail + '   ' + userPass);

    firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...

        window.alert('Error: ' + errorMessage);
    });
}