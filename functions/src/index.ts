import * as functions from 'firebase-functions';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//

// The Firebase Admin SDK to access the Firebase Realtime Database.
import * as admin from "firebase-admin";

import * as AddMessage from "./add-message";

admin.initializeApp();

export const addMessage = AddMessage.listener;