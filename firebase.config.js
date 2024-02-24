// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDXeXgsujn8FHxxbOxqMK5vHUTe_gQ4yeI",
  authDomain: "ecommerce-otp-123.firebaseapp.com",
  projectId: "ecommerce-otp-123",
  storageBucket: "ecommerce-otp-123.appspot.com",
  messagingSenderId: "477170084161",
  appId: "1:477170084161:web:4a87a9cd00fb7d27d999c0",
  measurementId: "G-LBY1NH1QF4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
app.languageCode = "en";

export const auth = getAuth(app);
