// alert("bonjour")

// appel

// Écrire un code JavaScript pour attendre que le contenu du DOM soit chargé à l'aide de l'événement DOMContentLoaded.
// Dans le gestionnaire d'événement, sélectionnez les éléments color-box et change-color-btn en utilisant document.getElementById().
document.addEventListener ("DOMContentLoaded", function () {
    const divColor = document.getElementById ("color-box");
    const btnColor = document.getElementById ("change-color-btn");
    // console.log ("div:", divColor, "bouton:", btnColor);

    // Implémentez une fonction, appelons-la getRandomColor(), qui génère une couleur aléatoire. Vous pouvez utiliser des valeurs hexadécimales ou RVB.
    
// fonction de changement de couleur
    function getRandomColor() {
    return "#" +Math.random(). toString(16).slice(-6)
    }

    // Ajoutez un écouteur d'événement à l'élément change-color-btn. Lorsqu'il est cliqué, l'écouteur d'événement doit déclencher une fonction qui change la couleur d'arrière-plan de la boîte de couleurs en une couleur aléatoire générée par la fonction getRandomColor().
    // action appel changement de couleur au click
    btnColor.addEventListener("click", function (){
        // console.log(getRandomColor())
        divColor.style.backgroundColor = getRandomColor()
    })
});
// Test:
// Ouvrez votre fichier HTML dans un navigateur Web.
// Cliquez sur le bouton "Changez la couleur" et observez la couleur de la boîte changer dynamiquement. -->