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
const modalbg2 = document.querySelector(".bground2");
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
const checkbox1 = document.getElementById("checkbox1");
const nomError = document.createElement("p");
const nomError1 = document.createElement("p");
const nomError2 = document.createElement("p");
const nomError3 = document.createElement("p");
const nomError4 = document.createElement("p");
const nomError5 = document.createElement("p");
const nomError6 = document.createElement("p");
let prenomvalidation = true;
let nomvalidation = true;
let birthdayvalidation = true;
let quantitevalidation = true;
let emailvalidation = true;
let villevalidation = true;
let conditionvalidation = false;



// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// Close modal event
closeBtn.addEventListener("click", closeModal);

function closeModal() {
  modalbg2.style.display = "none";
  modalbg.style.display = "none";
}

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
  modalbg2.style.display = "none";

}
    
// On fait la vérification.

function prenom() {

      firstData.addEventListener('input',()=>{
        let firstDataValue = firstData.value.trim();
    if (firstDataValue.length <= 2 || firstDataValue === "" ) {
      nomError.style.display = "block";
      nomError.textContent = "Veuillez remplir votre Prénom ";
      firstData.parentElement.appendChild(nomError);
      nomError.classList.add("nom-error")
      prenomvalidation=false
      console.log(firstDataValue,"prenom");
    }
    else {
      nomError.style.display = "none";
      nomError.classList.remove("nom-error")
      prenomvalidation = true

    }})}


function nom() {

    lastData.addEventListener('input',()=>{
      let lastDataValue = lastData.value.trim()
      if (lastDataValue.length <= 2) {
        nomError1.style.display = "block";
        nomError1.textContent = "Veuillez remplir votre nom ";
        lastData.parentElement.appendChild(nomError1);
        nomError1.classList.add("nom-error")
        nomvalidation = false

      } else {
        nomError1.classList.remove("nom-error")
        nomError1.style.display = "none";
        nomvalidation = true
      }
    })}
function email() {
  

    emailData.addEventListener("input", (e)=>{
      let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    let resultat = regex.test(e.target.value);
    if (resultat === false) {
      nomError2.style.display = "block";
      nomError2.textContent = "Veuillez remplir votre email ";
      emailData.parentElement.appendChild(nomError2);
      nomError2.classList.add("nom-error")
      emailvalidation = false
      
    } else {
      nomError2.classList.remove("nom-error");
      nomError2.style.display = "none";
      emailvalidation = true
    }})
  }

  function birthday() {
    
  
    birthdate.addEventListener('input',()=>{
      let birthdateValue = Date.parse(birthdate.value)
      if (birthdateValue <= Date.UTC(1920,9,19)
      ) {
        nomError3.style.display = "block";
        nomError3.textContent = "Veuillez remplir votre date de naissance ";
        birthdate.parentElement.appendChild(nomError3);
        nomError3.classList.add("nom-error")
        birthdayvalidation = false
    
      } else {
        nomError3.classList.remove("nom-error")
        nomError3.style.display = "none";
        birthdayvalidation = true
    
      }
    })}

    function quantite() {

    quantity.addEventListener('input',()=>{
      let quantityValue = quantity.value;
      let regex = /^[0-9]/;
      if (regex.test(quantityValue) === false )
       {
        nomError4.style.display = "block";
        nomError4.textContent = "Veuillez remplir le nombre de tournoi auquel vous avez participé ";
        quantity.parentElement.appendChild(nomError4);
        nomError4.classList.add("nom-error")
        quantitevalidation = false
  
      } else {
        nomError4.classList.remove("nom-error")
        nomError4.style.display = "none";
        quantitevalidation = true
      }
    }) }
   
    function ville() {
      checkboxInput.forEach((box) => box.addEventListener("click", (evento)=>{
        let isAnyChecked = false;

          if (evento.target.checked) {
            isAnyChecked = true;
            nomError5.style.display = "none";
            nomError5.classList.remove("nom-error");
            villevalidation=true;
            console.log("true");
                      
          }
          else {
            nomError5.style.display = "block";
          nomError5.textContent = "Veuillez choisir où participer";
          checkboxInput[5].parentElement.appendChild(nomError5);
          nomError5.classList.add("nom-error");
          isAnyChecked = false;
          villevalidation = false;
          console.log(villevalidation,isAnyChecked);
        }}))
      };
 
    

    function condition() {
 checkbox1.addEventListener('click',e =>{
  if (e.target.checked) {
    nomError6.style.display = "none";
    nomError6.classList.remove("nom-error");
    conditionvalidation = true
  }
  else {
    nomError6.style.display = "block";
    nomError6.textContent = "Veuillez accepter nos conditions ";
    checkbox1.parentElement.appendChild(nomError6);
    nomError6.classList.add("nom-error")
    conditionvalidation = false
  }})};

    
  function greeting() {
    modalbg.style.display = "none";
    modalbg2.style.display = "block";
  }
  function validate() {
    prenom(),nom(),email(),birthday(),quantite(),ville(),condition()
  };

  validate();

// Ajout d'un écouteur d'événement sur le formulaire pour écouter le submit
form.addEventListener("submit", (event) => {
  event.preventDefault();

  validate()
  if (
    prenomvalidation && nomvalidation && emailvalidation && birthdayvalidation && quantitevalidation && villevalidation && conditionvalidation === true
    ) {
greeting();
console.log("pas d'erreur");}
else{console.log("erreur");}

});

