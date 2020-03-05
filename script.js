const carousel = document.querySelector('.img-carousel');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

let carouselImages = document.querySelectorAll('.img-carousel div');

const nextCarousel = () =>{
	if(carouselImages[carouselImages.length -1]){
		carousel.scrollTo(0,0);
	}
	carousel.scrollBy(300,0)
};

nextBtn.addEventListener('click', e => {
	nextCarousel();
});

const prevCarousel = () =>{
	if(carouselImages[0]){
		carousel.scrollTo(4800,0);
	}
	carousel.scrollBy(-300,0)
};

prevBtn.addEventListener('click', e => {
	prevCarousel();
});

/*auto carousel*/

const auto = true;
const intervalTime = 2000;
let sliderInterval;

if(auto){
	sliderInterval = setInterval(nextCarousel, intervalTime)
};

carousel.addEventListener('mouseover', (stopInterval) =>{
	clearInterval(sliderInterval);
});

carousel.addEventListener('mouseleave', (startInterval)=>{
	if(auto){
	sliderInterval = setInterval(nextCarousel, intervalTime)
	};
});

var previousCall;
window.addEventListener('resize',() =>{
	if(previousCall >= 0){
		clearTimeOut(previousCall);
	}
	previousCall = setTimeOut(() =>{
		carousel.scrollBy(-300, 0);
	}, 200);
})

/*GOOGLE MAPS*/

function initMap() {
  // The location of Uluru
  var uluru = {lat: -25.344, lng: 131.036};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 4, center: uluru});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: uluru, map: map});
}