// Burger

let burger = document.querySelector("#burger-icon");
let header = document.querySelector("#header");
burger.onclick = function () {
    header.classList.toggle("menu_open");
};

// buttons change color language

$(document).ready(function(){
    $('.header__lang li button').click(function(){
      $('.header__lang li button').removeClass("header__lang-button_active");
      $(this).addClass("header__lang-button_active");
  });
  });


  //Плавная прокрутка. Якоря
  //вместо a[href^="#"] можно добавлять класс cсылки или индификатор
  $(document).ready(function(){
    $('a[href^="#services"]').bind("click", function(e){
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top - 2
        }, 800);
        e.preventDefault();
    });
    return false;
});

// buttons change color advantages

$(document).ready(function(){
    $('.advantages__titles li button').click(function(){
      $('.advantages__titles li button').removeClass("advantages__button_active");
      $(this).addClass("advantages__button_active");
  });
  });

// appearance text
$(document).on('click', '.advantages__button', function() {
    var show = $(this).data('show');
    $(show).removeClass("advantages__wrap-content_hide").siblings().addClass("advantages__wrap-content_hide");
  });
  

// carousel homepage

$(document).ready(function(){
    $('.about-team__slider').slick({
        dots: true,
        arrows: false
    });
});


// carousel about-page

$(document).ready(function () {
    $('.slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        speed: 300,
        infinite: true,
        mobileFirst: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4,
                }
            }
        ]
    });
});

