$(document).ready(function(){

// Super slider fait avec :  Slick Slider : https://kenwheeler.github.io/slick/
  
$('.promotionalslider_wrapper').slick({   
    
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    responsive: 
    [
      {
        breakpoint: 768,
        settings: 
        {
        slidesToShow: 2,
        slidesToScroll: 2,
        }
      }
    ]
  });
});



// Debut code de la fenetre Modal *******************************


// Le Modal
var modal = document.getElementById("myModal");

// Le bouton qui ouvre le Modal
var btn = document.getElementById("myBtn");

// Test 7 films Mieux notés!!! L'image première qui ouvre le modal 

let img_mieuxNotesF1 = document.getElementById("mieuxNotesF1");
let img_mieuxNotesF2 = document.getElementById("mieuxNotesF2");
let img_mieuxNotesF3 = document.getElementById("mieuxNotesF3");
let img_mieuxNotesF4 = document.getElementById("mieuxNotesF4");
let img_mieuxNotesF5 = document.getElementById("mieuxNotesF5");
let img_mieuxNotesF6 = document.getElementById("mieuxNotesF6");
let img_mieuxNotesF7 = document.getElementById("mieuxNotesF7");

// Test 7 films Cat 1 Actions !!! L'image première qui ouvre le modal 

let img_cat1F1 = document.getElementById("cat1F1");
let img_cat1F2 = document.getElementById("cat1F2");
let img_cat1F3 = document.getElementById("cat1F3");
let img_cat1F4 = document.getElementById("cat1F4");
let img_cat1F5 = document.getElementById("cat1F5");
let img_cat1F6 = document.getElementById("cat1F6");
let img_cat1F7 = document.getElementById("cat1F7");


// Test 7 films Cat2 !!! L'image première qui ouvre le modal 

let img_cat2F1 = document.getElementById("cat2F1");
let img_cat2F2 = document.getElementById("cat2F2");
let img_cat2F3 = document.getElementById("cat2F3");
let img_cat2F4 = document.getElementById("cat2F4");
let img_cat2F5 = document.getElementById("cat2F5");
let img_cat2F6 = document.getElementById("cat2F6");
let img_cat2F7 = document.getElementById("cat2F7");


// Test 7 films Cat3 !!! L'image première qui ouvre le modal 

let img_cat3F1 = document.getElementById("cat3F1");
let img_cat3F2 = document.getElementById("cat3F2");
let img_cat3F3 = document.getElementById("cat3F3");
let img_cat3F4 = document.getElementById("cat3F4");
let img_cat3F5 = document.getElementById("cat3F5");
let img_cat3F6 = document.getElementById("cat3F6");
let img_cat3F7 = document.getElementById("cat3F7");





// L'element <span> qui ferme le Modal
var span = document.getElementsByClassName("close")[0];


// Ouvrir le Modal quand l'utilisateur clique sur le bouton.
btn.onclick = function() {
  modal.style.display = "block";
}


// Test Modal 7 films mieux notés !!! Ouvrir le Modal quand l'utilisateur clique sur l'image.
img_mieuxNotesF1.onclick = function() {
  modal.style.display = "block";
  
}
img_mieuxNotesF2.onclick = function() {
  modal.style.display = "block";
}
img_mieuxNotesF3.onclick = function() {
  modal.style.display = "block";
}
img_mieuxNotesF4.onclick = function() {
  modal.style.display = "block";
}
img_mieuxNotesF5.onclick = function() {
  modal.style.display = "block";
}
img_mieuxNotesF6.onclick = function() {
  modal.style.display = "block";
}
img_mieuxNotesF7.onclick = function() {
  modal.style.display = "block";
}




// Test Modal 7 films cat1 !!! Ouvrir le Modal quand l'utilisateur clique sur l'image.


img_cat1F1.onclick = function() {
  modal.style.display = "block";
  // ici mettre le code du modal 2 de façon a appeler le modal 2 en style display, 
  // il faut donc creer un modal 2 dans le cocde html
  // le modal 2 disposera aussi d une fonction qui recuperera toutes les infos et qui aura pour parametre le link du film
}
img_cat1F2.onclick = function() {
  modal.style.display = "block";
}
img_cat1F3.onclick = function() {
  modal.style.display = "block";
}
img_cat1F4.onclick = function() {
  modal.style.display = "block";
}
img_cat1F5.onclick = function() {
  modal.style.display = "block";
}
img_cat1F6.onclick = function() {
  modal.style.display = "block";
}
img_cat1F7.onclick = function() {
  modal.style.display = "block";
}



// Test Modal 7 films cat2 !!! Ouvrir le Modal quand l'utilisateur clique sur l'image.


img_cat2F1.onclick = function() {
  modal.style.display = "block";
}
img_cat2F2.onclick = function() {
  modal.style.display = "block";
}
img_cat2F3.onclick = function() {
  modal.style.display = "block";
}
img_cat2F4.onclick = function() {
  modal.style.display = "block";
}
img_cat2F5.onclick = function() {
  modal.style.display = "block";
}
img_cat2F6.onclick = function() {
  modal.style.display = "block";
}
img_cat2F7.onclick = function() {
  modal.style.display = "block";
}




// Test Modal 7 films cat3 !!! Ouvrir le Modal quand l'utilisateur clique sur l'image.


img_cat3F1.onclick = function() {
  modal.style.display = "block";
}
img_cat3F2.onclick = function() {
  modal.style.display = "block";
}
img_cat3F3.onclick = function() {
  modal.style.display = "block";
}
img_cat3F4.onclick = function() {
  modal.style.display = "block";
}
img_cat3F5.onclick = function() {
  modal.style.display = "block";
}
img_cat3F6.onclick = function() {
  modal.style.display = "block";
}
img_cat3F7.onclick = function() {
  modal.style.display = "block";
}






// Fermer le Modal quand l'utilisateur clique sur <span> (x).
span.onclick = function() {
  modal.style.display = "none";
}

// Fermer le Modal quand l'utilisateur clique n'importe où en dehors du Modal.
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
