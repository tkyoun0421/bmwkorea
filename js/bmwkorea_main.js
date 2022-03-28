$(function(){
    //배너1
    var bnrLi = $('.paging>li');
    bnrLi.click(function(){
        bnrLi.removeClass('show');
        $(this).addClass('show');
        var bnrGroupSlide = $(this).index();
        $('.bnrGroup').css({
            marginLeft: bnrGroupSlide * -100 + 'vw'
        });
    });
});