// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts("https://www.gstatic.com/firebasejs/8.0.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.0.0/firebase-messaging.js");

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.

firebase.initializeApp({
  apiKey: "AIzaSyD8Fg85fHU99fxcglAEzUaM2BJ3cop_zfk",
  authDomain: "todoapp-79ddb.firebaseapp.com",
  databaseURL: "https://todoapp-79ddb.firebaseio.com",
  projectId: "todoapp-79ddb",
  storageBucket: "todoapp-79ddb.appspot.com",
  messagingSenderId: "916568661150",
  appId: "1:916568661150:web:00ddd616d3ab7e2e12af8f",
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();
