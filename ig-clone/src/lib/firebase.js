import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

//import the seed file
//import { seedDatabase } from '../seed';

const config = {
    apiKey: "AIzaSyD-S-wpOtpjs0S5-8GFiqiLMTY2mII44pc",
    authDomain: "instagram-yt-17c38.firebaseapp.com",
    projectId: "instagram-yt-17c38",
    storageBucket: "instagram-yt-17c38.appspot.com",
    messagingSenderId: "171424181660",
    appId: "1:171424181660:web:9f47ec3be4d504f0feac59"
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

//call the seed file (only once!)
//seedDatabase(firebase);

console.log('firebase', firebase);

export { firebase, FieldValue };
