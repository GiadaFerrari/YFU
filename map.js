let goDest = $('.destination')


goDest.click(()=>{
    $('.fay').removeClass('fadeMeIn');
    $('.fay').addClass('fadeMe')
    console.log('working on it')
    $('.fay').on('animationend', ()=> {

        document.querySelector('.mainMap').style.cssText = "display: none;"

        fetch('countries.json').then(result => result.json()).then(data => create(data));})}


        function create(e){


                e.forEach((elem)=>{
            const mainTemplate = document.querySelector('.country').content;

            const postTemplate = document.querySelector('.post').content

            const myClone = mainTemplate.cloneNode(true);

            const postClone = postTemplate.cloneNode(true);


        myClone.querySelector('.background').cssText = "background-image: url(" + elem.himage + ")";
        myClone.querySelector('.name').textContent = elem.country;


    console.log(elem.posts)

        elem.posts.forEach((p)=>{
            p.forEach((post)=>{

                postClone.querySelector('.flag').src = elem.bimage;
                postClone.querySelector('.number').textContent = p.number;
                postClone.querySelector('.category').textContent = p.category;


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





})}







