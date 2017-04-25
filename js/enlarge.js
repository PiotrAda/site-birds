$(document).ready(function(){
  // zmienna galleryArray zwraca indeksy wszystkich obrazków;
  var galleryArray = document.getElementsByClassName("galeria")
  // zmienna modalCon posłuży do przywrócenia przez funkcję display: block dla naszego modala;
  var modalCon = document.getElementById("modal-main");
  // zmienna modalImg posłuży do nadania obrazkowi modala nowego źródła;
  var modalImg = document.getElementById("modal-image");
  // zmienne dla guzików posłużą nam do przewijania modala;
  var modalLeftButton = document.getElementById("modal-left-button");
  var modalRightButton = document.getElementById("modal-right-button");
  var activeImageIndex;

  // definiuje wyświetlenie modala;
  $(".galeria").click(function(left) {
    $(this).addClass('activemodal');
    for (i = 0; i < galleryArray.length; i++) {
      if (galleryArray[i].classList.contains("activemodal")){
        activeImageIndex = i;
      }
    }
  // nadaje naszemu modalowi display: block;
    modalCon.style.display = "block";
  // zmienia adres obrazka z modala na adres wciśniętego zdjęcia oraz adres opisu;
    modalImg.src = galleryArray[activeImageIndex].src;
  });

  // definiuje funkcję guzików na boki;
  function pressButton(n) {
    modalImg.src = galleryArray[activeImageIndex+n].src;
    $(galleryArray[activeImageIndex+n]).addClass('activemodal');
    $(galleryArray[activeImageIndex]).removeClass('activemodal');
    activeImageIndex = activeImageIndex+n;
    $("#modal-image").finish();
    $("#modal-image").css({ opacity: '0', blur: '10px' });
    $("#modal-image").animate({opacity: '1', blur: '0px'}, "slow");
  }

  // definiuje funkcję zamknięcia modala;
  function closeModal() {
    modalCon.style.display = "none";
    $(galleryArray[activeImageIndex]).removeClass('activemodal');
  }

  // definiuje akcje on-click klawiaturą - left, right, escape;
    $(document).keydown(function(f) {
      if (f.keyCode === 37) { // left
        pressButton(-1);
      }
      else if (f.keyCode === 39) { // right
        pressButton(1);
      }
      else if (f.keyCode === 27) { // escape
        closeModal();
      };
    });

    // definiuje akcje on-click przycisków lewo/prawo/naciśnięcia na szare tło;
    modalCon.onclick = function(e) {
      if($(e.target).is('.modal-content, #modal-left-button, #modal-right-button')){
        e.preventDefault();
        return;
      }
      closeModal();
    }
    modalLeftButton.onclick = function(){
      pressButton(-1);
    }
    modalRightButton.onclick = function(){
      pressButton(1);
    }

});
