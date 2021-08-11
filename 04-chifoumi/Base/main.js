'use strict';

// Déclaration des variables
let outils = ['pierre', 'feuille', 'ciseau'];
let joueur;
let ordinateur;
let random;
const icoPerdu = '<i class="fas fa-2x fa-skull-crossbones"></i>';
const icoGagne = '<i class="fas fa-2x fa-trophy"></i>';
const icoEqual = '<i class="fas fa-2x fa-equals"></i>';

// Récupération du choix du joueur.
joueur = window.prompt('Choisissez : pierre, feuille ou ciseau ?', '');
// Conversion du choix du joueur en minuscules.
joueur = joueur.toLowerCase();
document.write("<p>Vous avez choisi : <strong>" + joueur + '</strong></p>');
// Récupération d'un nombre aléatoire entre 0 et 2 inclus.
random = Math.floor(Math.random() * 3);
console.log(random);
ordinateur = outils[random];
console.log(joueur);
console.log(ordinateur);
document.write("<p>L'ordinateur a choisi : <strong>" + ordinateur + '</strong></p>');

if (ordinateur == joueur)
{
  document.write('<p>'+icoEqual+'<br>Match null !</p>');
}
else
{
  // Début du jeu
  if (joueur == 'ciseau') {
    if (ordinateur == 'pierre') {
      document.write('<p>'+icoPerdu+'<br>La pierre écrase le ciseau</p>');
    }
    else {
      document.write('<p>'+icoGagne+'<br>Le ciseau découpe la feuille</p>');
    }
  }
  else if (joueur == 'feuille') {
    if (ordinateur == 'pierre') {
      document.write('<p>'+icoGagne+'<br>La feuille enveloppe la pierre</p>');
    }
    else {
      document.write('<p>'+icoPerdu+'<br>Le ciseau découpe la feuille</p>');
    }
  }
  else if (joueur == 'pierre') {
    if (ordinateur == 'feuille') {
      document.write('<p>'+icoPerdu+'<br>La feuille enveloppe la pierre</p>');
    }
    else {
      document.write('<p>'+icoGagne+'<br>La pierre écrase le ciseau</p>');
    }
  }
  else {
    document.write('<p>Votre choix est invalide</p>');
  }
}
