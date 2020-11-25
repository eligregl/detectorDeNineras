
import app from 'firebase/app';
import 'firebase/auth';

var config = {
    apiKey: "AIzaSyDUY8cfEq8F4NBQPUfSptAVekY1TvOJyNU",
    authDomain: "detectordenineras1.firebaseapp.com",
    databaseURL: "https://detectordenineras1.firebaseio.com",
    projectId: "detectordenineras1",
    storageBucket: "detectordenineras1.appspot.com",
    messagingSenderId: "541694473051",
    appId: "1:541694473051:web:5f913fe012b80ea785a07e",
    measurementId: "G-S27TSJPHRG"
};

class Firebase {
    constructor() {
        app.initializeApp(config);

        this.auth = app.auth();
    }

    // *** Auth API ***

    doCreateUserWithEmailAndPassword = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);

    doSignOut = () => {this.auth.signOut();
        console.log("sign out works")
    }
    

    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

    doPasswordUpdate = password =>
        this.auth.currentUser.updatePassword(password);
}

export default Firebase;