'use strict';

// Déclaration des variables et des constantes
const MAX  = 10;
let ligne;
let colonne;

// Code de départ
for (ligne = 1; ligne <= MAX; ligne++) {
	for (colonne = 1; colonne <= MAX; colonne++)
	{
		console.log(ligne * colonne);
	}
}
