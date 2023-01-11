import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { seedDatabase } from '../seed';

//we need to somehow seed the database

//we need a config here, put your api details here 
const firebaseConfig = {
	apiKey: "AIzaSyC__bqCWuo7Xr5qtljDkNI8k0G9kAH46SQ",
	authDomain: "streamclone-7473c.firebaseapp.com",
	projectId: "streamclone-7473c",
	storageBucket: "streamclone-7473c.appspot.com",
	messagingSenderId: "781224256546",
	appId: "1:781224256546:web:3efd1251b2d25725f9567b",
	measurementId: "G-8TEG9115W1"
  };
  

const firebase = Firebase.initializeApp(config);

//dont uncomment this bcz it will dupliacte the database on firebase
//seedDatabase(firebase);

export { firebase };