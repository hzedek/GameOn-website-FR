function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM element
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelector(".close");
const form = document.getElementById("form");
const firstData = document.getElementById("first");
const lastData = document.getElementById("last");
const emailData = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const checkboxInput = document.querySelectorAll(".checkboxinput");

const nomError = document.createElement("p");
const nomError1 = document.createElement("p");
const nomError2 = document.createElement("p");
const nomError3 = document.createElement("p");
const nomError4 = document.createElement("p");
const nomError5 = document.createElement("p");



// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// Close modal event
closeBtn.addEventListener("click", closeModal);

function closeModal() {modalbg.style.display = "none";}

// CLose modal event
closeBtn.addEventListener("click", closeModal)

function closeModal() {
  modalbg.style.display = "none";
}
// launch modal form
function launchModal() {modalbg.style.display = "block";}
    // On fait la vérification.

    quantity.addEventListener('input',()=>{
  let quantityValue = quantity.value;
  let regex = /^[0-9]/;
  if (regex.test(quantityValue) === false )
   {
    nomError4.style.display = "block";
    nomError4.textContent = "Veuillez remplir le nombre de tournoi auquel vous avez participé ";
    quantity.parentElement.appendChild(nomError4);
    nomError4.classList.add("nom-error")
  } else {
    nomError4.classList.remove("nom-error")
    nomError4.style.display = "none";
  }
})    

birthdate.addEventListener('input',()=>{
  let birthdateValue = Date.parse(birthdate.value)
  if (birthdateValue <= Date.UTC(1920,9,19)
  ) {
    nomError3.style.display = "block";
    nomError3.textContent = "Veuillez remplir votre date de naissance ";
    birthdate.parentElement.appendChild(nomError3);
    nomError3.classList.add("nom-error")
  } else {
    nomError3.classList.remove("nom-error")
    nomError3.style.display = "none";
  }
})

emailData.addEventListener("input", (event)=>{
  let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
let resultat = regex.test(event.target.value);
if (resultat === false) {
  nomError2.style.display = "block";
  nomError2.textContent = "Veuillez remplir votre email ";
  emailData.parentElement.appendChild(nomError2);
  nomError2.classList.add("nom-error")

} else {
  nomError2.classList.remove("nom-error");
  nomError2.style.display = "none";
}})

    lastData.addEventListener('input',()=>{
      let lastDataValue = lastData.value.trim()
      if (lastDataValue.length <= 2) {
        nomError1.style.display = "block";
        nomError1.textContent = "Veuillez remplir votre nom ";
        lastData.parentElement.appendChild(nomError1);
        nomError1.classList.add("nom-error")
      } else {
        nomError1.classList.remove("nom-error")
        nomError1.style.display = "none";
      }
    })
    firstData.addEventListener("input",()=>{
    let firstDataValue = firstData.value.trim()
    if (firstDataValue.length <= 2) {
      nomError.style.display = "block";
      nomError.textContent = "Veuillez remplir votre Prénom ";
      firstData.parentElement.appendChild(nomError);
      nomError.classList.add("nom-error")
    } else {
      nomError.style.display = "none";
      nomError.classList.remove("nom-error")
    }})
// Ajout d'un écouteur d'événement sur le formulaire pour écouter le submit
form.addEventListener("submit", (event) => {
  event.preventDefault()
   for (let i = 0; i < checkboxInput.length; i++) {
    let isAnyChecked = false;
      if (checkboxInput[i].checked) {
        isAnyChecked = true
        nomError5.style.display = "none";
        nomError5.classList.remove("nom-error")
        break
      } else {
        nomError5.style.display = "block";
        nomError5.textContent = "Veuillez choisir où participer ";
        checkboxInput[5].parentElement.appendChild(nomError5);
        nomError5.classList.add("nom-error")
      }
    }
});
