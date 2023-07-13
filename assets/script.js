const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},

	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},

	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},

	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// Première version fonctionnelle, sauf pour passer de la première à la dernière slide et inversement

// const dots = document.querySelector(".dots");
// const images = slides.map(slide => slide.image);
// const tagLine = slides.map(slide => slide.tagLine);
// let currentSlide = 0;
// let maxSlide = slides.length -1;
// const arrowLeft = document.querySelector(".arrow_left");
// const arrowRight = document.querySelector(".arrow_right");


// function SlideChange(sens) {
// 	currentSlide = currentSlide + sens
// 	if (currentSlide > maxSlide)
// 		currentSlide = 0;
// 	if (currentSlide < 0)
// 		currentSlide = maxSlide;
// 	document.getElementById("slides").src = "./assets/images/slideshow/" + images[currentSlide];
// 	document.getElementById("tagLine").innerHTML =" " + tagLine[currentSlide];
	// if (document.getElementById("dot"+[currentSlide])){
	// 	document.getElementById("dot"+[currentSlide]).className += " dot_selected";
	// 	document.getElementById("dot"+[currentSlide-sens]).className = "dot";
	// }

// }

// for (let i = 0; i < slides.length; i++) {
// 	const newElt =
// 	document.createElement("div");
// 	let elt =
// 	document.getElementById("dots");
// 	elt.appendChild(newElt);
// 	newElt.classList.add("dot");
// 	newElt.id += "dot"+[i];
// }

// document.getElementById("dot0").className += " dot_selected";



const image = document.querySelector(".banner-img");
const slidesLength = slides.length;
const maxSlide = slides.length - 1;
const tagLine = document.querySelector(".tagLine");
let currentSlide = 0;
const dots = document.querySelector(".dots");
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");


for (let i = 0; i < slidesLength; i++) {
  const dot = document.createElement("div");
  dot.className ="dot";
  dots.appendChild(dot);
}

const dot = document.querySelectorAll(".dot");
dot[0].classList.add("dot_selected");

// on vas de la première à la dernière slide
arrowLeft.addEventListener("click", () => {
  if (currentSlide === 0) {
    dot[currentSlide].classList.remove("dot_selected");
    image.src = "./assets/images/slideshow/" + slides[maxSlide].image;
    tagLine.innerHTML = slides[maxSlide].tagLine;
    dot[maxSlide].classList.add("dot_selected");
    currentSlide = maxSlide
  }
  else {
    dot[currentSlide].classList.remove("dot_selected");
    image.src = "./assets/images/slideshow/" + slides[currentSlide - 1].image;
    tagLine.innerHTML = slides[currentSlide- 1].tagLine;
    dot[currentSlide-1].classList.add("dot_selected");
    currentSlide = currentSlide - 1
  }
})

// on revient à la première slide depuis la dernière
arrowRight.addEventListener("click", () => {
  if (currentSlide === maxSlide) {
    dot[currentSlide].classList.remove("dot_selected");
    image.src = "./assets/images/slideshow/" + slides[0].image;
    tagLine.innerHTML = slides[0].tagLine;
    dot[0].classList.add("dot_selected");
    currentSlide = 0;
  
  }
  else {
    dot[currentSlide].classList.remove("dot_selected");
    image.src = "./assets/images/slideshow/" + slides[currentSlide + 1].image;
    tagLine.innerHTML = slides[currentSlide + 1].tagLine;
    dot[currentSlide +1].classList.add("dot_selected");
    currentSlide = currentSlide + 1;
  }
})