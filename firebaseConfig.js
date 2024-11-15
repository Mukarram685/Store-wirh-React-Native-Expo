import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDgwh5LbtWqY34XCz-1Lt3iFVnxeBFpzrs",  // Replace with the actual API key
    authDomain: "learn-expo-cf082.firebaseapp.com",
    projectId: "learn-expo-cf082",
    storageBucket: "learn-expo-cf082.appspot.com",
    messagingSenderId: "801517922816",
    appId: "1:801517922816:android:5f2ddfa4998dcc4e7206e5",
    // measurementId: "your-measurement-id",  // Optional (only if you have analytics enabled)
  };
  
  const app = initializeApp(firebaseConfig);

  export const auth = getAuth(app);