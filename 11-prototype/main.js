'use strict';

function Adresse(voie, numero, codePostal, ville, pays) {
  console.log('adresse');
  this.voie = voie;
  this.numero = numero;
  this.codePostal = codePostal;
  this.ville = ville;
  this.pays = pays;
}

Adresse.prototype.affiche = function() {
  console.log(this.codePostal);
  // Créer une variable para qui définit un nouveau paragraphe
  let para = document.createElement("p");
  // Ajouter la variable para comme enfant de display
  display.appendChild(para);
  // Remplir para avec le contenu qu'on souhaite afficher
  para.innerHTML = this.numero + ' ' + this.voie + '<br> ' + this.codePostal + ' ' + this.ville + ', ' + this.pays;
}

//
// CODE PRINCIPAL
//

// Récupérer la div display dans laquelle on va afficher les infos
let display = document.getElementById('display');
display.innerHTML = '';
// Création de l'adresse 1
let adresse1 = new Adresse("Avenue Bernadette", 63, 59110, "La Madeleine", 'FR');
// Affichage de l'adresse 1
adresse1.affiche();
// Création de l'adresse 2
let adresse2 = new Adresse("Avenue de l'Avenir", 14, 59650, "Villeneuve d'Ascq", 'FR');
// Affichage de l'adresse 2
adresse2.affiche();
