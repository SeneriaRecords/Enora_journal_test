// Sélectionner l'élément <h1>
const header = document.querySelector('.watermark h1');

// Fonction qui gère le changement de position au scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 20) { // Si on a défilé de plus de 100px
        header.classList.add('fixed'); // Ajouter la classe "fixed"
        setTimeout(() => {
            header.classList.add('show'); // Ajouter l’effet de fade-in après ajout de "fixed"
        }, 300); // Délais pour donner l’effet de fade-out avant
    } else {
        header.classList.remove('fixed'); // Supprimer la classe "fixed"
        header.classList.remove('show'); // Supprimer l’effet de fade-in
    }
});




