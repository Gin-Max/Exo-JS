'use strict';

// Déclaration des variables
let max;
let ligne;
let colonne;

// Demande à l'utilisateur d'entrer un nombre
do {
	max = parseInt(window.prompt('Entrez un nombre entre 2 et 30 :'));
	console.log(max);
}
while (isNaN(max) || max < 2 || max > 30);

document.write('<table>');
document.write('<caption>Table de multiplications</caption>');
// Boucle sur le numéro de ligne
for(ligne = 1; ligne <= max; ligne++) {
	document.write('<tr>');
	let result;
	// Boucle sur le numéro de colonne
	for(colonne = 1; colonne <= max; colonne++)
	{
		result = ligne * colonne;
		console.log(result);
		if (ligne != colonne) {
			document.write(`<td>${result}</td>`);
		}
		else {
			document.write(`<td class="same">${result}</td>`);
		}
	}
	document.write('</tr>');
}
document.write('</table>');
