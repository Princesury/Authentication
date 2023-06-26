import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'


const firbaseConfig={
    apiKey: "AIzaSyDRFVPjPQcTjdfFXkOm-5uq53uut_Dshfk",
    authDomain: "nativeauth11.firebaseapp.com",
    projectId: "nativeauth11",
    storageBucket: "nativeauth11.appspot.com",
    messagingSenderId: "271563407478",
    appId: "1:271563407478:web:7f55c8fc411894337c9f57",
    measurementId: "G-JC7C2TEM77"
}

if(!firebase.apps.length){
    firebase.initializeApp(firbaseConfig)
}

export {firebase}