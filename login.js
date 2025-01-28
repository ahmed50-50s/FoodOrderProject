import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvQ9-cPO63gcUSSXpVlWrgZd_upKLeKxI",
  authDomain: "food-order-c8d30.firebaseapp.com",
  projectId: "food-order-c8d30",
  storageBucket: "food-order-c8d30.firebasestorage.app",
  messagingSenderId: "557239552170",
  appId: "1:557239552170:web:6ac3d94a95a02a806768d3",
  measurementId: "G-YC1T2LST4H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

window.login=login;
async function login(event) {
  // Prevent form submission if already in progress
  event.preventDefault();

  var email = document.getElementById("email").value; // Get value of email input
  var password = document.getElementById("password").value; // Get value of password input

  try {
    await signInWithEmailAndPassword(auth, email, password); // Pass email and password values
    window.location.href = 'home.html'
  } catch (error) {
    alert("please , login with the valid eamil and password "); // Display error message
  }
}
