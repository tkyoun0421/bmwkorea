$(function(){
    var artGroup = $('.artGroup');
    var thumbGroup = $('.thumbGroup');
    var btns = $('.thumbView>.btns');
    thumbGroup.find('.article:last').prependTo(thumbGroup);
    thumbGroup.css({
        marginLeft : '-34%'
    });
    artGroup.find('.article:last').prependTo(artGroup);
    artGroup.css({
        marginLeft : '-100%'
    })
    btns.find('.btn:first').click(function(){
        thumbGroup.stop().animate({
            marginLeft : '0'
        },500,function(){
            thumbGroup.find('.article:last').prependTo(thumbGroup);
            thumbGroup.css({
                marginLeft : '-34%'
            });
        });
        artGroup.stop().animate({
            marginLeft : '0'
        },500,function(){
            artGroup.find('.article:last').prependTo(artGroup);
            artGroup.css({
                marginLeft : '-100%'
            });
        });
    });
    btns.find('.btn:last').click(function(){
        thumbGroup.stop().animate({
            marginLeft : '-68%'
        },500,function(){
            thumbGroup.find('.article:first').appendTo(thumbGroup);
            thumbGroup.css({
               marginLeft : '-34%'
           }); 
        });
        artGroup.stop().animate({
            marginLeft : '-200%'
        },500,function(){
            artGroup.find('.article:first').appendTo(artGroup);
            artGroup.css({
                marginLeft : '-100%'
            });
        });
    });
});