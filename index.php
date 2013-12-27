<?php
// load script
require_once ('./inc/generate.php');
// Header
include_once('./inc/header.php');
?>
<div class="container">
    <?php include_once('./inc/menu.php'); ?>
        <div class="page-header text-center hero-unit">
            <h1>Mon mot de passe</h1>
            <h2>Générateur de mots de passe</h2>
        </div>
        <?php include_once('./inc/form.php');?>

    <?php
    // securite
    include_once('./inc/securite.php');
    // a propos
    include_once('./inc/about.php');
    ?>
</div><!-- .container -->
<?php
// Footer
include_once('./inc/footer.php');
?>
