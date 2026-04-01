import { Stack } from "expo-router";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import './config/firebase';

export default function RootLayout() {
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
