
const images = [
   "w1.png",
   "w2.webp",
    "w3.jpg",
  "w4.jpg"

];

let index = 0;
const slide = document.getElementById("slide");

function autoSlide() {
  index = (index + 1) % images.length;
  slide.src = images[index];
}

// Change image every 2 seconds
setInterval(autoSlide, 2000);


