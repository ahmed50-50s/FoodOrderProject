
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";


// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvQ9-cPO63gcUSSXpVlWrgZd_upKLeKxI",
  authDomain: "food-order-c8d30.firebaseapp.com",
  projectId: "food-order-c8d30",
  storageBucket: "food-order-c8d30.firebasestorage.app",
  messagingSenderId: "557239552170",
  appId: "1:557239552170:web:6ac3d94a95a02a806768d3",
  measurementId: "G-YC1T2LST4H"
};

// Initialize Firebase and Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
// pizza
window.saveOrderPizza = saveOrderPizza
async function saveOrderPizza() {
  var user = auth.currentUser
  var kind = document.getElementById("kind").value;
  var quantity = document.getElementById("quantity").value

  const checkboxes = document.querySelectorAll('.form-check-input');
  var add = []
  checkboxes.forEach(checkbox => {
    if(checkbox.checked)
    {
        add.push(checkbox.value)
    }
  });

  var order = {
    kind : kind,
    quantity : quantity,
    additions : add,
    user : user.uid
  } 

  console.log(order)

  addDoc(collection(db , "order") , order)
  clear()
}

function clear (){
    document.getElementById("kind").value = "Choose your favorite flavor"
    document.getElementById("kindSuchi").value = "Choose your favorite flavor"
    document.getElementById("kindburger").value = "Choose your favorite flavor"


    document.getElementById("quantitySuchi").value = " "
    document.getElementById("quantityburger").value = " "
    document.getElementById("quantity").value = " "


    const checkboxes = document.querySelectorAll('.form-check-input');
  checkboxes.forEach(checkbox => {
    checkbox.checked = false;
  });

}


window.hidePopup = hidePopup
function hidePopup() {
    var popups = document.getElementsByClassName("popup"); 
    Array.from(popups).forEach(popup => {
        popup.classList.remove("popup");
        popup.classList.add("hidden");
    });
}

window.displayPizzaPopup = displayPizzaPopup
function displayPizzaPopup(){
    var popup = document.getElementById("popup");
    popup.classList.remove("hidden");
    popup.classList.add("popup");
}




//suchi

window.saveOrderSuchi = saveOrderSuchi
async function saveOrderSuchi() {
  var user = auth.currentUser
  var kindSuchi = document.getElementById("kindSuchi").value;
  var quantitySuchi = document.getElementById("quantitySuchi").value

  const checkboxes = document.querySelectorAll('.form-check-input');
  var add = []
  checkboxes.forEach(checkbox => {
    if(checkbox.checked)
    {
        add.push(checkbox.value)
    }
  });

  var order = {
    kind : kindSuchi,
    quantity : quantitySuchi,
    additions : add,
    user : user.uid

  } 

  console.log(order)

  addDoc(collection(db , "order") , order)
  clear()
}

window.displaySuchiPopup = displaySuchiPopup
function displaySuchiPopup(){
    var popup = document.getElementById("popupSuchi");
    popup.classList.remove("hidden");
    popup.classList.add("popup");
}




//burger

window.saveOrderburger = saveOrderburger
async function saveOrderburger() {
  var user = auth.currentUser
  var kindburger = document.getElementById("kindburger").value;
  var quantityburger = document.getElementById("quantityburger").value

  const checkboxes = document.querySelectorAll('.form-check-input');
  var add = []
  checkboxes.forEach(checkbox => {
    if(checkbox.checked)
    {
        add.push(checkbox.value)
    }
  });

  var order = {
    kind : kindburger,
    quantity : quantityburger,
    additions : add,
    user : user.uid

  } 

  console.log(order)

  addDoc(collection(db , "order") , order)
  clear()
}

window.displayburgerPopup = displayburgerPopup
function displayburgerPopup(){
    var popup = document.getElementById("popupburger");
    popup.classList.remove("hidden");
    popup.classList.add("popup");
}