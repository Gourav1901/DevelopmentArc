const images = 
[
  {
    "poster": "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UY268_CR0,0,182,268_AL_.jpg",
    "id": 0
  },
  {
    "poster": "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY268_CR1,0,182,268_AL_.jpg",
    "id": 1
  },
  {
    "poster": "https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY268_CR1,0,182,268_AL_.jpg",
    "id": 2
  },
  {
    "poster": "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_UY268_CR0,0,182,268_AL_.jpg",
    "id": 3
  },
  {
    "poster": "https://m.media-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_UX182_CR0,0,182,268_AL_.jpg",
    "id": 4
  },
  {
    "poster": "https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg",
    "id": 5
  },
  {
    "poster": "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY268_CR0,0,182,268_AL_.jpg",
    "id": 6
  },
  {
    "poster": "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY268_CR0,0,182,268_AL_.jpg",
    "id": 7
  },
  {
    "poster": "https://m.media-amazon.com/images/M/MV5BOTQ5NDI3MTI4MF5BMl5BanBnXkFtZTgwNDQ4ODE5MDE@._V1_UX182_CR0,0,182,268_AL_.jpg",
    "id": 8
  },
  {
    "poster": "https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UY268_CR0,0,182,268_AL_.jpg",
    "id": 9
  },
  {
    "poster": "https://m.media-amazon.com/images/M/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg",
    "id": 10
  }
];



let currentIndex = 0;
let slideInterval;
let isPlaying = true;

const slideshowImage = document.getElementById('slideshow-image');
const playPauseBtn = document.getElementById('playPausebtn');
const prevBtn = document.getElementById('prevbtn');
const nextBtn = document.getElementById('nextbtn');
const addImageBtn = document.getElementById('addImageBtn');
const imageUrlInput = document.getElementById('imageUrl');
const imagePositionInput = document.getElementById('imagePosition');

function showImage(index){
  slideshowImage.src = images[index].poster;
}

function startSlide(){
  slideInterval = setInterval(() =>{
    slideshowImage.src = images[currentIndex].poster;
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  },2000);
}

function stopSlideshow (){
  clearInterval(slideInterval);
}

playPauseBtn.addEventListener('click',()=>{
  if(isPlaying){
    stopSlideshow();
    playPauseBtn.textContent = "Play";
  }
  else{
    startSlide();
    playPauseBtn.textContent = "Pause";
  }
  isPlaying = !isPlaying;
});


prevBtn.addEventListener('click', () => {
  stopSlideshow();
  playPauseBtn.textContent = "Play";
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
});

nextBtn.addEventListener('click', () => {
  stopSlideshow();
  playPauseBtn.textContent = "Play";
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
});

addImageBtn.addEventListener('click', () => {
  const imageUrl = imageUrlInput.value.trim();
  const imagePosition = parseInt(imagePositionInput.value.trim(), 10);

  if (imageUrl && !isNaN(imagePosition) && imagePosition >= 0 && imagePosition <= images.length) {
      images.splice(imagePosition, 0, imageUrl);
      if (imagePosition <= currentIndex) {
          currentIndex++;
      }
      showImage(currentIndex);
      imageUrlInput.value = '';
      imagePositionInput.value = '';
  } else {
      alert('Please enter a valid image URL and position.');
  }
});





showImage(currentIndex);
startSlide();

