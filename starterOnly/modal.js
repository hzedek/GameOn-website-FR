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
const nomError = document.createElement("p");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// Close modal event
closeBtn.addEventListener("click", closeModal);

function closeModal() {
  modalbg.style.display = "none";
}

// CLose modal event
closeBtn.addEventListener("click", closeModal)

function closeModal() {
  modalbg.style.display = "none";
}
// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}


// Ajout d'un écouteur d'événement sur le formulaire pour écouter le submit
form.addEventListener("click", (event) => {
  // On empêche le comportement par défaut
event.preventDefault
  // On fait la vérification.
  if (firstData.value.trim() === "") {
    nomError.textContent = "Veuillez remplir votre Nom ";
    firstData.parentElement.appendChild(nomError);
    nomError.classList.add("nom-error")
  } else {
    nomError.style.display = "none";
  }
});

  // On fait la vérification.
  if (firstData.value.trim() === "") {
    nomError.textContent = "Veuillez remplir votre Nom ";
    firstData.parentElement.appendChild(nomError);
    nomError.classList.add("nom-error")
  } else {
    nomError.style.display = "none";
  }
});
