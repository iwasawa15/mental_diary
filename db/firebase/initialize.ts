import { initializeApp, cert } from 'firebase-admin/app';
import admin from 'firebase-admin'
const serviceAccount = require("/firebase-service-account-credencials.json");

export const initializeFirebase = () => {
	if (admin.apps.length === 0) {
    initializeApp({
      credential: cert(serviceAccount),
    });
  }
}
