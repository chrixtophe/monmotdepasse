'use strict';

/*
    <p class="text-success">...</p>
    <p class="text-info">...</p>
    <p class="text-warning">...</p>
    <p class="text-danger">...</p>
*/

    // Si le code fait moins de 6 caractères -> faible
    // Si le code fait entre 6 et 8 caractères
        // avec des chiffres, des majuscules et des caractères spéciaux -> moyen
        // sans chiffres ou sans majuscules ou sans caractères spéciaux -> faible
    // Si le code fait entre 8 et 10 chiffres
        // avec des chiffres, des majuscules et des caractères spéciaux -> moyen
        // sans chiffres ou sans majuscules ou sans caractères spéciaux -> faible
    // SI le code fait plus de 10 chiffres
        // avec des chiffres, des majuscules et des caractères spéciaux -> fort
        // sans chiffres ou sans majuscules ou sans caractères spéciaux -> moyen