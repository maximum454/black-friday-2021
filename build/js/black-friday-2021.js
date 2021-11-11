

$(function () {
    $('#clock').countdown('2021/11/25', function(event) {
        $(this).html(event.strftime('<div>%D <div class="sub-slog">дня</div></div><span>:</span><div>%H<div class="sub-slog">часов</div></div><span>:</span><div>%M <div class="sub-slog">минут</div></div>'));
    });
    $('a[href^="#"]').on('click', function(event) {
        // отменяем стандартное действие
        event.preventDefault();

        var sc = $(this).attr("href"),
            dn = $(sc).offset().top-130;

        $('html, body').animate({scrollTop: dn}, 1000);
    });
})

const swiperBlackFriday2021 = new Swiper('.swiper-black-friday-2021', {
    slidesPerView: 5,
    spaceBetween: 0,
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        320: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 5,
        }
    }
});



