/**
 * Jeu du nombre mystère
 * @author  Rayan Broquet
 * @version 0.1
 * @since   2018-09-09 (date de création)
 */

// Main IIFE (Immediately-Invoked Function Expression, se prononce "iffy")
(function main() {
    'use strict';

    /**
     * Retourne un nombre entier aléatoire compris entre min et max
     * @param min
     * @param max
     * @returns {number}
     */

    function tireNombre(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    const MIN = 1;
    const MAX = 100;

    let nombreMystere = tireNombre(MIN, MAX);
    let nombreEssaye = 0;
    let nombreCorrecte = false;

    do {
        let nombreChoisi = Number(prompt('Veuillez choisir un nombre entre 1 et 100'));

        if (isNaN(nombreChoisi) || nombreChoisi > 100 || nombreChoisi < 1) {
            alert('Saisie invalide !');
        } else {
            nombreEssaye++;
            if (nombreChoisi === nombreMystere) {
                alert(`Vous avez trouvé en ${nombreEssaye} essaies`);
                break;
            } else if (nombreMystere > nombreChoisi) {
                alert('C\'est plus');
            } else {
                alert('C\'est moins');
            }
        }
    } while (!nombreCorrecte);
}()); // main IIFE
