$(function(){
    // 컨텐츠1
    $('.artRight>div.image').click(function(){
        alert(1);
        var index = $(this).index();
        $('.artGroup>.artLeft').css({
            marginTop: index + 1 * - 520 + 'px'
        });
    });
});