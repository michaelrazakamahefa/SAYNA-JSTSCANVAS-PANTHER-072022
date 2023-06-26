$(document).ready(function() {
  
  //Compte à rebours avec le popup final

       // Définir la date de fin
       const endDate = new Date('June 27, 2023 00:01:00').getTime();
    
       // Mettre à jour le minuteur toutes les secondes
       const timer = setInterval(() => {
         // Obtenir la date et l'heure actuelles
         const now = new Date().getTime();
   
         // Calculer la différence entre la date de fin et la date actuelle
         const timeRemaining = endDate - now;
   
         // Calculer les jours, heures, minutes et secondes restantes
         const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
         const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
         const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
   
         // Afficher les jours, heures, minutes et secondes restantes dans le minuteur
         document.getElementById('hours').textContent = formatTime(hours);
         document.getElementById('minutes').textContent = formatTime(minutes);
         document.getElementById('seconds').textContent = formatTime(seconds);
   
         // Arrêter le minuteur lorsque la date de fin est atteinte
         if (timeRemaining < 0) {
           clearInterval(timer);
           document.getElementById('countdown-timer').textContent = 'Temps écoulé';
         }
       }, 1000);
   
       // Fonction pour formater le temps avec un zéro en préfixe si nécessaire
       function formatTime(time) {
         return time < 10 ? `0${time}` : String(time);
       }


  //-----------Toutes pages: zoomer le gros titre au passage de la souris
  // Sélectionnez tous les éléments h1 et h2 de la page
  const headings = document.querySelectorAll('h1, h2');

  // Ajoutez la classe pour appliquer le style de zoom aux éléments h1 et h2
  headings.forEach((heading) => {
    heading.classList.add('zoom');
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
    // Vérifier si le popup contient le texte "Ton initiation est terminée!"
    const popupText = document.getElementById('popup-title').textContent;
    if (popupText.includes('Ton initiation est terminée!')) {
    // Afficher le compte à rebours
    document.getElementById('additional-content').style.display = 'block';
    } else {
    // Masquer le compte à rebours
    document.getElementById('additional-content').style.display = 'none';
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


    //-----------Page enigme: chargement des questions dans le quizz
  let questions = [
    {
      "question": "Une anecdote intéressante est écrite juste en dessous mais elle est codée par un codecésar également appelé code de chiffrement par décalage. L’alphabet a été décalé, trouve la clé de chiffrement qui te permettrait de retrouver les lettres et retranscris la phrase :",
      "code": "Tm nqtu lmjcbm i Wikstivl mv Kitqnwzvqm. Qt a'ioqb lm ti dqttm lwvb mab wzqoqviqzm Zgiv Kwwotmz mb moitmumvb ti dqttm ycq i dc viqbzm tm uwcdmumvb xwtqbqycm lma jtiks xivbpmza",
      "indice-texte": "Plusieurs sources s’entendent pour dire que la lettre la plus utilisée en français est la lettre E. En pourcentage de fréquence, la lettre est utilisée à 14% dans une phrase. Et si tu regardais quel symbole revient le plus souvent ?",
      "response": "le film debute a oackland. il s'agit de la ville dont est originaire ryan coagler et egalement la ville qui a vu naitre le mouvement politique des black panthers",
    },
    {
      "question": "Lorsque T’Challa mange l’herbe en forme de coeur pour recevoir les pouvoirs du Black Panther, il voit son père afin de lui demander conseil afin de devenir un bon roi. Cette scène rappelle la même scène d’un certain film où un père dit à son fils de ne pas oublier qui il est et d’où il vient. Quel est ce film ?",
      "code": "01001100 01000101 00100000 01010010 01001111 01001001 00100000 01001100 01001001 01001111 01001110 00001101 00001010",
      "indice-texte": "Le philosophe Francis Bacon inventa en 1605 un alphabet bilitère, uniquement composé des deux lettres A et B. C'est en quelque sorte l'ancêtre du système binaire des ordinateurs actuels car toute lettre pouvait être construite avec un enchaînement précis de ces deux lettres, tandis que le système binaire informatique utilise 0 et 1.",
      "response": "le roi lion",
    }
  ];

  let questionIndex = 0;
  function displayQuestion() {
    let currentQuestion = questions[questionIndex];
    $("#question-title").text(questionIndex +2);
    $("#texte-question").text(currentQuestion.question);
  $("#texte-code").text(currentQuestion.code);
  $("#indice-texte").text(currentQuestion["indice-texte"]);
  $("#inputText").val(""); // Réinitialiser le champ de saisie de texte
  }

  //Bouton demarrer
  $("#btnDemarrer").click(function() {
  
  let inputText = $("#inputText1").val().toLowerCase().trim(); // Récupérer la valeur de l'entrée utilisateur

  // Vérifier si l'entrée est vide ou non
  if (inputText !== "") {
    let bonneReponse = "si je suis fidele c'est à ce trone peu importe qui monte dessus";

    // Vérifier si c'est la bonne réponse ou pas
    if (inputText === bonneReponse) {
      $("#popup-title").text("Bravo!").css({"color": "white", "text-transform": "uppercase"});
      $("#popup-message").text("Tu as trouvé la réponse. Es tu prêt pour l'énigme suivante?");
      $("#popup-btn").text("Question suivante").css("text-transform", "uppercase");

      $("#popup").show();
    } else {
      $("#inputText1").val("");
      $("#popup-title").text("Oups, mauvaise réponse!").css({"color": "red", "text-transform": "uppercase"});
      $("#popup-message").text("Ne lâche rien, Es tu prêt pour retrouver l'énigme?");
      $("#popup-btn").text("Question précédente").css("text-transform", "uppercase");
      
      $("#popup").show();
    }
  } else {
    alert('Veuillez saisir une réponse');
  }
  console.log(questionIndex);

  });

  //Bouton quizz
  $("#btnOk").click(function() {
  let inputText = $("#inputText").val().toLowerCase().trim(); // Récupérer la valeur de l'entrée utilisateur et convertir en minuscules

  // Vérifier si l'entrée est vide ou non
  if (inputText === "") {
    alert("Veuilliez saisir une réponse");
  } else {
    let currentQuestion = questions[questionIndex];
    let bonneReponse = currentQuestion.response.toLowerCase(); // Récupérer la réponse attendue pour la question actuelle et convertir en minuscules

    // Vérifier si c'est la bonne réponse ou pas
    if (inputText === bonneReponse) {
      questionIndex++;
      if (questionIndex < questions.length) {
        $("#popup-title").text("Bravo!").css({"color": "white", "text-transform": "uppercase"});
        $("#popup-message").text("Tu as trouvé la réponse. Es tu prêt pour l'énigme suivante?");
        $("#popup-btn").text("Question suivante").css("text-transform", "uppercase");
        $("#popup").show();
      } else {
        //popup final
        $("#inputText1").val(""); // Réinitialiser le champ de saisie de texte
        $("#popup-title").text("Ton initiation est terminée!").css({"color": "white", "text-transform": "uppercase"});
        $("#popup-message").text(" ");
        $("#popup-btn").text("Revenir à l'accueil").css("text-transform", "uppercase");
        $("#popup").show();
        $("#additional-content").show();

      }
    } else {
      $("#inputText1").val(""); // Réinitialiser le champ de saisie de texte
      $("#popup-title").text("Oups, mauvaise réponse!").css({"color": "red", "text-transform": "uppercase"});
      $("#popup-message").text("Ne lâche rien, Es tu prêt pour retrouver l'énigme?");
      $("#popup-btn").text("Question précédente").css("text-transform", "uppercase");
      $("#popup").show();
    }
  }

});

//Bouton popup
$("#popup-btn").click(function() {
  $("#popup").hide();
  if ($("#popup-title").text() === "Oups, mauvaise réponse!") {
      $("#inputText").val(""); // Réinitialiser le champ de saisie de texte
      history.back(); // Retourner à la page précédente
  } else {
    if (questionIndex < questions.length) {
    $(".section-two").hide();
      $("#section-quizz").show();
      displayQuestion();

    } 
    else {
      // Redirection vers une autre page
      window.location.href = "index.html";
    }
  }
  });
});

