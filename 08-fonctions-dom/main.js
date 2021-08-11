"use strict";

// Fonction de saisie d'un nombre valide
function saisie_nombre(question) {
	let nbr;
	// Boucle do while pour saisir une valeur entière
	do {
		nbr = parseInt(window.prompt(question));
	}
	while (isNaN(nbr) == true);
	return nbr;
}

// Fonction : additionner 2 nombres
function addition(nombre1, nombre2)
{
	let total = nombre1 + nombre2;
	document.querySelector("#operation1 .nbr1").textContent = nombre1;
	document.querySelector("#operation1 .nbr2").textContent = nombre2;
	document.querySelector("#operation1 .result").textContent = total;
	return total;
}

// Fonction : soustraire 2 nombres
function soustraction(nombre1, nombre2) {
	let total = nombre1 - nombre2;
	document.querySelector("#operation2 .nbr1").textContent = nombre1;
	document.querySelector("#operation2 .nbr2").textContent = nombre2;
	document.querySelector("#operation2 .result").textContent = total;
}

// Fonction : multiplier 2 nombres
function multiplication(nombre1, nombre2) {
	let total = nombre1 * nombre2;
	document.querySelector("#operation3 .nbr1").textContent = nombre1;
	document.querySelector("#operation3 .nbr2").textContent = nombre2;
	document.querySelector("#operation3 .result").textContent = total;
}

let nbr1 = saisie_nombre('Entrez un 1er nombre entier :');
let nbr2 = saisie_nombre('Entrez un 2ème nombre entier :');

// Appel de la fonction addition
addition(nbr1, nbr2);

// Appel de la fonction soustraction
soustraction(nbr1, nbr2);

// Appel de la fonction multiplication
multiplication(nbr1, nbr2);