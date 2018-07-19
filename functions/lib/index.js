"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require("firebase-admin");
const AddMessage = require("./add-message");
admin.initializeApp();
exports.addMessage = AddMessage.listener;
//# sourceMappingURL=index.js.map