import { Stack } from "expo-router";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

export default function RootLayout() {
  // Import the functions you need from the SDKs you need

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBmbxniZjMR-2vW2GbIHVU-58UcWkX8_P4",
    authDomain: "natchtest-db7fa.firebaseapp.com",
    projectId: "natchtest-db7fa",
    storageBucket: "natchtest-db7fa.firebasestorage.app",
    messagingSenderId: "297395027252",
    appId: "1:297395027252:web:bd6443edd02c9e62dff961"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  return <Stack screenOptions={{
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }}>
  </Stack>;
}
