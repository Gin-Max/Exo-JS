'use strict';

// Déclaration d'un objet json
let cartItems = `[
  {"id":"2","name":"Massage bien-être","price":"60","qte":1},
  {"id":"3","name":"Soin relaxant aux pochons","price":"75","qte":2}
]`;
// Conversion du JSON en tableau
let panier = JSON.parse(cartItems);
console.log(panier);
// Nombre d'éléments du tableau
let imax = panier.length;
let html;
// Si le panier est rempli
if (imax > 0) {
  // Initialisation des compteurs avant la boucle
  let cartItemsCount = 0;
  let cartTotal = 0;
  // Parcourir le tableau avec boucle for of
  for (const article of panier) {
    cartItemsCount += article.qte;
    cartTotal += article.qte * article.price;
  }
  /*for (let i = 0; i < imax; i++) {
    cartItemsCount = cartItemsCount + panier[i].qte;
    cartTotal = cartTotal + (panier[i].qte * panier[i].price);
  }*/
  html = '<p class="montant">Montant total : <strong>'+cartTotal+' €</strong></p>';
  html += '<p class="status">'+cartItemsCount+' article(s)</p>';
}
else {
  html = '<p class="status">Votre panier est vide</p>';
}
document.getElementById("display").innerHTML = html;
