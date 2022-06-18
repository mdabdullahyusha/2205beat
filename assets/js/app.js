$(document).ready(function(){
    $('.back_to_top').click(function(){
        $('html, body').animate({scrollTop:0},1500);
    });
    $(window).scroll(function(){
        const scrollar = $(this).scrollTop();

        if(scrollar > 500) {
            $('.back_to_top').fadeIn(500);
        }
        else {
            $('.back_to_top').fadeOut(500);
        }
        if(scrollar > 200) {
            $('.navigation_part').addClass('bg');
        }
        else {
            $('.navigation_part').removeClass('bg');
        }
    });
    $('.show_pass').click(function(){
        let x = document.getElementById('password');
        if(x.type == 'password') {
            x.type = 'text';
        }
        else {
            x.type = 'password';
        }
    })
});

var swiper = new Swiper(".mySlider", {
    pagination: {
        el: ".swiper-pagination",
    },
    spaceBetween: 30,
    slidesPerView: 2,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
});
var typed = new Typed('.element', {
    // Waits 1000ms after typing "First"
    strings: [
        'creative designer.',
        'creative developer.',
        'wp customizor.',
        'wp site optimizor.',
    ],
    typeSpeed: 60,
    backSpeed: 60,
    loop: true,
  });

new WOW().init();
new VenoBox({
    selector: '.my-image-links',
    numeration: true,
    infinigall: true,
    share: true,
    spinner: 'rotating-plane'
});