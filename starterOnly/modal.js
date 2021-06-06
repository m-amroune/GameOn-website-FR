function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelector(".close");

// FORM Elements
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const city = document.querySelectorAll("input[type=radio]");
const termOfUse = document.getElementById("checkbox1");

// Parents Elements

const firstNameParent = firstName.parentNode;
const lastNameParent = lastName.parentNode;
const emailParent = email.parentNode;
const birthdateParent = birthdate.parentNode;
const quantityParent = quantity.parentNode;
const cityParent = city[0].parentNode;
const termOfUseParent = termOfUse.parentNode;

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Close modal event
closeBtn.addEventListener("click", closeModal);

// Close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// Function validation elements form

function validate(event) {
  event.preventDefault();
  let isFormValid = true;
  if (firstName.value.length < 2) {
    firstNameParent.setAttribute("data-error-visible", true);
    isFormValid = false;
  } else {
    firstNameParent.removeAttribute("data-error-visible");
  }

  if (!isFormValid) {
    return false;
  }
}
