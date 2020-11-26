// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts("https://www.gstatic.com/firebasejs/8.0.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.0.0/firebase-messaging.js");

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.

firebase.initializeApp({
  apiKey: "AIzaSyCRNgEeU2H_JcdJaLQH70o9mh4Uon7zttI",
  authDomain: "todoapp2-f6ad9.firebaseapp.com",
  databaseURL: "https://todoapp2-f6ad9.firebaseio.com",
  projectId: "todoapp2-f6ad9",
  storageBucket: "todoapp2-f6ad9.appspot.com",
  messagingSenderId: "1003762463600",
  appId: "1:1003762463600:web:0b9ee1cc07d775eae155b5",
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();
