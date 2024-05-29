// THEME FUNCTION
const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('change',()=>{
    document.body.classList.toggle('light');
});

 //Get the carousel element
var carousel = document.querySelector('#carouselExampleControls');

// Get the carousel items
var carouselItems = carousel.querySelectorAll('.carousel-item');

// Get the previous and next buttons
var prevButton = carousel.querySelector('.carousel-control-prev');
var nextButton = carousel.querySelector('.carousel-control-next');

// Set the current slide index
var currentIndex = 0;

// Function to slide to the previous item
function slidePrev() {
  currentIndex--;
  
  // Check if the current index is less than 0
  if (currentIndex < 0) {
    // Set the current index to the last slide
    currentIndex = carouselItems.length - 1;
  }
  
  // Slide to the previous item
  carouselItems[currentIndex].className = 'carousel-item active';
  carouselItems[currentIndex + 1].className = 'carousel-item';
}

// Function to slide to the next item
function slideNext() {
  // Increment the current index
  currentIndex++;
  
  // Check if the current index is greater than or equal to the number of slides
  if (currentIndex >= carouselItems.length) {
    // Set the current index to 0
    currentIndex = 0;
  }
  
  // Slide to the next item
  carouselItems[currentIndex].className = 'carousel-item active';
  carouselItems[currentIndex - 1].className = 'carousel-item';
}

// Add event listeners to the previous and next buttons
prevButton.addEventListener('click', function() {
  slidePrev();
});

nextButton.addEventListener('click', function() {
  slideNext();
});

// Carousel FUNCTION
$(document).ready(function(){
    $('.carousel').carousel();
});
//carousel
const multipleItems = document.querySelector('.carouselExampleIndicators');

if(window.matchMedia("(min-width:576px)").matches){

    const carousel = new bootstrap.Carousel(multipleItems, 
    {
        interval: false
    })

var carouselWidth=$('.carousel-inner')[0].scrollWidth;
var cardWidth = $('.carousel-item').width();

var scrollPosition = 0;

$('.carousel-control-next').on('click',function(){
    if(scrollPosition < (carouselWidth - (cardWidth *4))){
    console.log('next')
    scrollPosition = scrollPosition + cardWidth;
    $('.carousel-inner').animate({scrollLeft: scrollPosition},600);
}
});
$('.carousel-control-prev').on('click',function(){
    if(scrollPosition > 0){
    console.log('prev')
    scrollPosition = scrollPosition - cardWidth;
    $('.carousel-inner').animate({scrollLeft: scrollPosition},600);
}
});
}else{
    $(multipleItems).addClass('slide');
}
// var carousel = document.querySelector('#carouselExampleControls');

// // Get the carousel items
//     var carouselItems = carousel.querySelectorAll('.carousel-item');

// // Get the previous and next buttons
// var prevButton = carousel.querySelector('.carousel-control-prev');
// var nextButton = carousel.querySelector('.carousel-control-next');

// // Set the current slide index
// var currentIndex = 0;

// // Function to slide to the previous item
// function slidePrev() {
//   currentIndex--;
  
//   // Check if the current index is less than 0
//   if (currentIndex < 0) {
//     // Set the current index to the last slide
//     currentIndex = carouselItems.length - 1;
//   }
  
//   // Slide to the previous item
//   carouselItems[currentIndex].className = 'carousel-item active';
//   carouselItems[currentIndex + 1].className = 'carousel-item';
// }

// // Function to slide to the next item
// function slideNext() {
//   // Increment the current index
//   currentIndex++;
  
//   // Check if the current index is greater than or equal to the number of slides
//   if (currentIndex >= carouselItems.length) {
//     // Set the current index to 0
//     currentIndex = 0;
//   }
  
//   // Slide to the next item
//   carouselItems[currentIndex].className = 'carousel-item active';
//   carouselItems[currentIndex - 1].className = 'carousel-item';
// }

// // Add event listeners to the previous and next buttons
// prevButton.addEventListener('click', function() {
//   slidePrev();
// });

// nextButton.addEventListener('click', function() {
//   slideNext();
// });

// // Carousel FUNCTION
// $(document).ready(function(){
//     $('.carousel').carousel();
// });
// //carousel
// const multipleItems = document.querySelector('.carouselExampleIndicators');

// if(window.matchMedia("(min-width:576px)").matches){

//     const carousel = new bootstrap.Carousel(multipleItems, 
//     {
//         interval: false
//     })

// var carouselWidth=$('.carousel-inner')[0].scrollWidth;
// var cardWidth = $('.carousel-item').width();

// var scrollPosition = 0;

// $('.carousel-control-next').on('click',function(){
//     if(scrollPosition < (carouselWidth - (cardWidth *4))){
//     console.log('next')
//     scrollPosition = scrollPosition + cardWidth;
//     $('.carousel-inner').animate({scrollLeft: scrollPosition},600);
// }
// });
// $('.carousel-control-prev').on('click',function(){
//     if(scrollPosition > 0){
//     console.log('prev')
//     scrollPosition = scrollPosition - cardWidth;
//     $('.carousel-inner').animate({scrollLeft: scrollPosition},600);
// }
// });
// }else{
//     $(multipleItems).addClass('slide');
// }




