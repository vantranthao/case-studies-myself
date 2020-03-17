// get element
var btnLogin = document.getElementById('log-in');
var btnLogout = document.getElementById('logout');
var btnSignup = document.getElementById('sign-up');
var txtEmail = document.getElementById('txt-email');
var txtPassword = document.getElementById('txt-password');

// login event
btnLogin.addEventListener('click', () => {
    // get email and password
    var email = txtEmail.value;
    var pass = txtPassword.value;
    const auth = firebase.auth();

    // login
    var promise = auth.signInWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));
});

// sign up
btnSignup.addEventListener('click', () => {
    // get email and password
    var email = txtEmail.value;
    var pass = txtPassword.value;
    const auth = firebase.auth();

    // login
    var promise = auth.createUserWithEmailAndPassword(email, pass);
    promise
        .then(user => console.log(user))
        .catch(e => console.log(e.message));
});

// realtime listeners
// const auth = firebase.auth();

// nó báo lỗi từ dòng này anh ơi, nó bảo firebase chưa được định nghĩa
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      console.log(user)
    } else {
      // User is signed out.
      // ...
      console.log('not');
    }
  });