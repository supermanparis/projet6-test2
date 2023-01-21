
const url = "http://localhost:8000/api/v1/";


// ****************************************************************************************************************************************************************************************************************************************************************************************
// POUR AFFICHER LE MEILLEUR FILM // ******************************************************************************************************************************************************************************************************************************************************
// ****************************************************************************************************************************************************************************************************************************************************************************************


async function recupererMeilleurFilm() {

let urlMeilleurFilm = url + "titles/?sort_by=-imdb_score";

axios.get(urlMeilleurFilm)

.then(function(donnees) {

  let imageMeilleurFilm       = document.querySelector('#imageMeilleurFilm');
  console.log(imageMeilleurFilm);

  imageMeilleurFilm.src       = donnees.data.results[0].image_url;
  console.log(imageMeilleurFilm);

})

.catch(function(erreur) {
  alert('Un problème est survenu');
})
.then(function () {
  console.log('mise à jour effectuée');
});
}

recupererMeilleurFilm()


// // ****************************************************************************************************************************************************************************************************************************************************************************************
// // TEST POUR RECUPERER INFOS DES FILMS POUR LA FENETRE MODAL // ******************************************************************************************************************************************************************************************************************************************************
// // ****************************************************************************************************************************************************************************************************************************************************************************************

// let idFilm;

// async function recupererFilmImageSlider(idFilm) {


// let urlFilmImageSlider = "http://localhost:8000/api/v1/titles/" + idFilm;

// axios.get(urlFilmImageSlider)
  
// .then(function(donnees) {

//       let titreMeilleurFilm              = document.querySelector('#titreMeilleurFilm');
//       titreMeilleurFilm.textContent      = donnees.data.results[0].title;

//       let titreFilmModal         = document.querySelector('#titreFilmModal');
//       titreFilmModal.textContent = donnees.data.results[0].title;

//       let imageFilmModal         = document.querySelector('#imageFilmModal');
//       imageFilmModal.src         = donnees.data.results[0].image_url;

//       let genre          =  document.querySelector('#genre');
//       genre.textContent  = " Genre complet du film: " + donnees.data.results[0].genres;

//       let date           = document.querySelector('#date');
//       date.textContent   = " Date de sortie: " + donnees.data.results[0].year;

//       let rated          = document.querySelector('#rated');
//       rated.textContent  = "Votes: " + donnees.data.results[0].votes;

//       let score          = document.querySelector('#score');
//       score.textContent  = "Score Imdb: " + donnees.data.results[0].imdb_score;

//       let real           = document.querySelector('#real');
//       real.textContent   = "Réalisateur: " + donnees.data.results[0].directors;

//       let actors         = document.querySelector('#actors');
//       actors.textContent = "Acteurs: " + donnees.data.results[0].actors;


// })


// .catch(function(erreur) {
//   alert('Un problème est survenu');
// })
// .then(function () {
//   console.log('mise à jour effectuée');
// });
// }

  
// recupererFilmImageSlider()
  




// Demander des informations détaillées sur un film dont on connait 
// l'identifiant: http://localhost:8000/api/v1/titles/499549 où 499549 
// est l'identifiant (id) du film "Avatar".



// ****************************************************************************************************************************************************************************************************************************************************************************************
// POUR AFFICHER LES INFORMATIONS DU MEILLEUR FILM DANS LA FENETRE MODAL // ***************************************************************************************************************************************************************************************************************
// ****************************************************************************************************************************************************************************************************************************************************************************************


