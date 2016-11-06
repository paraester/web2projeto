/* ao clicar no icone */
$(".nav-toggle").click(function () {
    $(this).toggleClass("active");
    $(".menu-overlay").toggleClass("open");
});

/* ao clicar no link */
$(".overlay ul li a").click(function () {
    $(".nav-toggle").toggleClass("active");
    $(".menu-overlay").toggleClass("open");
});

/* ao clicar fora */
$(".overlay").click(function () {
    $(".nav-toggle").toggleClass("active");
    $(".menu-overlay").toggleClass("open");
});

/***************** Smooth Scrolling ******************/

$('nav a[href*=#]:not([href=#])').click(function () {
    if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            $('html,body').animate({
                scrollTop: target.offset().top
            }, 2000);
            return false;
        }
    }
});