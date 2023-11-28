
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBVjZvb10uuMD2-7J7vvhkYe8fanLiies",
  authDomain: "fir-auth-8ddf8.firebaseapp.com",
  projectId: "fir-auth-8ddf8",
  storageBucket: "fir-auth-8ddf8.appspot.com",
  messagingSenderId: "169404123075",
  appId: "1:169404123075:web:985238beefec8c53639f76"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
