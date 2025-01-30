  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword, } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

  window.signUp = signUp;
  async function signUp(){
    var email = document.getElementById("email").value
    var password = document.getElementById("password").value
    try{
        await createUserWithEmailAndPassword(auth, email, password);
        alert("login successfylly")
        window.location.href = 'index.html';
    }catch{
        alert("error")
    }
  }



   // Dynamic year, month, day population
   const daySelect = document.getElementById('select1');
   const monthSelect = document.getElementById('select2');
   const yearSelect = document.getElementById('select3');
   
   for (let i = 1; i <= 31; i++) {
       const option = document.createElement('option');
       option.value = i;
       option.textContent = i;
       daySelect.appendChild(option);
   }
   
   const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
   months.forEach((month, index) => {
       const option = document.createElement('option');
       option.value = index + 1;
       option.textContent = month;
       monthSelect.appendChild(option);
   });
   
   const currentYear = new Date().getFullYear();
   for (let i = currentYear; i >= 1900; i--) {
       const option = document.createElement('option');
       option.value = i;
       option.textContent = i;
       yearSelect.appendChild(option);
   }

   // Form validation
   (function () {
       'use strict'
       const form = document.getElementById('signUpForm');
       form.addEventListener('submit', function (event) {
           if (!form.checkValidity()) {
               event.preventDefault();
               event.stopPropagation();
           }
           form.classList.add('was-validated');
       }, false);
   })();

