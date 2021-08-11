'use strict';

// Initialisation du tableau
//let notes = Array(18, 4, 12, 10, 11, 0, 16, 14, 17);
let notes = Array(18, 5, 12, 10, 11, 2, 16, 14, 17, 15);
// Nombre d'éléments du tableau
let imax = notes.length;
// Initialisation d'une variable total avec la valeur 0
let total = 0;
// Boucle for sur le tableau
for (let i = 0; i < imax; i++)
{
  console.log(notes[i]);
  // Incrémenter le total
  total = total + notes[i];
}

// Calcul de la moyenne des notes
document.write('<h2>Statistiques</h2>');
let note_moyenne = total / imax;
document.write('<p>Note moyenne = '+note_moyenne.toFixed(2)+'</p>');
// Calcul de la note minimale avec Math.min
document.write('<p>Note minimum = '+Math.min(...notes)+'</p>');
// Calcul de la note maximale avec Math.max
document.write('<p>Note maximum = '+Math.max(...notes)+'</p>');