async function recupererInfosModalMeilleurFilm() {

let urlMeilleurFilm = url + "titles/?sort_by=-imdb_score";

axios.get(urlMeilleurFilm)

.then(function(donnees) {

  let titreMeilleurFilm              = document.querySelector('#titreMeilleurFilm');
  titreMeilleurFilm.textContent      = donnees.data.results[0].title;

  let titreFilmModal         = document.querySelector('#titreFilmModal');
  titreFilmModal.textContent = donnees.data.results[0].title;

  let imageFilmModal         = document.querySelector('#imageFilmModal');
  imageFilmModal.src         = donnees.data.results[0].image_url;

  let genre          =  document.querySelector('#genre');
  genre.textContent  = " Genre complet du film: " + donnees.data.results[0].genres;

  let date           = document.querySelector('#date');
  date.textContent   = " Date de sortie: " + donnees.data.results[0].year;

  let rated          = document.querySelector('#rated');
  rated.textContent  = "Votes: " + donnees.data.results[0].votes;

  let score          = document.querySelector('#score');
  score.textContent  = "Score Imdb: " + donnees.data.results[0].imdb_score;

  let real           = document.querySelector('#real');
  real.textContent   = "Réalisateur: " + donnees.data.results[0].directors;

  let actors         = document.querySelector('#actors');
  actors.textContent = "Acteurs: " + donnees.data.results[0].actors;


})


.catch(function(erreur) {
  alert('Un problème est survenu');
})
.then(function () {
  console.log('mise à jour effectuée');
});
}

recupererInfosModalMeilleurFilm()





// ****************************************************************************************************************************************************************************************************************************************************************************************
// TEST TEST TEST TEST TEST PAS FINI !!! A TERMINER !!! POUR RECUPERER LE LINK DU FILM 
// pourquoi ici mettre une fonction asynchrone? *******************************************************************************************************************************************************************************************************************************************
// ****************************************************************************************************************************************************************************************************************************************************************************************



// async function rajouterLinkFilm(liendufilm) { // est ce le bon nom??
  
//   let linkFilm = liendufilm;

//   axios.get(linkFilm)
  
//   .then(function(donnees) {

//     let linkFilm = document.querySelector('#linkF1'); // au lieu d un id mettre le chemin ???????
//     linkFilm.textContent     = donnees.data.results[0].url;

//   })


//   .catch(function(erreur) {
//     alert('Un problème est survenu');
//   })
//   .then(function () {
//     console.log('mise à jour effectuée');
//   });
//   }
  
//   rajouterLinkFilm()
  














// ****************************************************************************************************************************************************************************************************************************************************************************************
// POUR AFFICHER DANS LE SLIDER LES 7 FILMS LES MIEUX NOTÉS (PAGE 1 >>> 4 FILMS ) // ******************************************************************************************************************************************************************************************************
// ****************************************************************************************************************************************************************************************************************************************************************************************



