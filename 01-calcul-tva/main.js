'use strict';

// Déclaration d'une constante.
const TAUX_TVA = 20;

// Déclaration des variables.
let montant_ht;
let montant_tva;
let montant_ttc;

// Saisie du montant HT
montant_ht = parseFloat(window.prompt('Entrez le montant HT ?'));
// Calcul du montant de la TVA
montant_tva = montant_ht * TAUX_TVA / 100;
montant_ttc = montant_ht + montant_tva;

// Affichage des informations
document.write(`<p>Montant HT = ${montant_ht}<br>Montant TVA = ${montant_tva}<br>Montant TTC = ${montant_ttc}</p>`);