document.querySelectorAll('.title-container span, .mls-details span').forEach(element => {
    element.innerHTML = element.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
})

anime.timeline()
  .add({
    targets: '.title-container span .letter',
    translateX: [40,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1500,
    delay: (el, i) => 500 + 30 * i
  })
  document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('.title-container').style.opacity = 1;
  }, false);



  anime.timeline()
.add({
  targets: '.mls-details span',
  translateX: [40,0],
  translateZ: 0,
  opacity: [0,1],
  easing: "easeOutExpo",
  duration: 800,
  delay: (el, i) => 500 + 30 * i
})

function panSlides() {
    const panOptions = [
        'pan-left', 'pan-left-top', 'pan-right-top', 'pan-right', 'pan-right-bottom', 'pan-left-bottom'
    ]
    document.querySelectorAll('.slider-image-swiper .swiper-slide').forEach(element => {

        const index = Math.floor(Math.random() * panOptions.length);
        element.classList.add(panOptions[index])
        panOptions.splice(index, 1)
    })
}
document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('.mls-details').style.opacity = 1;
    document.querySelector('.title-container').style.opacity = 1;

    panSlides()
}, false);

// document.addEventListener('DOMContentLoaded', function(){
//   document.querySelectorAll('.single-service').forEach(element => {
//     element.classList.add('revealator-within')
//   })
// });