async function recupererImagesMeilleursFilmsP1() {

  let urlMeilleurFilmP1 = url + "titles/?sort_by=-imdb_score";
  
  axios.get(urlMeilleurFilmP1)
  
  .then(function(donnees) {

    let mieuxNotesF1  = document.querySelector('#mieuxNotesF1');
    mieuxNotesF1.src  = donnees.data.results[0].image_url;
    let linkF1 = document.querySelector('#linkF1');
    linkF1.textContent     = donnees.data.results[0].url;


    // let linkF = recupererInfosModal(linkF1.textContent);

    // console.log(linkF)



    // // recupererInfosModal(linkF1.textContent);
    // // let resultat = recupererInfosModal(linkF1.textContent);


    // console.log(resultat);

    // // let lienR = document.getElementById('#mieuxNotesF1').getElementsByName('p')[0].innerHTML;

    // console.log(linkF1.textContent)
    // // console.log(lienR)




    // let mieuxNotesF1  = document.querySelector('#mieuxNotesF1');
    // mieuxNotesF1.src  = donnees.data.results[0].image_url;
    // let linkF1 = document.querySelector('#linkF1');
    // linkF1.textContent     = donnees.data.results[0].url;
    // // linkF1.innerHTML = linkF1.innerHTML.replace("#linkF1", "linkF1.textContent");
    // let nouveau = document.querySelector('#linkF1');

    // nouveau.addEventListener('click', () => {
      
    //   img.onclick =function() {
    //     modal.style.display = "block";
    //   }


    // });


    let mieuxNotesF2  = document.querySelector('#mieuxNotesF2');
    mieuxNotesF2.src  = donnees.data.results[1].image_url;
    let linkF2 = document.querySelector('#linkF2');
    linkF2.textContent     = donnees.data.results[1].url;


    // recupererInfosModal(linkF2.textContent);



    let mieuxNotesF3  = document.querySelector('#mieuxNotesF3');
    mieuxNotesF3.src  = donnees.data.results[2].image_url;
    let linkF3 = document.querySelector('#linkF3');
    linkF3.textContent     = donnees.data.results[2].url;


    // recupererInfosModal(linkF3.textContent);
    // //

    let mieuxNotesF4  = document.querySelector('#mieuxNotesF4');
    mieuxNotesF4.src  = donnees.data.results[3].image_url;
    let linkF4 = document.querySelector('#linkF4');
    linkF4.textContent     = donnees.data.results[3].url;


    // recupererInfosModal(linkF4.textContent);
    // //

    let mieuxNotesF5  = document.querySelector('#mieuxNotesF5');
    mieuxNotesF5.src  = donnees.data.results[4].image_url;
    let linkF5 = document.querySelector('#linkF5');
    linkF5.textContent     = donnees.data.results[4].url;


    // recupererInfosModal(linkF5.textContent);
    // //

  
  })
  
  
  .catch(function(erreur) {
    alert('Un problème est survenu');
  })
  .then(function () {
    console.log('mise à jour effectuée');
  });
  }
  
  recupererImagesMeilleursFilmsP1()



// ****************************************************************************************************************************************************************************************************************************************************************************************
// POUR AFFICHER DANS LE SLIDER LES 7 FILMS LES MIEUX NOTÉS (PAGE 2 >>> 2 FILMS RESTANTS) // ****************************************************************************************************************************************************************************************************************************************************
// ****************************************************************************************************************************************************************************************************************************************************************************************
 


async function recupererImagesMeilleursFilmsP2() {

  let urlMeilleurFilmP2 = url + "titles/?page=2&sort_by=-imdb_score"; 
  
  axios.get(urlMeilleurFilmP2)
  
  .then(function(donnees) {

    console.log(donnees);

    let mieuxNotesF6  = document.querySelector('#mieuxNotesF6');
    mieuxNotesF6.src  = donnees.data.results[0].image_url;
    let linkF6 = document.querySelector('#linkF6');
    linkF6.textContent     = donnees.data.results[0].url;

 
    // recupererInfosModal(linkF6.textContent);
  
    let mieuxNotesF7  = document.querySelector('#mieuxNotesF7');
    mieuxNotesF7.src  = donnees.data.results[1].image_url;
    let linkF7 = document.querySelector('#linkF7');
    linkF7.textContent     = donnees.data.results[1].url;


    // recupererInfosModal(linkF7.textContent);


  
  })
  
  
  .catch(function(erreur) {
    alert('Un problème est survenu');
  })
  .then(function () {
    console.log('mise à jour effectuée');
  });
  }
  
  recupererImagesMeilleursFilmsP2()








// ****************************************************************************************************************************************************************************************************************************************************************************************
// SLIDER CATÉGORIE 1 = ACTION = LES 7 FILMS LES MIEUX NOTÉS (PAGE 1 >>> 4 FILMS ) // *****************************************************************************************************************************************************************************************************
// ****************************************************************************************************************************************************************************************************************************************************************************************



