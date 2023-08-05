 
    




 function observeAndAnimate(images) {
    const observer = new IntersectionObserver(function(entries, observer) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('animate');
          }, 100);
          
          observer.unobserve(entry.target);
        }
      });
    });
  
    images.forEach(image => {
      observer.observe(image);
    });
  }

// **********
//   Pour toutes les pages avec le nouveau css 
// **********

  // Appelle la fonction pour le premier groupe d'images
  const titre = document.querySelectorAll('.auteur');
  observeAndAnimate(titre);
  // Appelle la fonction pour le deuxième groupe d'images
  const bouton = document.querySelectorAll('#collaborateurs');
  observeAndAnimate(bouton);

  const description = document.querySelectorAll('#description');
  observeAndAnimate(description);

  const video = document.querySelectorAll('#aperçu');
  observeAndAnimate(video);

// ********
// Pour la page index
// ********
  const h1 = document.querySelectorAll('h1');
  observeAndAnimate(h1);

  const var1 = document.querySelectorAll('#images');
  observeAndAnimate(var1);
  
  const variable2 = document.querySelectorAll('.title');
  observeAndAnimate(variable2);

  const variable3 = document.querySelectorAll('.vid');
  observeAndAnimate(variable3);

  const variable4 = document.querySelectorAll('.monEp');
  observeAndAnimate(variable4);

  const variable5 = document.querySelectorAll('.cursor');
  observeAndAnimate(variable5);

  const variable6 = document.querySelectorAll('#cellule_textIntro');
  observeAndAnimate(variable6);

  const variable7 = document.querySelectorAll('.description');
  observeAndAnimate(variable7);

  const variable8 = document.querySelectorAll('#pseudo');
  observeAndAnimate(variable8);

  const variable9 = document.querySelectorAll('#email');
  observeAndAnimate(variable9);

  const variable10 = document.querySelectorAll('#msg');
  observeAndAnimate(variable10);

  const variable11 = document.querySelectorAll('.valid');
  observeAndAnimate(variable11);
// ********
// Pour la page de bulle 
// ********
  const imagesGroup1 = document.querySelectorAll('.bulledeau');
  observeAndAnimate(imagesGroup1);
  
  const imagesGroup2 = document.querySelectorAll('#H2O');
  observeAndAnimate(imagesGroup2);

// ********
// Pour la page de Saki 
// ******** 
 
const saki = document.querySelectorAll('#saki');
observeAndAnimate(saki);
  
  
const network = document.querySelectorAll('.social-network');
observeAndAnimate(network);


// page AMVS

const gallery = document.querySelectorAll('.gallery');
observeAndAnimate(gallery);

const desc = document.querySelectorAll('.desc');
observeAndAnimate(desc);

const container = document.querySelectorAll('#container');
observeAndAnimate(container);

const crea = document.querySelectorAll('.crea');
observeAndAnimate(crea);