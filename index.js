/*opacity on scroll*/
let heroImg = $('.whiteMe');
let range = heroImg.outerHeight;

$(window).scroll(function() {
  var scrollTop = $(this).scrollTop();

  $('.whiteMe').css({
    opacity: function() {
      var elementHeight = $(this).height();
      return 1 - (elementHeight - scrollTop) / elementHeight;
    }
  });
});

/*burger menu*/

$('.burger').on('click', ()=>{  window.location.href = "burger.html"
})
/*video handling*/

let video = document.querySelector('video')
let play = document.querySelector('.play')

video.volume = 0.0

$('.play').on('click', playMeOnce)
function playMeOnce(){
    console.log('played')
    video.style.cssText = "z-index:999999;"
    $('.overlayIndex').addClass('hide');
    video.removeAttribute('loop')
    video.currentTime = 0
    video.play();
    video.volume = 1.0;
    video.addEventListener('ended', goBack);
    $('.backbtn').css('z-index', "99")
    $('.backbtn').on('click', goBack)

}

function goBack(){

    video.volume = 0.0;
    video.style.cssText = "z-index: 1";
    $('.overlayIndex').removeClass('hide');
    video.setAttribute('loop', true)
}
/*rederict to map*/
let goMap = $('.map')


goMap.click(()=>{

    $('.overlay').addClass('fadeMe')
    $('.overlay').on('transitionend', function () {
  window.location.href = "map.html"
});})


