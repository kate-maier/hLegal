// // Burger
let burger = document.querySelector("#burger-icon");
let header = document.querySelector("#header");
burger.onclick = function () {
    header.classList.toggle("menu_open");
};

$(document).ready(function () {
    // buttons change color language
    $('.header__lang li button').click(function () {
        $('.header__lang li button').removeClass("header__lang-button_active");
        $(this).addClass("header__lang-button_active");
    });
    //Плавная прокрутка якоря
    $('a[href^="#services"]').bind("click", function (e) {
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top - 2
        }, 800);
        e.preventDefault();
    });
    // buttons change color advantages
    $('.advantages__titles li button').click(function () {
        $('.advantages__titles li button').removeClass("advantages__button_active");
        $(this).addClass("advantages__button_active");
    });

    // buttons change color switcher news
    $('.publications__button').click(function () {
        $('.publications__button').removeClass("publications__button_active");
        $(this).addClass("publications__button_active");
    });

    // Content Switcher

    $(".publications__articles").hide();

    $("#switch-articles").click(function () {
        $(".publications__articles").show();
        $(".publications__news").hide();
    });
    $("#switch-news").click(function () {
        $(".publications__articles").hide();
        $(".publications__news").show();
    });


    // load-more news
    $(".cards-news").slice(0, 6).show();
    $("#more-news").on("click", function (e) {
        e.preventDefault();
        $(".cards-news:hidden").slice(0, 6).slideDown();
        if ($(".cards-news:hidden").length == 0) {
            $(".more-news").text("").addClass("more-news_no-content");
        }
    });

    // load-more articles
    $(".cards-articles").slice(0, 6).show();
    $("#more-articles").on("click", function (e) {
        e.preventDefault();
        $(".cards-articles:hidden").slice(0, 6).slideDown();
        if ($(".cards-articles:hidden").length == 0) {
            $(".more-articles").text("").addClass("more-articles_no-content");
        }
    });

    // carousel homepage
    $('.about-team__slider').slick({
        dots: true,
        arrows: false
    });
    // carousel about-page
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
                breakpoint: 767,
                settings: {
                    slidesToShow: 4,
                }
            }
        ]
    });
});

// appearance text
$(document).on('click', '.advantages__button', function () {
    var show = $(this).data('show');
    $(show).removeClass("advantages__wrap-content_hide").siblings().addClass("advantages__wrap-content_hide");
});
