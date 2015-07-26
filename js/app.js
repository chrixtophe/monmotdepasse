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
}
var caracteresSpeciaux = ["&gt;","&lt;",",",";",".","/",":","&amp;","|",")","(","~","#","{","}","[","]","-","=","$","*","!","?","+"];
var resultat = [];
var messageAvertissement = "";

/*
 * Fonction d'affichage
 */

// Gère l'affichage des messages à l'endroit souhaité
function affiche(message, id, userClass) {
	var outputDiv = document.getElementById(id);
	outputDiv.innerHTML = message;
	outputDiv.className += userClass;
}

/*
 * Générateur
 */

function generate() {
	console.log("generation du mdp");
}

/*
 * Vérifier les paramètre de l'utilisateur
 */

function checkForm(evt) {
	evt.preventDefault();  	// Empêche le formulaire de se recharger
    evt.stopPropagation();  // Empêche le formulaire de se recharger

    document.getElementById('information').innerHTML = ""; // Supprime le message précédent

	var inputMinuscules = document.getElementById('minuscules').checked;
	var inputMajuscules = document.getElementById('majuscules').checked;
	var inputChiffres = document.getElementById('chiffres').checked;
	var inputCaracteresSpeciaux = document.getElementById('caracteresspeciaux').checked;
	nombreDeCaracteres = document.getElementById('nombreDeCaracteres').value;

	if (inputMinuscules != true && inputMajuscules != true && inputChiffres != true && inputCaracteresSpeciaux != true) {
		messageAvertissement = "Vous devez choisir au moins une option ci-dessous";
		affiche(messageAvertissement, 'information', 'text-warning');
		generate();
	} else if (inputMinuscules != true || inputMajuscules != true || inputChiffres != true || inputCaracteresSpeciaux != true) {
		messageAvertissement = "Il est conseillé de mélanger autant de caractères que possibles pour une meilleure sécurité";
		affiche(messageAvertissement, 'information', 'text-info');
		generate();
	} else {
		generate();
	}
}

// Trouve le formulaire sur la page et lui attache un handler
var form = document.querySelector('#userForm');
form.addEventListener('submit', checkForm);  // Chaque fois que le formulaire est soumit on appel checkForm


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