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

/*rederict to map*/
let goMap = $('.map')


goMap.click(()=>{

    $('.overlay').addClass('fadeMe')
    $('.overlay').on('transitionend', function () {
  window.location.href = "map.html"
});})
