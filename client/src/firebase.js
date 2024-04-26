import firebase from 'firebase/app';
import 'firebase/auth'; // Import other Firebase services as needed

const firebaseConfig = {
  apiKey: 'YOUR_API_KEY',
  authDomain: 'YOUR_AUTH_DOMAIN',
  projectId: 'stylex-app-be3d',
  storageBucket: 'YOUR_STORAGE_BUCKET',
  messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
  appId: '1:838056560723:web:875a8462f02b25805d1ea6',
}; 

firebase.initializeApp(firebaseConfig);

export default firebase;