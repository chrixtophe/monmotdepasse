'use strict';

/*
 * Variables
 */

var nombreDeCaracteres;
var minuscules = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var majuscules = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var chiffres = function () {
	var randomNumber = Math.floor(Math.random()*10);
	return randomNumber;
};
var caractèresSpeciaux = ["&gt;","&lt;",",",";",".","/",":","&amp;","|",")","(","~","#","{","}","[","]","-","=","$","*","!","?","+"];
var resultat = [];

/*
 * Fonctions d'affichage
 */

// Gère l'affichage des messages à l'endroit souhaité
function print(message, id) {
  var outputDiv = document.getElementById(id);
  outputDiv.innerHTML = message;
}

// Affiche le resultat final dans le placeholder de l'élement qui a l'id motDePasse
function printResult(message) {
  document.getElementById('motDePasse').placeholder=message;
}

/*
 * Vérifier les paramètre de l'utilisateur
 */

function checkForm() {
	var inputMinuscules = document.getElementById('minuscules').checked;
	var inputMajuscules = document.getElementById('majuscules').checked;
	var inputChiffres = document.getElementById('chiffres').checked;
	var inputCaracteresSpeciaux = document.getElementById('caracteresspeciaux').checked;
	nombreDeCaracteres = document.getElementById('nombreDeCaracteres').value;
}





// Lors du clic
	// Est-ce que des options sont cochées?
		// Si aucune option n'est séléctionnée, arrêter

	// Est-ce que l'option lettres minuscules est cochée?
	// Est-ce que l'option lettres majuscules est cochée?
	// Est-ce que l'otpion chiffres est cochée?
	// Est-ce que l'otpion caractères spéciaux est cochée?
	// Combien de caractères doit avoir le chiffre généré?

	// Tableau avec toutes les options
	// Choix aléatoire de n valeurs dans le tableau
	// Retourne les n valeurs

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