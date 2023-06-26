$(document).ready(function() {

  //Animation des réseaux sociaux
 

  //-----------Toutes pages: zoomer le gros titre au passage de la souris
    //zoomer le titre dans la section accueil
  const titre1 = document.getElementById("titre1");
  const titre2 = document.getElementById("titre2");

  titre1.addEventListener("mouseover", zoomerTitres);
  titre1.addEventListener("mouseout", dezoomerTitres);

  titre2.addEventListener("mouseover", zoomerTitres);
  titre2.addEventListener("mouseout", dezoomerTitres);

  function zoomerTitres() {
  titre1.style.transform = "scale(1.2)";
  titre2.style.transform = "scale(1.2)";
  }

  function dezoomerTitres() {
  titre1.style.transform = "scale(1)";
  titre2.style.transform = "scale(1)";
  }
    //zoomer les titres dans le reste de la page
    // Sélectionnez tous les éléments h1 et h2 
    const headings = document.querySelectorAll('h1, h2:not(#sec1-accueil h1, #sec1-accueil h2)');
  // Parcourez chaque élément et ajoutez les écouteurs d'événements
  headings.forEach((heading) => {
    // Ajoutez l'écouteur d'événement pour le survol de la souris
    heading.addEventListener('mouseover', () => {
      // Appliquez la transformation de zoom
      heading.style.transform = 'scale(1.1)';
    });

    // Ajoutez l'écouteur d'événement lorsque le curseur quitte l'élément
    heading.addEventListener('mouseout', () => {
      // Réinitialisez la transformation de zoom à la valeur par défaut
      heading.style.transform = 'scale(1)';
    });
  });

    //------------Toutes pages: apparition avec un mouvement slide en scrollant
  // Fonction pour vérifier si un élément est visible à l'écran
  function isElementInViewport(element) {
    let rect = element.getBoundingClientRect();
    return (
      rect.left >= 0 &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth) &&
      rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
  }
  // Fonction pour ajouter la classe "fade-in" aux éléments visibles
  function handleScroll() {
    let elements = document.querySelectorAll('.fade-in');
    for (let element of elements) {
      if (isElementInViewport(element)) {
        element.classList.add('visible');
      }
    }
  }
  // Ajoutez un écouteur d'événement pour détecter le défilement de la page
  window.addEventListener('scroll', handleScroll);


    //-----------Toutes pages: zoomer les photos au passage de la souris
    $(".zoomable").on("mouseenter", function() {
      $(this).addClass("zoomed");
    });
  
    $(".zoomable").on("mouseleave", function() {
      $(this).removeClass("zoomed");
    });


  // -----------Page d'accueil: Sur le formulaire Contact, affichage popup avec cérification de validations: un nom, un email et un message sur textarea 
  let envoyer = document.getElementById("btnEnvoyer");
  let fermer = document.getElementById("btnFerme");
  let popup= document.querySelector(".popup");

  let nameInput= document.querySelector('.champ-nom');
  let emailInput = document.querySelector('.champ-mail');
  let textareaInput = document.querySelector('.champ-textarea');
  let invalidMail=document.getElementById('invalid-mail');
  let invalidName=document.getElementById('invalid-nom');
  let invalidTextarea =  document.getElementById('invalid-textarea');

  envoyer.addEventListener("click", (evt) => {
    evt.preventDefault();
    if (validerEmail(emailInput.value) && validerNom(nameInput.value) && validerTextarea(textareaInput.value)) {
      afficherPopup();
      resetForm(); // Réinitialise les valeurs du formulaire
    } else {
      invalidName.innerHTML="S'il vous plaît, entrez un nom";
      invalidName.style.color="red";
      invalidName.style.fontStyle="italic";

      invalidMail.innerHTML="S'il vous plaît, entrez un mail";
      invalidMail.style.color="red";
      invalidMail.style.fontStyle="italic";

      invalidTextarea.innerHTML="S'il vous plaît, entrez votre message";
      invalidTextarea.style.color="red";
      invalidTextarea.style.fontStyle="italic";
    }
  });

  nameInput.addEventListener("input", () => {
    invalidName.innerHTML=""; // Efface le contenu du message d'erreur
  });

  emailInput.addEventListener("input", () => {
    invalidMail.innerHTML=""; 
  });

  textareaInput.addEventListener("input", () => {
    invalidTextarea.innerHTML=""; 
  });
  function validerNom(nom) {
    return nom.trim() !== "";
  }
  function validerEmail(email) {
    // Expression régulière pour valider le format de l'e-mail
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }
  function validerTextarea(textarea) {
    return textarea.trim() !== "";
  }
  //Afficher popup
  function  afficherPopup(){
    popup.style.display = "block";
  }
  //fermer popup
  fermer.addEventListener("click", fermerPopup);
  function fermerPopup() {
    popup.style.display = "none";
  }
  //réinitialiser les champs input
  function resetForm() {
    document.getElementById('forme').reset();
  }


    // ----------page d'accueil: "voir plus" avec scroll vers naissance du heros
  const pantherPlus = document.querySelector("#accueilPlus");
  const princeAncre = document.getElementById("sec3-titrePrince");
  
  pantherPlus.addEventListener("click", function () {
  princeAncre.scrollIntoView({
    behavior: "smooth",
  });
  });


    // --------------Page d'accueil: Défilement de la liste des personnages
  const pictur = document.getElementsByClassName("pictur");
  const titre = document.getElementsByClassName("titre");
  const para = document.getElementsByClassName("para");

  const text = document.getElementsByClassName("txt");
  const suivant = document.querySelector(".suivant");

  //Collection des données pour la liste des personnages
  let data = [
      {
          "titre": "KILLMONGER",
          "texte": "La sauvagerie de N'Jadaka alors qu'il servait dans une unité d'opérations noires de l'armée américaine lui a valu le surnom de Killmonger. D’origine Wakandaise, et se sentant abandoné par sa nation, il cherche à détroner T’Challa dans une quête vers le pourvoir.",
      },
      {
          "titre": "OKOYE",
          "texte": "Okoye est le général des Dora Milaje (groupe d’élite de femmes guerrières) et le chef des forces armées et des renseignements wakandais. Témoin du couronnement de T'Challa, elle se joint à lui dans de nombreuses aventures."
      },
      {
          "titre": "SHURI",
          "texte": "Shuri est la Princesse du Wakanda, la fille de T'Chaka et de Ramonda, la sœur de T'Challa et la leader du Groupe de Design du Wakanda. Innovatrice, elle est chargée de créer une grande partie de la technologie moderne du Wakanda ainsi que les Habits de la Panthère."
      },
      {
          "titre": "NAKIA",
          "texte": "Nakia est une membre des Chiens de Guerre et l'amoureuse de T'Challa. Elle est souvent en mission à travers le monde, assistant aux grandes détresses de nombreux peuples et commence à croire avec force que le Wakanda pourrait activement les aider."
      },
      {
          "titre": "RAMONDA",
          "texte": "Ramonda est la Reine Mère du Wakanda, épouse de T'Chaka et mère de T'Challa et Shuri. Elle se tenait aux côtés de son fils quand il devint le Roi du Wakanda, mais fut forcée de partir en exil lorsque Erik Killmonger vainquit T'Challa et prit le contrôle du trône."
      },
      {
          "titre": "W’kabi",
          "texte": "W'Kabi est l'ancien chef de la sécurité pour la Tribu de la Porte du Wakanda ainsi que l'ancien meilleur ami de T'Challa. Ayant perdu la foi en son roi pour avoir échouer à capturer Ulysses Klaue, l'homme responsable de la mort de ses parents, W'Kabi apporta son soutien à Erik Killmonger et lui permit de prendre le trône du Wakanda"
      },
      {
          "titre": "m’baku",
          "texte": "M'Baku est le chef de la Tribu Jabari, un groupe de Wakandais qui s'étaient écartés de la société principale du Wakanda et un fervant opposant du pouvoir de T'Challa, mais échoua à le vaincre lors de l'affrontement rituel pour le trône, avant de l'aider à défendre le Wakanda face à Erik Killmonger."
      },
      {
          "titre": "ZURI",
          "texte": "Zuri était un ancien membre des Chiens de Guerre et un shaman Wakandais, loyal conseiller de son Roi. Après avoir gardé les secrets de T'Chaka à propos de sa gestion de la mort de N'Jobu dans le passé, Zuri continua à soutenir le Roi du Wakanda alors que T'Challa reprenait le trône."
      },
      {
          "titre": "EVERETT KENNETH ROSS",
          "texte": "L'Agent Everett Ross est un agent de la CIA et un ancien Commissaire Exécutif à l'Antiterrorisme pour la Force Conjointe AntiTerroriste. Après avoir quitté la Force Conjointe AntiTerroriste, Ross fut chargé de traquer et neutraliser Ulysses Klaue, ce qui plaça Ross sur le chemin de Black Panther, qui cherchait à capturer de nouveau Klaue pour ses crimes passés."
      },
      {
          "titre": "ULYSSE KLAUE",
          "texte": "Ulysses Klaue est un criminel international, gangster et vendeur d'armes sur le marché noir. En 1992, il collabora avec N'Jobu afin de voler une quantité importante de vibranium au Wakanda. Bien qu'il soit parvenu à voler et à s'échapper avec un stock important, il reçut une marque sur le cou de la part des Wakandais."
      },

    ];

  let i = 0;
      function animation() {
        for (let element of text) {
          element.classList.add("fade");
          setTimeout(function () {
            element.classList.remove("fade");
          }, 500);
        }
      
        for (let element of pictur) {
          element.classList.add("fade");
          setTimeout(function () {
            element.classList.remove("fade");
          }, 500);
        }
      }
      
      // Affichage description à partir de json
      function afficheDescription(data) {
        for (let j = 0; j < titre.length; j++) {
          titre[j].textContent = data[j + i].titre;
          para[j].textContent = data[j + i].texte;
        }
      }
      
      // Affichage des photos à partir de json
      function affichePhoto() {
        for (let j = 0; j < pictur.length; j++) {
          const index = (j + i) % data.length; // Utilisez l'opérateur % pour calculer l'index correct
          pictur[j].src = `./Assets/Illustrations+Logo/Accueil/Pantherhome_slider_${index + 1}.png`;
        }
      }
      
      // chargement de la carrousel
      function chargementCarrousel(data) {
        affichePhoto();
        afficheDescription(data);
        i++;
      }
      
      chargementCarrousel(data);
      
      suivant.addEventListener("click", function () {
        if (i < data.length - 2) {
          animation();
          chargementCarrousel(data);
        }
        // gestion des cas particuliers
        else if (i <= data.length - 2) {
          const long = data.length;
          afficheDescription(data);
          pictur[0].src = `./Assets/Illustrations+Logo/Accueil/Pantherhome_slider_${i + 1}.png`;
          pictur[1].src = `./Assets/Illustrations+Logo/Accueil/Pantherhome_slider_${long}.png`;
          pictur[2].src = `./Assets/Illustrations+Logo/Accueil/Pantherhome_slider_1.png`;
          i++;
          animation();
        } else if (i <= data.length - 1) {
          const long = data.length;
          pictur[0].src = `./Assets/Illustrations+Logo/Accueil/Pantherhome_slider_${long}.png`;
          titre[0].textContent = data[i].titre;
          para[0].textContent = data[i].texte;
          pictur[1].src = `./Assets/Illustrations+Logo/Accueil/Pantherhome_slider_1.png`;
          titre[1].textContent = data[0].titre;
          para[1].textContent = data[0].texte;
          pictur[2].src = `./Assets/Illustrations+Logo/Accueil/Pantherhome_slider_2.png`;
          i++;
          animation();
        } else {
          i = 0;
          chargementCarrousel(data);
          animation();
        }
      });

      //Zoom des photos selectionnée à 20%
      // Obtenez une référence vers l'élément conteneur
      let container = document.getElementById("container");

      // Obtenez une référence vers la première photo
      let firstPhoto = container.querySelector(".poster1 img");

      // Fonction pour ajouter une classe spécifique à la première photo
      function ajouterClasseSpecifique() {

        // Ajoutez la nouvelle classe spécifique à la première photo
        firstPhoto.classList.add("selected");
      }

      // Appelez la fonction pour la première fois
      ajouterClasseSpecifique();

      // Écoutez l'événement de défilement (peut être un événement différent selon votre application)
      window.addEventListener("scroll", function() {
        // Appelez la fonction pour mettre à jour la classe spécifique lors du défilement
        ajouterClasseSpecifique();
      });
  //});
    
});