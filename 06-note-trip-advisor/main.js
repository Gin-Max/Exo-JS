'use strict';

let note;
do
{
    note = parseInt(window.prompt('Veuillez saisir un nombre entre 1 et 5 :'));
}
while (isNaN(note) || note < 1 || note > 5);
console.log(note);

let libelle = '';
switch (note) {
  case 1:
    libelle = 'Horrible';
    break;
  case 2:
    libelle = 'Médiocre';
    break;
  case 3:
    libelle = 'Moyen';
    break;
  case 4:
    libelle = 'Très bon';
    break;
  case 5:
    libelle = 'Excellent';
    break;
  }

document.write(`<p>Libellé correspondant à la note ${note} : <strong>${libelle}</strong> `);
for (let i = 1; i <= note; i++) {
    document.write('<i class="fas fa-star"></i>');
}
document.write('</p>');
