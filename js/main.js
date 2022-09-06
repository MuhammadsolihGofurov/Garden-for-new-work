$(document).ready(function(){

    // bars
    let openBtn = $('#open');
    $(openBtn).click(function(){
        $('.menu').slideToggle();
    });

    $('.main-content').slick({
        infinite: true , 
        fade : true ,
        prevArrow: $('.slick_arrow_left'),
        nextArrow: $('.slick_arrow_right'),
        responsive: [
            {
              breakpoint: 500,
              settings: {
                prevArrow: '',
                nextArrow: ''
              }
            }
          ]
    });

    $('.multiple-items').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1 ,
        prevArrow: $('.offer_prev'),
        nextArrow: $('.offer_next'),
        responsive: [
            {
              breakpoint: 850,
              settings: {
                slidesToShow: 2,
              }
            },
            {
                breakpoint: 650,
                settings: {
                  slidesToShow: 1,
                }
              }
          ]
    });

    // date
    $( function() {
      $( "#datepicker" ).datepicker();
    } );

})


// tooltip init
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

// loader
let loader = document.querySelector('.loader');

setTimeout(function(){
  loader.style.opacity = '0';
  setTimeout(function(){
    loader.style.display = 'none';
  } , 500)
} , 2000)

//   scroll top
let mybutton = document.getElementById("btn-back-to-top");
        window.onscroll = function () {
        scrollFunction();
        };

        function scrollFunction() {
        if (
            document.body.scrollTop > 20 ||
            document.documentElement.scrollTop > 20
        ) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
        }
       if(mybutton){
        mybutton.addEventListener("click", backToTop);
       }

        function backToTop() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        }