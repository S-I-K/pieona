$(()=>{
    let lastScrollTop = 0;
    const delta = 15;

    $(window).scroll(function(event){
        const st = $(this).scrollTop();
        if(Math.abs(lastScrollTop - st) <= delta) return;

        if((st > lastScrollTop) && (lastScrollTop > 0)) {
            $('header').addClass('header-hide');
        }else{
            $('header').removeClass('header-hide');
        };
        lastScrollTop = st;
    });

    $('.back-top-btn.sub-scroll').click(function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 1800,)
        return false;
    });
});


const lenis = new Lenis();
lenis.on('scroll', (e) => {
    // console.log(e);
})
function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);