async function recupererImagesMeilleursFilmsActionP1() {

  let urlMeilleurFilmP1 = url + "titles/?sort_by=-imdb_score&genre=action";
  
  axios.get(urlMeilleurFilmP1)
  
  .then(function(donnees) {

    let cat1F1  = document.querySelector('#cat1F1');
    cat1F1.src  = donnees.data.results[0].image_url;
    // let linkCat1F1 = document.querySelector('#cat1F1');
    // linkCat1F1.textContent     = donnees.data.results[0].url;
    // recupererInfosModal(linkCat1F1.textContent);

    let cat1F2  = document.querySelector('#cat1F2');
    cat1F2.src  = donnees.data.results[1].image_url;
    
    let cat1F3  = document.querySelector('#cat1F3');
    cat1F3.src  = donnees.data.results[2].image_url;

    let cat1F4  = document.querySelector('#cat1F4');
    cat1F4.src  = donnees.data.results[3].image_url;

    let cat1F5  = document.querySelector('#cat1F5');
    cat1F5.src  = donnees.data.results[4].image_url;

  })
  
  
  .catch(function(erreur) {
    alert('Un problème est survenu');
  })
  .then(function () {
    console.log('mise à jour effectuée');
  });
  }
  
  recupererImagesMeilleursFilmsActionP1()




// ****************************************************************************************************************************************************************************************************************************************************************************************
// SLIDER CATÉGORIE 1 = ACTION = LES 7 FILMS LES MIEUX NOTÉS  (PAGE 2 >>> 2 FILMS RESTANTS) // ****************************************************************************************************************************************************************************************************************************************************
// ****************************************************************************************************************************************************************************************************************************************************************************************
 

async function recupererImagesMeilleursFilmsActionP2() {

  let urlMeilleurFilmP1 = url + "titles/?genre=action&page=2&sort_by=-imdb_score";
  
  axios.get(urlMeilleurFilmP1)
  
  .then(function(donnees) {

  let cat1F6  = document.querySelector('#cat1F6');
  cat1F6.src  = donnees.data.results[0].image_url;

  let cat1F7  = document.querySelector('#cat1F7');
  cat1F7.src  = donnees.data.results[1].image_url;

  })
  
  
  .catch(function(erreur) {
    alert('Un problème est survenu');
  })
  .then(function () {
    console.log('mise à jour effectuée');
  });
  }
  
  recupererImagesMeilleursFilmsActionP2()






// ****************************************************************************************************************************************************************************************************************************************************************************************
// SLIDER CATÉGORIE 2 = THRILLER = LES 7 FILMS LES MIEUX NOTÉS (PAGE 1 >>> 4 FILMS ) // ****************************************************************************************************************************************************************************************************************************************************
// ****************************************************************************************************************************************************************************************************************************************************************************************



async function recupererImagesMeilleursFilmsThrillerP1() {

  let urlMeilleurFilmP1 = url + "titles/?sort_by=-imdb_score&genre=Thriller";
  
  axios.get(urlMeilleurFilmP1)
  
  .then(function(donnees) {

    let cat2F1  = document.querySelector('#cat2F1');
    cat2F1.src  = donnees.data.results[0].image_url;

    let cat2F2  = document.querySelector('#cat2F2');
    cat2F2.src  = donnees.data.results[1].image_url;
    
    let cat2F3  = document.querySelector('#cat2F3');
    cat2F3.src  = donnees.data.results[2].image_url;

    let cat2F4  = document.querySelector('#cat2F4');
    cat2F4.src  = donnees.data.results[3].image_url;

    let cat2F5  = document.querySelector('#cat2F5');
    cat2F5.src  = donnees.data.results[4].image_url;

  })
  
  
  .catch(function(erreur) {
    alert('Un problème est survenu');
  })
  .then(function () {
    console.log('mise à jour effectuée');
  });
  }
  
  recupererImagesMeilleursFilmsThrillerP1()




// ****************************************************************************************************************************************************************************************************************************************************************************************
// SLIDER CATÉGORIE 2 = THRILLER = LES 7 FILMS LES MIEUX NOTÉS  (PAGE 2 >>> 2 FILMS RESTANTS) // ****************************************************************************************************************************************************************************************************************************************************
// ****************************************************************************************************************************************************************************************************************************************************************************************
 


