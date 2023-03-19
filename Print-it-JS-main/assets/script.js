const slides = [
	{
		image:"slide1.jpg",
		tagLine:"Impressions tous formats <span>en boutique et en ligne</span>"
	},

	{
		image:"slide2.jpg",
		tagLine:"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},

	{
		image:"slide3.jpg",
		tagLine:"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},

	{
		image:"slide4.png",
		tagLine:"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const images = slides.map(slide => slide.image);
const tagLine = slides.map(slide => slide.tagLine);
let currentSlide = 0;
let maxSlide = slides.length -1;

function SlideChange(sens) {
	currentSlide = currentSlide + sens
	if (currentSlide > maxSlide)
		currentSlide = 0;
	if (currentSlide < 0)
		currentSlide = maxSlide;
	document.getElementById("slides").src = "./assets/images/slideshow/" + images[currentSlide];
	document.getElementById("tagLine").innerHTML =" " + tagLine[currentSlide]
	document.getElementById("dot"+[currentSlide]).className += " dot_selected"
	document.getElementById("dot"+[currentSlide-sens]).className -= " dot_selected"
	document.getElementById("dot"+[currentSlide-sens]).className += " dot"
	document.getElementById("dot"+[currentSlide+sens]).className -= " dot_selected"
	document.getElementById("dot"+[currentSlide+sens]).className += " dot"

}

// function LeftArrow() {
// 	alert('left')
// }

// function RightArrow() {
// 	alert('right')
// }

// arrow_left.addEventListener('click',LeftArrow)
// arrow_right.addEventListener('click',RightArrow)

// setInterval("SlideChange(1)", 4000);