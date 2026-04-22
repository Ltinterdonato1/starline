// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMciYLn3u-bnIBykU6cag561Gx_JAYhu4",
  authDomain: "starline-fff6a.firebaseapp.com",
  projectId: "starline-fff6a",
  storageBucket: "starline-fff6a.firebasestorage.app",
  messagingSenderId: "17085612716",
  appId: "1:17085612716:web:94a6b1089662951fc11509",
  measurementId: "G-Q4NH51CDSW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;

export { app, analytics };
