

$(function () {
    $('#clock').countdown('2021/11/25', function(event) {
        $(this).html(event.strftime('%D<span>:</span>%H<span>:</span>%M'));
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



