$(document).ready(function () {

    $('.main-slider').slick({
        slidesToShow: 1,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
        appendArrows: '.main-slider__nav',
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    dots: true,
                    autoplay: true
                }
            }
        ]
    });

    $(".main-slider").on('afterChange', function (event, slick, currentSlide) {
        $(".main-slider-cp").text(currentSlide < 10 ? `0${currentSlide + 1}` : currentSlide + 1);
    });

    $('.project-slider').slick({
        slidesToShow: 2,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
        appendArrows: '.project-slider__nav',
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1099,
                settings: {
                    slidesToShow: 1,
                    autoplay: true
                }
            }
        ]
    });

    $(".project-slider").on('afterChange', function (event, slick, currentSlide) {
        $(".project-cp").text(currentSlide < 10 ? `0${currentSlide + 1}` : currentSlide + 1);
    });

    $('.gallery-slider').slick({
        slidesToShow: 3,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
        appendArrows: '.gallery-slider__nav',
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1045,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 630,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    $(window).on('load resize', function() {
        if ($(window).width() < 900) {
            $('.section-article__content:not(.slick-initialized)').slick({
                slidesToShow: 2,
                prevArrow: '<button type="button" class="slick-prev"></button>',
                nextArrow: '<button type="button" class="slick-next"></button>',
                appendArrows: '.section-article__nav',
                responsive: [
                    {
                        breakpoint: 630,
                        settings: {
                            slidesToShow: 1
                        }
                    }
                ]
            });

            $(".section-article__content").on('afterChange', function (event, slick, currentSlide) {
                $(".section-article-slider-cp").text(currentSlide < 10 ? `0${currentSlide + 1}` : currentSlide + 1);
            });
        } else {
            $(".section-article__content.slick-initialized").slick("unslick");
        }
    });



    $(".gallery-slider").on('afterChange', function (event, slick, currentSlide) {
        $(".gallery-slider-cp").text(currentSlide < 10 ? `0${currentSlide + 1}` : currentSlide + 1);
    });

    ymaps.ready(function () {
        var map = new ymaps.Map("map", {
            center: [59.852746, 30.301584],
            zoom: 15
        });

        var place = new ymaps.Placemark(
            [59.852746, 30.301584], {
                hintContent: 'Санкт-Петербург, пр. Ленинский д. 160 лит. А',
            }, {
                iconImageHref: 'img/loc.png',
                iconImageSize: [49, 65],
                iconLayout: 'default#image',
            }
        );
        map.geoObjects.add(place);
    });

    $('.gallery-box').fancybox();
    $('[data-fancybox="video"]').fancybox({
        youtube: {
            controls: 0,
            showinfo: 0
        },
        vimeo: {
            color: 'f00'
        }
    });

    $('.header-bottom .drop-item').click(function (e) {
        e.preventDefault();
        $('.header-dropdown').fadeToggle();
    });

    $('.mobile-menu .drop-item').click(function (e) {
        e.preventDefault();
        $('.dropdown-menu__mobile').fadeToggle();
    });

    $('.btn-burger').click(function () {
        $('.mobile-menu').fadeIn();
    });

    $('.btn-close').click(function () {
        $('.mobile-menu').fadeOut();
    });

    var activeStep = 1;
    $('.calculation .btn-next').click(function (e) {
        e.preventDefault();
        $('.calculation-body').hide().eq(activeStep++).show();

        // if (activeStep == $('.calculation-body').length) {
        //     $(this).hide();
        // }
        // $('.readiness-scale__line .bg-line').css("width", "+=25%");

        $('.readiness-scale span').text(parseFloat($('.readiness-scale span').text()) + 1);
    });

    $('.links-view').click(function (e) {
        e.preventDefault();
        $('.general-description .text-box').addClass('item-view');
        $(this).hide();
    });


    var leftMargin = 0;
    var width = $(document).width();
    var windowWidth = ($(window).width()) / 2;

    $('.table-scroll__right').click(function (e) {
        e.preventDefault();
        $('.table').animate({
            marginLeft: "-=" + windowWidth
        }, 700);

        $('.table-scroll__left').css('display', 'flex');
        leftMargin = (leftMargin + windowWidth);
        if (leftMargin > width - windowWidth) {
            $('.table-scroll__right').css('display', 'none');
        }
    });

    $('.table-scroll__left').click(function (e) {
        e.preventDefault();
        $('.table').animate({
            marginLeft: "+=" + windowWidth
        }, 700);

        $('.table-scroll__right').css('display', 'flex');
        leftMargin = (leftMargin - windowWidth);
        if (leftMargin == 0) {
            $('.table-scroll__left').css('display', 'none');
        }
    });

});


