/*
TP - Introduction à Javascript pour le Web
*/
// Liste des liens Youtube à afficher. Un lien est défini par :
// - son titre
// - son URL
// - Le proriétaire de la chaine
let listeLiens = [
    {
        titre: "Science étonnante",
        url: "https://www.youtube.com/scienceetonnante",
        auteur: "David Louapre"
    },
    {
        titre: "Grain de philo",
        url: "https://www.youtube.com/channel/UCqA8H22FwgBVcF3GJpp0MQw",
        auteur: " Thibaut Giraud"
    },
    {
        titre: "Grafikart.fr",
        url: "https://www.youtube.com/channel/UCj_iGliGCkLcHSZ8eqVNPDQ",
        auteur: "Grafikart"
    }
];

// Crée et renvoie un élément DOM affichant les données d'un lien
// Le paramètre lien est un objet JS représentant un lien
function creerElementLien(lien) {
    // On commence par créer une balise <a> qui va contenir le titre du lien cliquable.
    var titreLien = document.createElement("a"); // Création d'un élément <a>
    titreLien.href = lien.url; // Ajout du href à la balise <a> crée précédemment
    titreLien.style.color = "#FF8C00"; // Modification du style de la balise <a>
    titreLien.style.textDecoration = "none"; // Modification du style de la balise <a>
    titreLien.style.marginRight = "5px"; // Modification du style de la balise <a>
    titreLien.style.fontWeight = "bolder";
    titreLien.appendChild(document.createTextNode(lien.titre)); // On rajoute à la balise <a> un fils de type texte qui contient le titre du lien

    var urlLien = document.createElement("span"); // Création d'un élément <span>
    urlLien.appendChild(document.createTextNode(lien.url)); // On rajoute à la balise <span> un fils de type texte qui contient l'adresse du lien

    // Cette ligne contient le titre et l'URL du lien
    var ligneTitre = document.createElement("p"); // Création d'un élément <p>
    ligneTitre.style.margin = "0px"; // Modification du style de la balise <p>
    ligneTitre.appendChild(titreLien); // On ajoute à la balise <h4> le fils <a> précédent
    ligneTitre.appendChild(urlLien); // Puis on ajoute à la balise <h4> le fils <span> précédent

    // Cette ligne contient l'auteur
    var ligneDetails = document.createElement("span"); // Création d'un élément <span>
    ligneDetails.appendChild(document.createTextNode("Présenté par " + lien.auteur)); // On ajoute un noeud text à cette balise <span>

    var divLien = document.createElement("div"); // Création d'un élément <div>
    divLien.classList.add("lien"); // On rajoute le nom de class lien à la div, pour qu'elle soit ciblée par le selecteur css .lien
    divLien.appendChild(ligneTitre); // On rajoute dans cette div le <h4> précédent
    divLien.appendChild(ligneDetails); // Puis on rajoute dans cette div le <span> précédent

    return divLien; // La fonction renvoit cette <div>
}

var contenu = document.getElementById("contenu"); // On selectionne notre div d'Id contenu

// Parcours de la liste des liens et ajout d'un élément au DOM pour chaque lien
listeLiens.forEach(function (lien) {  //forEach permet d'applique la fonction à chaque élément d'un tableau
    var elementLien = creerElementLien(lien);
    contenu.appendChild(elementLien); // On ajoute notre div renvoyée par la fonction à notre div contenu.
});