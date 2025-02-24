

import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";


import { getFirestore } from "firebase/firestore";


import { getAuth } from "firebase/auth"; 


const firebaseConfig = {
  apiKey: "AIzaSyCBFH1chY8tduV3dYhzLbQaE8sroy70lnM",
  authDomain: "njangi-18835.firebaseapp.com",
  projectId: "njangi-18835",
  storageBucket: "njangi-18835.firebasestorage.app",
  messagingSenderId: "537460401651",
  appId: "1:537460401651:web:749ab342f4a5b396a71e86",
  measurementId: "G-GYGFD8MV2M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);


const db = getFirestore(app);


const auth = getAuth(app);  

export { db, auth };  