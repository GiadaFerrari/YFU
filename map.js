let goDest = $('.destination')


goDest.click((c)=>{
    $('.fay').removeClass('fadeMeIn');
    $('.fay').addClass('fadeMe')
    $('.fay').on('animationend', ()=> {

        document.querySelector('.mainMap').style.cssText = "display: none;"

        fetch('countries.json').then(result => result.json()).then(data => create(data));})
        let clicked = c.target


    console.log(clicked)
     function create(elem){
           if($(clicked).hasClass('usa')){


            const mainTemplate = document.querySelector('.country').content;

            const postTemplate = document.querySelector('.post').content

            const myClone = mainTemplate.cloneNode(true);

            const postClone = postTemplate.cloneNode(true);


        myClone.querySelector('.background').cssText = "background-image: url(" + elem[0].himage + ")";
        myClone.querySelector('.name').textContent = elem[0].country;



        elem[0].posts.forEach((p)=>{

postClone.querySelector('.flag').style.cssText = "background-image: url(" +elem[0].bimage+");";
            p.forEach((post)=>{


                postClone.querySelector('.number').textContent = post.number;
                postClone.querySelector('.category').textContent = post.category;


                postClone.querySelector('.firstimg').src = post.image
                postClone.querySelector('.first figcaption').textContent = post.caption;
                postClone.querySelector('.secondimg').src = post.image
                postClone.querySelector('.coolSlide').textContent = post.image;
                postClone.querySelector('.quote').textContent = post.paragraph;

            })


        })

        const appendT = document.querySelector('.append');
        const appendP = myClone.querySelector('.appendPost')


        appendP.appendChild(postClone)
        appendT.appendChild(myClone);







}


}})







