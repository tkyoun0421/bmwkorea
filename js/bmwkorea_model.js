$(function(){
    $('.artRight>ul.images>li.image').click(function(){        
        var index = $(this).index();
        $('.artLeft>.artView').css({
            marginTop: (index + 1) * -520 + 'px'
        });
    });
});