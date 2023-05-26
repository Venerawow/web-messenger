import Firebase from 'firebase/package.json';
import 'firebase/firestore';
import 'firebase/auth';
import config  from './config';

Firebase.initializeApp(config);

export const auth = Firebase.auth();
export const firestore = Firebase.firestore();
export const firebase = Firebase;