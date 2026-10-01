$(function() {
    $('.btn-mobile').click(function() {
        $('.gnb').slideToggle();
        $('.logo').toggleClass('on');
        $('.btn-mobile').toggleClass('on')
    })
})