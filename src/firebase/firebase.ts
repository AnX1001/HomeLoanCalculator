
import { initializeApp } from 'firebase/app';


const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
};


initializeApp(firebaseConfig);



