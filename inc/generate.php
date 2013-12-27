<?php
        // Calcul final du mot de passe
        function passwdgenerator ($nb,$valeurs,$nbvaleurs) {

            //Pour la fonction, nb doit être un entier supérieur à 1.
            $resultat=NULL;

            for($i=0;$i<$nb;$i++) {
                $val=$valeurs[rand(0,$nbvaleurs-1)];
                $resultat=$resultat.$val;
            }
            return $resultat;

        }
        
        // Définition des 5 variables Options
        $minuscules=array("a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z");
        $majuscules=array("A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z");
        $chiffres=array(0,1,2,3,4,5,6,7,8,9);
        $caracteresspeciaux=array("&gt;","&lt;",",",";",".","/",":","&amp;","|",")","(","~","#","{","}","[","]","-","=","$","*","!","?","+");
        $longueur=NULL;
        
        // Traitement du formulaire
        if (isset($_POST['generate']) ) {
            $touslescaracteres=array();

            if ((empty($_POST['minuscules'])) && (empty($_POST['majuscules'])) && (empty($_POST['caracteresspeciaux'])) && (empty($_POST['caracteresspeciaux']))) {
                $motdepasse = '1 option obligatoire';
            } else {

                if (isset($_POST['minuscules'])) { 
                    $touslescaracteres=$touslescaracteres + $minuscules; 
                } else if (empty($_POST['minuscules'])) { 
                    $touslescaracteres=$touslescaracteres; 
                }
                if (isset($_POST['majuscules'])) { $touslescaracteres=array_merge($touslescaracteres,$majuscules); }
                if (isset($_POST['chiffres'])) { $touslescaracteres=array_merge($touslescaracteres,$chiffres); }
                if (isset($_POST['caracteresspeciaux']) ) { $touslescaracteres=array_merge($touslescaracteres,$caracteresspeciaux); }
                $longueur=$_POST['longueur'];

                $nbcaracteres=count($touslescaracteres);
                $motdepasse=passwdgenerator($longueur,$touslescaracteres,$nbcaracteres);
            }

        } else {
            $motdepasse='Nouveau mot de passe';
        }
?>