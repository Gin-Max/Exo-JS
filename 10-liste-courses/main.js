'use strict';

let listeCourses = new Array();
let index;

//
// DÉFINITION DES FONCTIONS
//

function afficher() {
	console.log(listeCourses);
	// Nombre de produits dans la liste
	let imax = listeCourses.length;
	// Initialisation du code HTML à vide
	let html = '';
	// Boucle sur les produits
	for (let i = 0; i < imax; i++) {
		let checkbox = '<input type="checkbox" name="element" value="'+listeCourses[i]+'">'+listeCourses[i]+'<br>';
		html = html + checkbox;
	}
	// Remplacer le contenu du détail
	document.getElementById('detail').innerHTML = html;
	// Affichage du nombre de produits ou liste vide
	if (imax > 0) {
		document.querySelector('.legende').textContent = imax + ' produit(s)';
	}
	else {
		document.querySelector('.legende').textContent = 'La liste est vide';
	}
}

function ajouter() {
	console.log('Ajouter');
	// Aller chercher la valeur entrée dans la case produit
	let produit = document.getElementById('produit').value;
	// Conversion en minuscules
	produit = produit.toLowerCase();
	// Suppression des espaces avant et après
	produit = produit.trim();
	// Si le produit est rempli
	if (produit != '') {
		// Le produit est-il déjà dans la liste ?
		index = listeCourses.indexOf(produit);
		console.log(index);
		// Si le produit n'existe pas déjà dans la liste (-1 == non trouvé)
		if (index === -1) {
			// Ajout du produit à la liste
			listeCourses.push(produit);
			document.getElementById('debug').textContent = 'Produit ajouté';
			afficher();
		}
		document.getElementById('produit').value = '';
	}
}

function trier() {
	console.log('Trier');
	if (listeCourses.length > 0) {
		listeCourses.sort();
		document.getElementById('debug').textContent = 'Liste triée';
		afficher();
	}
}

function supprimer() {
	console.log('Supprimer');
	if (listeCourses.length > 0) {
		let elements = document.getElementsByName('element');
		let imax = elements.length;
		let count = 0;
		for (let i = 0; i < imax; i++) {
			// La checkbox a t'elle été cochée ?
			if (elements[i].checked) {
				// Suppression du produit de la liste de courses
				let index = listeCourses.indexOf(elements[i].value);
				if (index != -1) {
					// Suppression du produit de la liste de courses
					listeCourses.splice(index, 1);
					count++;
				}
			}
		}
		document.getElementById("debug").textContent = count + ' produit(s) supprimé(s)';
		afficher();
	}
}

function vider() {
	console.log('Vider');
	if (listeCourses.length > 0) {
		// Remplacer la liste actuelle par une liste vide
		listeCourses = [];
		document.getElementById('debug').textContent = 'Liste vidée';
		afficher();
	}
}

//
// CODE PRINCIPAL
//

// Attendre que le document HTML initial soit complètement chargé et analysé
document.addEventListener("DOMContentLoaded",function() {
	// Effacer le contenu de la console
	console.clear();
	// Mettre le focus sur l'input produit
	document.getElementById("produit").focus();
	// Définition des écouteurs d'événéments
	document.getElementById('btnAjouter').addEventListener('click', ajouter);
	document.getElementById('btnTrier').addEventListener('click', trier);
	document.getElementById('btnSupprimer').addEventListener('click', supprimer);
	document.getElementById('btnVider').addEventListener('click', vider);
	// Trigger de ajout si entrée sur le champ produit
	document.getElementById("produit").addEventListener("keyup", function(event) {
		// Tester si la touche entrée a été activée
		if (event.keyCode === 13) {
			document.getElementById('btnAjouter').click();
		}
	});
});
