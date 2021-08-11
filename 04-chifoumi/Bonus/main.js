'use strict';   // Mode strict du JavaScript

// Déclaration de variables
let outils = ['pierre', 'feuille', 'ciseau'];
let ordinateur;
let joueur;
let resultat = '';

// Récupération du choix du joueur.
joueur = window.prompt('Choisissez : pierre, feuille ou ciseau ?', '');

// Conversion du choix du joueur en minuscules.
joueur = joueur.toLowerCase();
document.write("<p>Vous avez choisi : <strong>" + joueur + '</strong></p>');

// Récupération d'un nombre aléatoire entre 0 et 2 inclus.
let random = Math.floor(Math.random() * 3);
console.log(random);
ordinateur = outils[random];
console.log(ordinateur);
document.write("<p>L'ordinateur a choisi : <strong>" + ordinateur + '</strong></p>');

if(ordinateur == joueur) {
    document.write('<p>Vous avez les mêmes outils</p>');
    resultat = 'nul';
}
else {
    // Outils différents
    switch(joueur) {

        case 'ciseau':
          if(ordinateur == 'pierre') {
              document.write('<p>La pierre écrase le ciseau</p>');
              resultat = 'ordinateur';
          }
          else { // joueur == 'feuille'
              document.write('<p>La feuille est découpée par le ciseau</p>');
              resultat = 'joueur';
          }
          break;

        case 'feuille':
          if(ordinateur == 'pierre') {
              document.write('<p>La pierre est enveloppée par la feuille</p>');
              resultat = 'joueur';
          }
          else { // joueur == 'ciseau'
              document.write('<p>Le ciseau découpe la feuille</p>');
              resultat = 'ordinateur';
          }
          break;

        case 'pierre':
          if(ordinateur == 'feuille') {
              document.write('<p>La feuille enveloppe la pierre</p>');
              resultat = 'ordinateur';
          }
          else { // joueur == 'ciseau'
              document.write('<p>Le ciseau est écrasé par la pierre</p>');
              resultat = 'joueur';
          }
          break;

        default:
          document.write('<p>Erreur de choix d\'outil</p>');
    }
}
if (resultat == 'ordinateur') {
  document.write('<p>Vous perdez !</p>');
  document.write('<p><i class="fas fa-5x fa-skull-crossbones"></i></p>');
}
else if (resultat == 'joueur') {
  document.write('<p>Vous gagnez !</p>');
  document.write('<p><i class="fas fa-5x fa-trophy"></i></p>');
}
else if (resultat == 'nul') {
  document.write('<p>Match null !</p>');
  document.write('<p><i class="fas fa-5x fa-equals"></i></p>');
}
else {
  document.write('<p><i class="fas fa-5x fa-bug"></i></i></p>');
}
