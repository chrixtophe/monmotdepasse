'use strict';

/*
 * Variables
 */

var nombreDeCaracteres;
var minuscules = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var majuscules = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var chiffres = [0,1,2,3,4,5,6,7,8,9];
var caracteresSpeciaux = ["&gt;","&lt;",",",";",".","/",":","&amp;","|",")","(","~","#","{","}","[","]","-","=","$","*","!","?","+"];
var messageAvertissement = "";
var monMotDePasse = [];

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

function generate(min, maj, chiff, spe, nombre) {

	var statutMinuscules = min;
	var statutMajuscules = maj;
	var statutChiffres = chiff;
	var statutSpeciaux = spe;
	var statutNombre = nombre;
	var resultat = [];

	if (statutMinuscules) {
		monMotDePasse = monMotDePasse.concat(minuscules);
	}
	if (statutMajuscules) {
		monMotDePasse = monMotDePasse.concat(majuscules);
	}
	if (statutChiffres) {
		monMotDePasse = monMotDePasse.concat(chiffres);
	}
	if (statutSpeciaux) {
		monMotDePasse = monMotDePasse.concat(caracteresSpeciaux);
	}

	var cle = function () {
		var cleAuHasard = Math.floor(Math.random() * monMotDePasse.length) + 1;
		return cleAuHasard;
	}

	for (var i = 0; i < statutNombre; i++) {
		resultat = resultat.concat(monMotDePasse[cle()]);
	}
	affiche(resultat.join(''), 'motDePasse', '');
	monMotDePasse = [];
}

/*
 * Vérifier les paramètres de l'utilisateur
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

	// Messages d'avertissement si une option n'est pas cochée
	if (inputMinuscules != true && inputMajuscules != true && inputChiffres != true && inputCaracteresSpeciaux != true) {
		messageAvertissement = "Vous devez choisir au moins une option ci-dessous";
		affiche(messageAvertissement, 'information', 'text-danger');
	} else if (inputMinuscules != true || inputMajuscules != true || inputChiffres != true || inputCaracteresSpeciaux != true) {
		messageAvertissement = "Il est conseillé de mélanger autant de caractères que possible pour une meilleure sécurité";
		affiche(messageAvertissement, 'information', 'text-info');
		generate(inputMinuscules, inputMajuscules, inputChiffres, inputCaracteresSpeciaux, nombreDeCaracteres);
	} else {
		generate(inputMinuscules, inputMajuscules, inputChiffres, inputCaracteresSpeciaux, nombreDeCaracteres);
	}
}

// Trouve le formulaire sur la page et lui attache un handler
var form = document.querySelector('#userForm');
form.addEventListener('submit', checkForm);  // Chaque fois que le formulaire est soumit on appel checkForm
