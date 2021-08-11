// Déclaration des variables
let nbr1 = prompt('Entrez le nombre 1 : ');
let nbr2 = prompt('Entrez le nombre 2 : ');
let total;
let reste;
// Conversion de type string vers nombre
nbr1 = Number(nbr1);
console.log(nbr1);
nbr2 = Number(nbr2);
console.log(nbr2);
// Addition
total = nbr1 + nbr2;
document.write('<p>'+nbr1+' + '+nbr2+' = '+total+'</p>');
// Soustraction
total = nbr1 - nbr2;
document.write('<p>'+nbr1+' - '+nbr2+' = '+total+'</p>');
// Multiplication
total = nbr1 * nbr2;
document.write('<p>'+nbr1+' * '+nbr2+' = '+total+'</p>');
// Division
if (nbr2 !== 0) {
    total = (nbr1 / nbr2).toFixed(2);
    reste = nbr1 % nbr2;
    document.write('<p>'+nbr1+' / '+nbr2+' = '+total+'</p>');
    document.write('<p>'+nbr1+' % '+nbr2+' = '+reste+'</p>');
}
else {
    document.write('Division par zéro impossible');
}