async function recupererImagesMeilleursFilmsThrillerP2() {

  let urlMeilleurFilmP2 = url + "titles/?genre=Thriller&page=2&sort_by=-imdb_score";
  
  axios.get(urlMeilleurFilmP2)
  
  .then(function(donnees) {

    let cat2F6  = document.querySelector('#cat2F6');
    cat2F6.src  = donnees.data.results[0].image_url;

    let cat2F7  = document.querySelector('#cat2F7');
    cat2F7.src  = donnees.data.results[1].image_url;

  })
  
  
  .catch(function(erreur) {
    alert('Un problème est survenu');
  })
  .then(function () {
    console.log('mise à jour effectuée');
  });
  }
  
  recupererImagesMeilleursFilmsThrillerP2()







// ****************************************************************************************************************************************************************************************************************************************************************************************
// SLIDER CATÉGORIE 3 = ROMANCE = LES 7 FILMS LES MIEUX NOTÉS (PAGE 1 >>> 4 FILMS ) // ****************************************************************************************************************************************************************************************************************************************************
// ****************************************************************************************************************************************************************************************************************************************************************************************



async function recupererImagesMeilleursFilmsRomanceP1() {

  let urlMeilleurFilmP1 = url + "titles/?sort_by=-imdb_score&genre=Romance";
  
  axios.get(urlMeilleurFilmP1)
  
  .then(function(donnees) {

    let cat3F1  = document.querySelector('#cat3F1');
    cat3F1.src  = donnees.data.results[0].image_url;

    let cat3F2  = document.querySelector('#cat3F2');
    cat3F2.src  = donnees.data.results[1].image_url;
    
    let cat3F3  = document.querySelector('#cat3F3');
    cat3F3.src  = donnees.data.results[2].image_url;

    let cat3F4  = document.querySelector('#cat3F4');
    cat3F4.src  = donnees.data.results[3].image_url;

    let cat3F5  = document.querySelector('#cat3F5');
    cat3F5.src  = donnees.data.results[4].image_url;

  })
  
  
  .catch(function(erreur) {
    alert('Un problème est survenu');
  })
  .then(function () {
    console.log('mise à jour effectuée');
  });
  }
  
  recupererImagesMeilleursFilmsRomanceP1()



// ****************************************************************************************************************************************************************************************************************************************************************************************
// SLIDER CATÉGORIE 3 = ROMANCE = LES 7 FILMS LES MIEUX NOTÉS  (PAGE 2 >>> 2 FILMS RESTANTS) // ****************************************************************************************************************************************************************************************************************************************************
// ****************************************************************************************************************************************************************************************************************************************************************************************
 


async function recupererImagesMeilleursFilmsRomanceP2() {

  let urlMeilleurFilmP1 = url + "titles/?genre=Romance&page=2&sort_by=-imdb_score";
  
  axios.get(urlMeilleurFilmP1)
  
  .then(function(donnees) {

    let cat3F6  = document.querySelector('#cat3F6');
    cat3F6.src  = donnees.data.results[0].image_url;

    let cat3F7  = document.querySelector('#cat3F7');
    cat3F7.src  = donnees.data.results[1].image_url;

  })
  
  
  .catch(function(erreur) {
    alert('Un problème est survenu');
  })
  .then(function () {
    console.log('mise à jour effectuée');
  });
  }
  
  recupererImagesMeilleursFilmsRomanceP2()





////////////////////// ////////////////////// ////////////////////// ////////////////////// ////////////////////// //////////////////////
  


let urlCategorie = url + "titles/?sort_by=-imdb_score"

async function recupererUrlFilm(urlCategorie, indexF) {

axios.get(urlCategorie)

.then(function(donnees) {


  let urlFilm = document.querySelector('#linkF'+indexF);
  urlFilm.textContent     = donnees.data.results[indexF].url;
  console.log(urlFilm.textContent)
  
})

.catch(function(erreur) {
  alert('Un problème est survenu');
})
.then(function () {
  console.log('mise à jour effectuée');
});
}

recupererUrlFilm(urlCategorie,3);
console.log(urlFilm.textContent);


