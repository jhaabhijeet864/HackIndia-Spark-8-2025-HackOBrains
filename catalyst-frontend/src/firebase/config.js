import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHv5tnFRJKJHZT_c9k5EC7dcXQFyWyJCg",
  authDomain: "hackforge-2005.firebaseapp.com",
  projectId: "hackforge-2005",
  storageBucket: "hackforge-2005.firebasestorage.app",
  messagingSenderId: "94622037979",
  appId: "1:94622037979:web:34e8706e849527d76d99fe",
  measurementId: "G-BGGF0SGVL9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
export { analytics };