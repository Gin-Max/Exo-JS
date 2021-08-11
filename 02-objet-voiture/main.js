'use strict';
// Déclaration d'un objet voiture
let voiture = new Object();
// Ajout de propriétés à l'objet
voiture.marque = 'Citroën';
voiture.modele = '2CV';
voiture.couleur = 'Rouge';
voiture.annee = 1984;
voiture.conducteur = 'Christiane';
// Ajout des passagers
voiture.passagers = new Array();
voiture.passagers[0] = 'Xavier';
voiture.passagers[1] = 'Charlotte';
voiture.passagers[2] = 'Vanessa';
// Affichage des informations
document.write('<h2>Informations de la voiture</h2>');
document.write('<p>Marque : '+voiture.marque+'<br>Modèle : '+voiture.modele+'<br>Couleur : '+voiture.couleur+'<br>Année : '+voiture.annee+'</p>');
document.write('<p>Le conducteur de la voiture est <em>'+voiture.conducteur+'</em></p>');
document.write('<h2>Liste des passagers</h2>');
document.write('<ul>');
document.write('<li>'+voiture.passagers[0]+'</li>');
document.write('<li>'+voiture.passagers[1]+'</li>');
document.write('<li>'+voiture.passagers[2]+'</li>');
document.write('</ul>');
