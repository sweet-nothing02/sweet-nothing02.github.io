$(window).bind('scroll', function() {
    parallaxScroll();
});

function parallaxScroll() {
    var scrolled = $(window).scrollTop();
    $('.background-middle').css('transform', 'translateY(' + (0 - (scrolled * 0.2)) + 'px)');
    $('.content').css('transform', 'translateY(' + (0 - (scrolled * 1)) + 'px)');
    $('.gadget').css('transform', 'translateY(' + (0 - (scrolled * 0.6)) + 'px)');
}