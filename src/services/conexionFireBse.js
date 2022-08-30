 // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyB8MxfKRL4CNBC3N19au5DqKt1i3fSTW8g",
    authDomain: "tiendasura-80b34.firebaseapp.com",
    projectId: "tiendasura-80b34",
    storageBucket: "tiendasura-80b34.appspot.com",
    messagingSenderId: "1079019820343",
    appId: "1:1079019820343:web:5a7d073ca49ba2c101b6b2",
    measurementId: "G-GWD5W3QZN9"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
