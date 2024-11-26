import { initializeApp, getApps } from 'firebase/app';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
};

let firebaseInitialized = false;

// Check if the necessary environment variables are set
if (!firebaseConfig.apiKey || !firebaseConfig.authDomain) {
  console.warn('Firebase environment variables are not set. Skipping Firebase initialization.');
} else {
  if (getApps().length === 0) {
    initializeApp(firebaseConfig);
    firebaseInitialized = true;
    console.info('Firebase initialized successfully.');
  }
}

export { firebaseInitialized };