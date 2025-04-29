import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyBic9OvyNa_QbQ0ViNwCsBBl7X8tAF9XNw",
    authDomain: "auth-project-cec90.firebaseapp.com",
    projectId: "auth-project-cec90",
    storageBucket: "auth-project-cec90.firebasestorage.app",
    messagingSenderId: "552464848085",
    appId: "1:552464848085:web:6f9dc3ac72c871c1fdfe5c"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);