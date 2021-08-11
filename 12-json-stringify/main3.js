'use strict';

//
// CODE AVEC UTILISATION DE PROTOTYPE
//

function Personne(nom, prenom, age, ville) {
  this.nom = nom;
  this.prenom = prenom;
  this.age = age;
  this.ville = ville;
}

Personne.prototype.jsonStringify = function() {
  console.log(this.nom);
  // Créer une variable para qui définit un nouveau paragraphe
  let para = document.createElement("p");
  // Ajouter la variable para comme enfant de display
  display.appendChild(para);
  // Remplir para avec le contenu qu'on souhaite afficher
  para.innerHTML = JSON.stringify(this);
}

//
// CODE PRINCIPAL
//

let display = document.getElementById('display');
display.innerHTML = '';
// Création de la personne 1
let personne1 = new Personne("Durant", "Jean", 25, "Lille");
// Stringify
personne1.jsonStringify();
// Création de la personne 2
let personne2 = new Personne("Lhomme", "Sullivan", 22, "Lille");
// Stringify
personne2.jsonStringify();
