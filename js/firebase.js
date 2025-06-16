import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyDzgdoFtm4H7kpR-8kOi0P8EpDc_xk4xc8",
    authDomain: "sptransit.firebaseapp.com",
    projectId: "sptransit",
    storageBucket: "sptransit.firebasestorage.app",
    messagingSenderId: "216191396695",
    appId: "1:216191396695:web:d637c3a619a5539abbec12",
    measurementId: "G-4TVEQN790H"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app, 'sptransit');

export { db };