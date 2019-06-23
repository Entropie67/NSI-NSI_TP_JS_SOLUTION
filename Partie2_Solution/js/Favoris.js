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
    let titreElt = document.createElement("a");
    titreElt.href = lien.url;
    titreElt.style.color = "#FF8C00";
    titreElt.style.textDecoration = "none";
    titreElt.style.marginRight = "5px";
    titreElt.appendChild(document.createTextNode(lien.titre));

    let urlElt = document.createElement("span");
    urlElt.appendChild(document.createTextNode(lien.url));

    // Cette ligne contient le titre et l'URL du lien
    let ligneTitreElt = document.createElement("h4");
    ligneTitreElt.style.margin = "0px";
    ligneTitreElt.appendChild(titreElt);
    ligneTitreElt.appendChild(urlElt);

    // Cette ligne contient l'auteur
    let ligneDetailsElt = document.createElement("span");
    ligneDetailsElt.appendChild(document.createTextNode("Présenté par " + lien.auteur));

    let divLienElt = document.createElement("div");
    divLienElt.classList.add("lien");
    divLienElt.appendChild(ligneTitreElt);
    divLienElt.appendChild(ligneDetailsElt);

    return divLienElt;
}

var contenuElt = document.getElementById("contenu");
// Parcours de la liste des liens et ajout d'un élément au DOM pour chaque lien
listeLiens.forEach(function (lien) {
    var lienElt = creerElementLien(lien);
    contenuElt.appendChild(lienElt);
});

// Crée et renvoie un élément DOM de type input
function creerElementInput(placeholder, taille) {
    var inputElt = document.createElement("input");
    inputElt.type = "text";
    inputElt.setAttribute("placeholder", placeholder);
    inputElt.setAttribute("size", taille);
    inputElt.setAttribute("required", "true");
    return inputElt;
}

var ajouterLienElt = document.getElementById("ajoutLien");
// Gère l'ajout d'un nouveau lien
ajouterLienElt.addEventListener("click", function () {
    var auteurElt = creerElementInput("Entrez le présentateur", 20);
    var titreElt = creerElementInput("Entrez le titre du lien", 40);
    var urlElt = creerElementInput("Entrez l'URL du lien", 40);

    var ajoutElt = document.createElement("input");
    ajoutElt.type = "submit";
    ajoutElt.value = "Ajouter";

    var formAjoutElt = document.createElement("form");
    formAjoutElt.appendChild(auteurElt);
    formAjoutElt.appendChild(titreElt);
    formAjoutElt.appendChild(urlElt);
    formAjoutElt.appendChild(ajoutElt);

    var p = document.querySelector("p");
    // Remplace le bouton d'ajout par le formulaire d'ajout
    p.replaceChild(formAjoutElt, ajouterLienElt);

    // Ajoute le nouveau lien
    formAjoutElt.addEventListener("submit", function (e) {
        e.preventDefault(); // Annule la publication du formulaire

        var url = urlElt.value;
        // Si l'URL ne commence ni par "http://" ni par "https://"
        if ((url.indexOf("http://") !== 0) && (url.indexOf("https://") !== 0)) {
            // On la préfixe par "http://"
            url = "http://" + url;
        }

        // Création de l'objet contenant les données du nouveau lien
        var lien = {
            titre: titreElt.value,
            url: url,
            auteur: auteurElt.value
        };

        var lienElt = creerElementLien(lien);
        // Ajoute le nouveau lien en haut de la liste
        contenuElt.insertBefore(lienElt, contenuElt.firstChild);

        // Remplace le formulaire d'ajout par le bouton d'ajout
        p.replaceChild(ajouterLienElt, formAjoutElt);

        // Création du message d'information
        var infoElt = document.createElement("div");
        infoElt.classList.add("info");
        infoElt.textContent = "Le lien \"" + lien.titre + "\" a bien été ajouté.";
        p.insertBefore(infoElt, ajouterLienElt);
        // Suppresion du message après 2 secondes
        setTimeout(function () {
            p.removeChild(infoElt);
        }, 2000);
    });
});