// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {

  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "natchtest-db7fa.firebaseapp.com",
  projectId: "natchtest-db7fa",
  storageBucket: "natchtest-db7fa.firebasestorage.app",
  messagingSenderId: "297395027252",
  appId: "1:297395027252:web:bd6443edd02c9e62dff961"
};

// Initialize Google Sign In
GoogleSignin.configure({
  webClientId: 'YOUR_WEB_CLIENT_ID', // from Firebase Console
});
// Sign In function
const signInWithGoogle = async () => {
  try {
    const { idToken } = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    await auth().signInWithCredential(googleCredential);
    console.log('Signed in with Google!');
  } catch (error) {
    console.error(error);
  }
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);

// apiKey: "AIzaSyBmbxniZjMR-2vW2GbIHVU-58UcWkX8_P4",
//   authDomain: "natchtest-db7fa.firebaseapp.com",
//   projectId: "natchtest-db7fa",
//   storageBucket: "natchtest-db7fa.firebasestorage.app",
//   messagingSenderId: "297395027252",
//   appId: "1:297395027252:web:bd6443edd02c9e62dff961"