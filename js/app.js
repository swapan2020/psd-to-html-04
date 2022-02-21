$('.owl-carousel').owlCarousel({
    loop:true,
    nav:false,
    autoplay:1500,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});



document.querySelector(".mobile-bar").addEventListener("click",function(){
    document.querySelector(".main-menu").classList.toggle("active");
});

window.addEventListener('scroll' ,function(){
    var scroll = document.querySelector(".scrollTop");
    scroll.classList.toggle("show", window.scrollY > 500);
});

function toTop(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}