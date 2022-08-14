import { getFirestore } from 'firebase-admin/firestore';
import { initializeFirebase } from './initialize';

initializeFirebase()

export const firebaseDB = getFirestore();
export const userRef: FirebaseFirestore.CollectionReference = firebaseDB.collection('users');
export const diaryRef: FirebaseFirestore.CollectionReference = firebaseDB.collection('diaries');