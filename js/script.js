/*console.log("welcome to javascript");
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
console.log(b);*/






const swiper = new Swiper('.swiper', {
        
    direction: 'vertical',
    loop: false,
    slidesPerView:1,
    autoplay: {delay: 20000,},
    spaceBetween: 10,
    
    
    pagination: {
      el: '.swiper-pagination',
      clickable:true,
    },
  
 navigation: {
    nextE1: '.swiper-button-next',
    prevE1: '.swiper-button-prev',
 },
  

    scrollbar: {
      el: '.swiper-scrollbar',
    },
    
  });