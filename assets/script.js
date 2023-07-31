const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]


// récupéré banner img et p
let index = 0
const slider = document.querySelector('#banner');
let img = document.querySelector('.banner-img');
const dots = document.querySelector('.dots');
let tag = document.querySelector('#banner > p');
const nombreSlide = slides.length
const cheminImg = './assets/images/slideshow/';

//rajouté les dots via javascript (selon taille tableau)
for (let i=0; i < nombreSlide; i++){
	const dot = document.createElement('div')
	dot.setAttribute('class', 'dot')
	dots.appendChild(dot);
}

dots.children[0].classList.add("dot_selected");

function afficherSlideCourant(){
	const slideCourant = slides[index];
	img.src = cheminImg + slideCourant.image;
	tag.innerHTML = slideCourant.tagLine;

	const dotsEnfants = dots.children;
	

  for (let i = 0; i < dotsEnfants.length; i++) {
    if (i === index) {
      dotsEnfants[i].classList.add("dot_selected");
    } else {
      dotsEnfants[i].classList.remove("dot_selected");
    }
  }
}
afficherSlideCourant;

function slideSuivant() {
	index++;
	if (index === nombreSlide) {
	index = 0;
	}
	afficherSlideCourant();
  }

  function slidePrecedent() {
	index--;
	if (index < 0) {
	  index = nombreSlide - 1;
	}
	afficherSlideCourant();
  }

let arrow_right = document.querySelector(".arrow_right");
arrow_right.addEventListener("click", slideSuivant);

let arrow_left = document.querySelector(".arrow_left");
arrow_left.addEventListener("click", slidePrecedent );

