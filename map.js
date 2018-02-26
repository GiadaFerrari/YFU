let goUsa = $('.usa')


goUsa.click(()=>{
    $('.fay').removeClass('fadeMeIn');
    $('.fay').addClass('fadeMe')
    console.log('working on it')
    $('.fay').on('animationend', ()=>{

fetch('countries.json').then(result => result.json()).then(data => create(data));

        function create(e){}


})

})
