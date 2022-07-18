$(document).ready(function(){
$('.slider').slick({
  dots: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1500,
  pauseOnFocuse: true,
  pauseOnHover: true,
  pauseOnDotsHover: true,
  draggable: false, 
  centerMode: true,
  centerPadding: '60px',
  responsive:[
    {
      breakpoint:971,
      settings:{
        slidesToShow: 2,
      }
    },
    {
      breakpoint:750,
      settings:{
        slidesToShow: 1,
      }
    },
    {
      breakpoint:565,
      settings:{
        slidesToShow: 1,
        arrows: false,
        dots: false
      }
    }
  ]
  });
});