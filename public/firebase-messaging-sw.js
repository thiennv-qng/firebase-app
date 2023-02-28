// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging/sw";
import { getToken } from "firebase/messaging";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCkxANOCZufPoRItlwJ1QtbevA8p9vBPIk",
  authDomain: "push-notifications-bee3d.firebaseapp.com",
  projectId: "push-notifications-bee3d",
  storageBucket: "push-notifications-bee3d.appspot.com",
  messagingSenderId: "696477246808",
  appId: "1:696477246808:web:2be629f9d6972f21e7712d",
  measurementId: "G-Q6B96FD5WZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);
getToken(messaging, { vapidKey: process.env.CREATE_REACT_APP_VAPIDKEY }).then(
  (currentKey) => {
    console.log("Messagning token key: ", currentKey);
  }
);

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("../firebase-messaging-sw.js")
    .then(function (registration) {
      console.log("Registration successful, scope is:", registration.scope);
    })
    .catch(function (err) {
      console.log("Service worker registration failed, error:", err);
    });
}
