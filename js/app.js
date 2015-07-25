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
var caracteresSpeciaux = ["&gt;","&lt;",",",";",".","/",":","&amp;","|",")","(","~","#","{","}","[","]","-","=","$","*","!","?","+"];
var resultat = [];

/*
 * Fonction d'affichage
 */

// Gère l'affichage des messages à l'endroit souhaité
function affiche(message, id) {
	var outputDiv = document.getElementById(id);
	outputDiv.innerHTML = message;
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

	if (nombreDeCaracteres < 8) {
		var messageAvertissement = 'Il est conseillé de selectionner au moins 10 caractères pour une protection plus forte';
		var pMessage = document.getElementById("information");
		pMessage.className = 'text-warning';
		pMessage.innerHTML += messageAvertissement;
	}

	if (inputMinuscules == false || inputMajuscules == false || inputChiffres == false) {
		var messageAvertissement = '<p class="text-warning">Il est vivement conseillé de mélanger majuscules, minuscules et chiffres.</p>';
		var information = document.getElementById('panneauCentral');
		information.innerHTML += messageAvertissement;
	}
}

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