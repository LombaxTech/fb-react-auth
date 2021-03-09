import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const app = firebase.initializeApp({
    apiKey: "AIzaSyCUBxDXgtoJSEsd_OlAPcFdJyw9eIbw6eI",
    authDomain: "fb2021-4bd76.firebaseapp.com",
    projectId: "fb2021-4bd76",
    storageBucket: "fb2021-4bd76.appspot.com",
    messagingSenderId: "849112998183",
    appId: "1:849112998183:web:279a3f06ed8e49aa674902",
    measurementId: "G-VMQLSZCF9T",
});

export const auth = app.auth();
// export default app;

// import firebase from "firebase/app";
// import "firebase/auth";

// if (firebase.apps.length === 0) {
//     firebase.initializeApp({
//         apiKey: "AIzaSyCUBxDXgtoJSEsd_OlAPcFdJyw9eIbw6eI",
//         authDomain: "fb2021-4bd76.firebaseapp.com",
//         projectId: "fb2021-4bd76",
//         storageBucket: "fb2021-4bd76.appspot.com",
//         messagingSenderId: "849112998183",
//         appId: "1:849112998183:web:279a3f06ed8e49aa674902",
//         measurementId: "G-VMQLSZCF9T",
//     });
// }

// const auth = firebase.auth();
