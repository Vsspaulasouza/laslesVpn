let show = true;

const menuSection = document.querySelector(".menu-section");
const menuToggle = document.querySelector(".menu-toggle");

menuToggle.addEventListener("click", () => {

    document.body.style.overflow = show ? "hidden" : "initial";

    menuSection.classList.toggle("on", show);
    show = !show;
})

function clickMenu(show){
    menuSection.classList.remove("on");
    document.body.style.overflow = "initial";
}

$('.owl-carousel').owlCarousel({
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    center: true,
    loop:true,
    margin:20,
    nav:true,
    responsive:{
    0:{
        items:1,
        stagePadding: 0
    },
    370:{
        items:1,
        stagePadding: 20
    },
    430:{
        items: 1,
        stagePadding: 40
    },
    665:{
        items:2,
        stagePadding: 50
    },
    1000:{
        items:3
    }
}
})