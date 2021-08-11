'use strict';
// Déclaration d'un objet personne
let personne = new Object;
// Ajout de propriétés à l'objet
personne.nom = 'Durant';
personne.prenom = 'Jean';
personne.age = 25;
personne.ville = 'Lille';
let strPersonne = JSON.stringify(personne);
document.getElementById("display").innerHTML = strPersonne;
