'use strict';

function check_input() {
  event.preventDefault();
  console.log('Calcul IMC demandé');
  // Récupérer la valeur du champ input poids du formulaire
  let poids = parseFloat(document.getElementById('poids').value);
  // Récupérer la valeur du champ input taille du formulaire
  let taille = parseFloat(document.getElementById('taille').value);
  console.log(poids);
  console.log(taille);
  // Si taille ou poids ne sont pas des nombres
  if (isNaN(taille) || isNaN(poids)) {
    console.log('Valeurs non numériques');
  }
  else {
    // Calculer l'IMC
    let imc = poids / (taille ** 2) * 10000;
    imc = imc.toFixed(1);
    console.log(imc);
    let libelle;
    let classe;
    if (imc < 16) {
      libelle = 'Anorexie ou dénutrition';
      classe = 'aqua';
    } else if (imc <= 18.5) {
      libelle = 'Maigreur';
      classe = 'aqua';
    } else if (imc <= 25) {
      libelle = 'Corpulence normale';
      classe = 'green';
    } else if (imc <= 30) {
      libelle = 'Surpoids';
      classe = 'orange';
    } else if (imc <= 35) {
      libelle = 'Obésité modérée';
      classe = 'red';
    } else if (imc <= 40) {
      libelle = 'Obésité élevée';
      classe = 'red';
    } else {
      libelle = 'Obésité morbide';
      classe = 'red';
    }
    document.querySelector("#imc span").textContent = imc;
    document.querySelector("#oms span").textContent = libelle;
    document.querySelector("#oms span").className = classe;
    document.querySelector('.result').style.display = "block";
  }
}

//
// CODE PRINCIPAL
//

// Attendre que tout le DOM soit chargé
document.addEventListener("DOMContentLoaded",function() {
  console.log('Bonjour');
  // Ajout d'un écouteur d'événement sur le bouton
  document.getElementById('btnCalc').addEventListener('click', check_input);
});
