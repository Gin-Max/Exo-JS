"use strict";

// Fonction de saisie d'un nombre valide
function saisie_nombre(question) {
	let nbr;
	// Boucle do while pour saisir une valeur entière
	do
	{
	  nbr = parseInt(window.prompt(question));
	}
	while(isNaN(nbr) == true);
	return nbr;
}

// Fonction : additionner 2 nombres
function addition(nombre1, nombre2)
{
	let total = nombre1 + nombre2;
	document.write(`<p>${nombre1} + ${nombre2} = ${total}</p>`);
	return total;
}

// Fonction : soustraire 2 nombres
function soustraction(nombre1, nombre2)
{
	let total = nombre1 - nombre2;
	document.write(`<p>${nombre1} - ${nombre2} = ${total}</p>`);
	return total;
}

// Fonction : multiplier 2 nombres
function multiplication(nombre1, nombre2)
{
	let total = nombre1 * nombre2;
	document.write(`<p>${nombre1} * ${nombre2} = ${total}</p>`);
	return total;
}

// Fonction : diviser 2 nombres
function division(nombre1, nombre2)
{
	if (nombre2 != 0) {
		let total = nombre1 / nombre2;
		let reste = nombre1 % nombre2;
		if (reste > 0) {
			total = total.toFixed(2);
		}
		document.write(`<p>${nombre1} / ${nombre2} = ${total}</p>`);
		return total;
	}
	else {
		return '<p>Division par zéro impossible</p>';
	}
}

let nbr1 = saisie_nombre('Entrez un 1er nombre entier :');
let nbr2 = saisie_nombre('Entrez un 2ème nombre entier :');

//console.log(addition(10, 5));
//console.log(multiplication(20, 30));

// Appel de la fonction addition
addition(nbr1, nbr2);

// Appel de la fonction soustraction
soustraction(nbr1, nbr2);

// Appel de la fonction multiplication
multiplication(nbr1, nbr2);

// Appel de la fonction division
division(nbr1, nbr2);
