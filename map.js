





/*template handling*/

let goDest = $('.destination')


goDest.click((c)=>{
    $('.fay').removeClass('fadeMeIn');
    $('.fay').addClass('fadeMe')
    $('.fay').on('animationend', ()=> {

        document.querySelector('.mainMap').style.cssText = "display: none;"
        let header = document.querySelector('header');
        header.nextElementSibling.classList.add('whiteMe')
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


        fetch('countries.json').then(result => result.json()).then(data => create(data));})
        let clicked = c.target


    console.log(clicked)
     function create(elem){
           if($(clicked).hasClass('usa')){


            const mainTemplate = document.querySelector('.country').content;

            const postTemplate = document.querySelector('.post').content

            const myClone = mainTemplate.cloneNode(true);




        myClone.querySelector('.background').style.cssText = "background-image: url(" + elem[0].himage + ")";
        myClone.querySelector('.name').textContent = elem[0].country;



        elem[0].posts.forEach((p)=>{

                  let postClone = postTemplate.cloneNode(true);

            p.forEach((post)=>{
                postClone.querySelector('.flag').style.cssText = "background-image: url(" + elem[0].bimage + ")";
                postClone.querySelector('.number').textContent = post.number;
                postClone.querySelector('.category').textContent = post.category;
                console.log(p[0])
                postClone.querySelector('.firstimg').src = p[0].image
                postClone.querySelector('.first figcaption').textContent = p[0].caption;
                postClone.querySelector('.secondimg').src = p[1].image
                postClone.querySelector('.coolSlide').textContent = p[1].caption;
                postClone.querySelector('.quote').textContent = p[2].paragraph;


            })

            let appendP = myClone.querySelector('.appendPost');

            appendP.appendChild(postClone)

        })
            const appendT = document.querySelector('.append');

        appendT.appendChild(myClone);
}}}



)







