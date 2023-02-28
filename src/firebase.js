// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getToken, deleteToken, getMessaging } from "firebase/messaging";

// Import the functions you need from the SDKs you need
import localforage from "localforage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

let token = "";
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

if (token) deleteToken(messaging);
getToken(messaging, {
  vapidKey: process.env.CREATE_REACT_APP_VAPIDKEY,
}).then((currentKey) => {
  console.log("Messagning token key: ", currentKey);
});

// Initialize Firebase

const firebaseCloudMessaging = {
  init: async () => {
    initializeApp(firebaseConfig);

    try {
      const messaging = getMessaging();
      const tokenInLocalForage = await localStorage.getItem("fcm_token");

      // Return the token if it is alredy in our local storage
      if (tokenInLocalForage !== null) {
        return tokenInLocalForage;
      }

      // Request the push notification permission from browser
      const status = await Notification.requestPermission();
      if (status && status === "granted") {
        // Get new token from Firebase
        const fcm_token = await getToken(messaging, {
          vapidKey: process.env.CREATE_REACT_APP_VAPIDKEY,
        });
        console.log("token in fcm_token", fcm_token);
        // Set token in our local storage
        if (fcm_token) {
          localforage.setItem("fcm_token", fcm_token);
          return fcm_token;
        }
      }
    } catch (error) {
      console.error(error);
      return null;
    }
  },
};
export { firebaseCloudMessaging };
