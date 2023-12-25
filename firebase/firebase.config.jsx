// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsycUhjxnTjL466HUm09BqSXwgrEFKWCo",
  authDomain: "the-news-dragon-client-169d2.firebaseapp.com",
  projectId: "the-news-dragon-client-169d2",
  storageBucket: "the-news-dragon-client-169d2.appspot.com",
  messagingSenderId: "837856240699",
  appId: "1:837856240699:web:41cc5aeaa7d2ed7f50281e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;