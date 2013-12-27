<form method="post" action="index.php" class="form-search">
    <fieldset>
        <legend class="text-info text-center">Choisissez parmi les options et obtenez votre nouveau mot de passe immédiatement :</legend>
        <div class="text-center text-warning password-container">
            <input type="submit" value="G&eacute;n&eacute;rer un nouveau mot de passe!" name="generate" class="btn btn-large btn-primary"/>
            <input type="text" name="resultat" class="span2 strong-password" id="appendedInputButton" value="<?php echo $motdepasse; ?>" />
        </div>
    </fieldset>
    <fieldset>
        <legend>Options :</legend>
        <label for="minuscules" class="checkbox"><input type="checkbox" name="minuscules" id="minuscules" checked="checked" />Lettres minuscules</label><br />
        <label for="majuscules" class="checkbox" ><input type="checkbox" name="majuscules" id="majuscules" checked="checked" />Lettres majuscules</label><br />
        <label for="chiffres" class="checkbox" ><input type="checkbox" name="chiffres" id="chiffres" checked="checked" />Chiffres</label><br />
        <label for="caracteresspeciaux" class="checkbox" ><input type="checkbox" name="caracteresspeciaux" id="caracteresspeciaux" />Caract&egrave;res speciaux</label><br />
        <label for="longueur" >Combien de caract&egrave;res aura le mot de passe ?</label>
        <select name="longueur" id="longueur" class="span1">
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10" selected="selected">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
        </select>
    </fieldset>
</form>
