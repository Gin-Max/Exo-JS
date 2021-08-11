'use strict';

// Déclaration des variables et des constantes
const MAX = 10;
let ligne;
let colonne;

document.write('<table>');
document.write('<caption>Table de multiplications</caption>');
// Boucle sur le numéro de ligne
for(ligne = 1; ligne <= MAX; ligne++) {
	document.write('<tr>');
	let result;
	// Boucle sur le numéro de colonne
	for(colonne = 1; colonne <= MAX; colonne++)
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
