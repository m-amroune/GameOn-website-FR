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
<<<<<<< HEAD
=======
const closeBtn = document.querySelectorAll(".close");

// FORM Elements
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const city = document.querySelectorAll("input[type=radio]");
const termOfUse = document.getElementById("checkbox1");
const confirmSuccess = document.querySelector(".confirm-success");
const closeSuccess = document.querySelectorAll(".close-message-confirmation");

// Parents Elements for errors

const firstNameParent = firstName.parentNode;
const lastNameParent = lastName.parentNode;
const emailParent = email.parentNode;
const birthdateParent = birthdate.parentNode;
const quantityParent = quantity.parentNode;
const cityParent = city[0].parentNode;
const termOfUseParent = termOfUse.parentNode;

// REGEX
const regexName = /^[a-zA-ZÀ-ÖØ-öø-ÿ]+$/;
const regexEmail = /^[\w_-]+@[\w-]+\.[a-z]{2,4}$/i;
const regexBirthdate =
  /^(19|20)\d{2}[-](0?[1-9]|1[012])[-](0[1-9]|[12]\d|3[01])$/;
>>>>>>> 545c8098a43aa47ddfe56a54fdfdf0eef860c83a

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

<<<<<<< HEAD
=======
// Close modal event
closeBtn.forEach((btn) => btn.addEventListener("click", closeModal));

>>>>>>> 545c8098a43aa47ddfe56a54fdfdf0eef860c83a
// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

<<<<<<< HEAD

=======
// Close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// Close event confirmation message

closeSuccess.forEach((btn) =>
  btn.addEventListener("click", closeMessageSuccess)
);

// Function validation inputs form

function validate(event) {
  event.preventDefault();
  let isFormValid = true;
  if (firstName.value.length < 2 || !firstName.value.match(regexName)) {
    firstNameParent.setAttribute("data-error-visible", true);
    isFormValid = false;
  } else {
    firstNameParent.removeAttribute("data-error-visible");
  }

  if (lastName.value.length < 2 || !lastName.value.match(regexName)) {
    lastNameParent.setAttribute("data-error-visible", true);
    isFormValid = false;
  } else {
    lastNameParent.removeAttribute("data-error-visible");
  }

  if (!email.value.match(regexEmail)) {
    emailParent.setAttribute("data-error-visible", true);
    isFormValid = false;
  } else {
    emailParent.removeAttribute("data-error-visible", true);
  }

  if (!birthdate.value.match(regexBirthdate)) {
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
  } else {
    closeModal();
    // confirmation message
    confirmSuccess.style.display = "flex";

    firstName.value = "";
    lastName.value = "";
    email.value = "";
    birthdate.value = "";
    quantity.value = "";

    city.forEach((event) => {
      event.checked = false;
    });
  }
}
function closeMessageSuccess() {
  confirmSuccess.style.display = "none";
  closeModal();
}
>>>>>>> 545c8098a43aa47ddfe56a54fdfdf0eef860c83a
