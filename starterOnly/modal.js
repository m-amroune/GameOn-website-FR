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
const confirmSuccess = document.querySelector(".confirm-success");
const closeSuccess = document.querySelector(".close-confirmation");

// Parents Elements for errors

const firstNameParent = firstName.parentNode;
const lastNameParent = lastName.parentNode;
const emailParent = email.parentNode;
const birthdateParent = birthdate.parentNode;
const quantityParent = quantity.parentNode;
const cityParent = city[0].parentNode;
const termOfUseParent = termOfUse.parentNode;

// REGEX
const regex = /^[a-zA-ZÀ-ÖØ-öø-ÿ]+$/;

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

// Function validation inputs form

function validate(event) {
  event.preventDefault();
  let isFormValid = true;
  if (firstName.value.length < 2 || !firstName.value.match(regex)) {
    firstNameParent.setAttribute("data-error-visible", true);
    isFormValid = false;
  } else {
    firstNameParent.removeAttribute("data-error-visible");
  }

  if (lastName.value.length < 2 || !lastName.value.match(regex)) {
    lastNameParent.setAttribute("data-error-visible", true);
    isFormValid = false;
  } else {
    lastNameParent.removeAttribute("data-error-visible");
  }

  if (!email.value.match(/^[\w_-]+@[\w-]+\.[a-z]{2,4}$/i)) {
    emailParent.setAttribute("data-error-visible", true);
    isFormValid = false;
  } else {
    emailParent.removeAttribute("data-error-visible", true);
  }

  if (birthdate.value == null || birthdate.value == "") {
    birthdateParent.setAttribute("data-error-visible", true);
    isFormValid = false;
  } else {
    birthdateParent.removeAttribute("data-error-visible");
  }

  if (quantity.value == null || quantity.value == "") {
    quantityParent.setAttribute("data-error-visible", true);
    isFormValid = false;
  } else {
    quantityParent.removeAttribute("data-error-visible");
  }

  let hasChecked = false;
  // forEach for all checked buttons city
  city.forEach((event) => {
    if (event.checked) {
      hasChecked = true;
    }
  });
  if (!hasChecked) {
    cityParent.setAttribute("data-error-visible", true);
    isFormValid = false;
  } else {
    cityParent.removeAttribute("data-error-visible");
  }

  // Terms of use
  if (!termOfUse.checked) {
    termOfUseParent.setAttribute("data-error-visible", true);
    isFormValid = false;
  } else {
    termOfUseParent.removeAttribute("data-error-visible");
  }

  if (!isFormValid) {
    return false;
  }

  confirmSuccess.style.display = "flex";
  firstName.value = "";
  lastName.value = "";
  email.value = "";
  birthdate.value = "";
  quantity.value = "";

  city.forEach((event) => {
    event.checked = false;
  });

  return false;
}
