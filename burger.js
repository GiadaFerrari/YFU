/*header redirect*/

$('.logo').on('click', ()=>{window.location.href = "index.html"})
$('.home').on('click', ()=>{window.location.href = "index.html"})


/*burger menu*/

$('.burger').on('click', ()=>{  window.location.href = "burger.html"
})



/*template handling*/

let goDest = $('.destination')

goDest.click((c) => {
        $('.fay').removeClass('fadeMeIn');
        $('.fay').addClass('fadeMe')
        $('.fay').on('animationend', () => {

            let header = document.querySelector('header');
            header.nextElementSibling.classList.add('whiteMe');

            /*opacity on scroll*/
            let heroImg = $('.whiteMe');
            let range = heroImg.outerHeight;

            $(window).scroll(function () {
                var scrollTop = $(this).scrollTop();

                $('.whiteMe').css({
                    opacity: function () {
                        var elementHeight = $(this).height();
                        return 1 - (elementHeight - scrollTop) / elementHeight;
                    }

                });

            });


            fetch('countries.json').then(result => result.json()).then(data => create(data));
        })
        let clicked = c.target
         function create(elem) {
             console.log(clicked)

            if ($(clicked).hasClass('usas')) {
                console.log('usa')
                const mainTemplate = document.querySelector('.country').content;
                const myClone = mainTemplate.cloneNode(true);

                myClone.querySelectorAll('svg').forEach((s)=>{
                                                        s.style.cssText = "stroke:" + elem[0].color;
                console.log('colorset')})
                myClone.querySelector('.source').setAttribute('src', elem[0].video)

                let video = myClone.querySelector('video')
let play = document.querySelector('.play')
console.log(video)
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


                myClone.querySelectorAll('.name').forEach( (name)=> {name.textContent = elem[0].country;})
                document.querySelector('.logo').style.cssText = "fill:" + elem[0].color+";"
                myClone.querySelector('.name').style.cssText = "color:" + elem[0].color + ";"
                myClone.querySelector('h1').style.cssText = "color:" + elem[0].color + ";"
                myClone.querySelector('.capital').textContent = elem[0].capital;
                myClone.querySelector('.lan').textContent = elem[0].lan;
                myClone.querySelector('.currency').textContent = elem[0].currency;
                myClone.querySelector('.foody').textContent = elem[0].foody;
                myClone.querySelector('.quote').textContent = elem[0].quote;
                myClone.querySelector('.intro').textContent = elem[0].intro;
                myClone.querySelector('.main').style.cssText = "background-image:url(" + elem[0].left+");";
                myClone.querySelector('.top').style.cssText = "background-image:url(" + elem[0].top+");";
                myClone.querySelector('.bottom').style.cssText = "background-image:url(" + elem[0].bottom +");";
                myClone.querySelector('.right').style.cssText = "background-image: url(" + elem[0].right + ");";
                myClone.querySelector('.left').style.cssText = "background-image: url(" + elem[0].main + ");";
                myClone.querySelectorAll('.ambassador').forEach((amb) => {
                    amb.textContent = elem[0].ambassador;})

                     const appendT = document.querySelector('.append');

                appendT.appendChild(myClone);
            }}})
