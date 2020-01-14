$(document).ready(function () {

    $('.main-slider').slick({
        slidesToShow: 1,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
        appendArrows: '.main-slider__nav'
    });

    $(".main-slider").on('afterChange', function (event, slick, currentSlide) {
        $(".main-slider-cp").text(currentSlide < 10 ? `0${currentSlide + 1}` : currentSlide + 1);
    });

    $('.project-slider').slick({
        slidesToShow: 2,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
        appendArrows: '.project-slider__nav',
        slidesToScroll: 1
    });

    $(".project-slider").on('afterChange', function (event, slick, currentSlide) {
        $(".project-cp").text(currentSlide < 10 ? `0${currentSlide + 1}` : currentSlide + 1);
    });

    $('.gallery-slider').slick({
        slidesToShow: 3,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
        appendArrows: '.gallery-slider__nav',
        slidesToScroll: 1
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

    $('.drop-item').click(function (e) {
        e.preventDefault();
        $('.header-dropdown').fadeToggle();
    });

    var activeStep = 1;
    $('.calculation .btn-next').click(function (e) {
        e.preventDefault();
        $('.calculation-body').hide().eq(activeStep++).show();

        if (activeStep == $('.calculation-body').length) {
            $(this).hide();
        }
        // $('.readiness-scale__line .bg-line').css("width", "+=25%");

        $('.readiness-scale span').text(parseFloat($('.readiness-scale span').text()) + 1);
    });

});


