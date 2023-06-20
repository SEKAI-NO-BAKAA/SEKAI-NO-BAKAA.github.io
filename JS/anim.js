 
    




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
  
  