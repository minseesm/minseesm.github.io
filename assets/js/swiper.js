var swiper = new Swiper(".wedding-gallery", {
    spaceBetween: 30,
    // effect: "fade",
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    }, 
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    lazy: true,
    speed: 1000,
    loop: true,
    allowTouchMove: true,
    // breakpoints: {
    //     768: {
    //         pagination:false,
    //         allowTouchMove:false
    //     }
    // },

});