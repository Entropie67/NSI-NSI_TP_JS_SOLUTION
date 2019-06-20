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
    var titreLien = document.createElement("a");
    titreLien.href = lien.url;
    titreLien.style.color = "#FF8C00";
    titreLien.style.textDecoration = "none";
    titreLien.style.marginRight = "5px";
    titreLien.appendChild(document.createTextNode(lien.titre));

    var urlLien = document.createElement("span");
    urlLien.appendChild(document.createTextNode(lien.url));

    // Cette ligne contient le titre et l'URL du lien
    var ligneTitre = document.createElement("h4");
    ligneTitre.style.margin = "0px";
    ligneTitre.appendChild(titreLien);
    ligneTitre.appendChild(urlLien);

    // Cette ligne contient l'auteur
    var ligneDetails = document.createElement("span");
    ligneDetails.appendChild(document.createTextNode("Présenté par " + lien.auteur));

    var divLien = document.createElement("div");
    divLien.classList.add("lien");
    divLien.appendChild(ligneTitre);
    divLien.appendChild(ligneDetails);

    return divLien;
}

var contenu = document.getElementById("contenu");
// Parcours de la liste des liens et ajout d'un élément au DOM pour chaque lien
listeLiens.forEach(function (lien) {
    var elementLien = creerElementLien(lien);
    contenu.appendChild(elementLien);
});