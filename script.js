document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('navbar a');
    const homelink = document.querySelectorAll('home-link');
    const scrollContainer = document.getElementById('scroll-container');
    const born = "2004-02-23";

    // Intercepter l'événement de la molette
scrollContainer.addEventListener('wheel', (event) => {
    event.preventDefault(); // Empêche le comportement par défaut
    scrollContainer.scrollLeft += event.deltaY * 2; // Rendre le défilement plus fluide et réactif
});

links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            // Désactiver la classe 'jeu' pour tous les liens
            links.forEach(link => link.classList.remove('overflowX'));

            // Activer la classe 'jeu' pour le lien cliqué s'il n'est pas le logo
            if (link !== homeLink) {
                link.classList.add('overflowX');
                homeLink.classList.remove('overflowY');
            } else {
                // Activer la classe 'active-logo' pour le logo et désactiver 'jeu'
                homeLink.classList.add('overflowY');
                links.forEach(link => link.classList.remove('overflowX'));
            }
        });
    });

      // Fonction pour changer le contenu
function showPage(pageId) {
const pages = document.querySelectorAll('.page-content');
pages.forEach(page => {
  page.style.display = 'none';
});
const pageToShow = document.getElementById(pageId);
if (pageToShow) {
  pageToShow.style.display = 'block';
}
}

// Gestionnaire pour les liens de navigation
document.querySelectorAll('.page').forEach(link => {
link.addEventListener('click', function(event) {
  event.preventDefault();
  const pageId = this.getAttribute('data-page');
  showPage(pageId);
});
});

// Afficher la page par défaut
showPage('home');

function calculerAge(born) {
  const naissance = new Date(born);
  const aujourdHui = new Date();

  let age = aujourdHui.getFullYear() - naissance.getFullYear();
  const mois = aujourdHui.getMonth() - naissance.getMonth();

  if (mois < 0 || (mois === 0 && aujourdHui.getDate() < naissance.getDate())) {
      age--;
  }

  return age;
}

// Fonction pour afficher l'âge
function afficherAge() {
  const age = calculerAge(born);
  const ageAffiche = document.querySelector(".age-");

  if (ageAffiche) {
      ageAffiche.textContent = isNaN(age) || age < 0 ? "?" : `${age}`;
  }
}

afficherAge();

function calculerAnnee() {
  const aujourdHui = new Date();
  return aujourdHui.getFullYear();
}

function afficherAnnee() {
  const annee = calculerAnnee();
  const anneesAffichees = document.querySelectorAll(".year-");

  anneesAffichees.forEach((element) => {
    element.textContent = isNaN(annee) || annee < 0 ? "?" : `${annee}`;
  });
}

afficherAnnee();



});
