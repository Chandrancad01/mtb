console.log("welcome to javascript");
console.log("welcome to javascript");
console.log(10);
console.log(10.10);

//to print objects in console
console.log({fname:"chandran", gender:"male"});
console.table({fname:"chandran", gender:"male"});

//to print array console
console.log([5,3,20,23]);
console.log([5,3,20,23]);
console.log(true);  

//print in console with variable decleration
var a=5;
let b=7;

console.log(a);
console.log(b);


$(document).ready(function() {
  // Swiper: Slider
      new Swiper('.swiper-container', {
          loop: true,
          nextButton: '.swiper-button-next',
          prevButton: '.swiper-button-prev',
          slidesPerView: 3,
          paginationClickable: true,
          spaceBetween: 20,
          breakpoints: {
              1920: {
                  slidesPerView: 3,
                  spaceBetween: 30
              },
              1028: {
                  slidesPerView: 2,
                  spaceBetween: 30
              },
              480: {
                  slidesPerView: 1,
                  spaceBetween: 10
              }
          }
      });
  });
  display: -webkit-flex;