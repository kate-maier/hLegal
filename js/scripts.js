// Burger

let burger = document.querySelector("#burger-icon");
let header = document.querySelector("#header");
burger.onclick = function () {
    header.classList.toggle("menu_open");
};


// carousel

$(document).ready(function () {
    $('.slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
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

// buttons change color language

$("button.language__button").click(function(){
    $("button.language__button").css("background-color", "transparent");
  $(this).css("background-color", "#F0145A");
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
  