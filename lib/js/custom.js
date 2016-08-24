$(document).ready(function(){

// 배경 가운데 조정
    // $(window).resize(function(){
    //     var winW = $(window).width();
    //     var winH = $(window).height();
    //
    //     if(winW / winH >= 1.5){
    //
    //         $('.wrapper').css({
    //             'width':winW,
    //             'height':winW / 1.5,
    //             'marginTop': (winH - winW / 1.5)*0.5,
    //             'marginLeft':0
    //         })
    //     }
    //
    //     else if(winW / winH < 1.5){
    //
    //         $('.wrapper').css({
    //             'width':winH * 1.5,
    //             'height':winH,
    //             'marginTop':0,
    //             'marginLeft': (winW - winH * 1.5)*0.5
    //         })
    //     }
    // })
// 메뉴 클릭 이벤트
    $('.nav button').click(function(){

        if(!$('.nav ul').is('.open')){
            $('.nav ul').addClass('open');
            $('.nav ul').css({'display':'block'});
        }else{
            $('.nav ul').removeClass('open');
            $('.nav ul').css({'display':'none'});
        }
    })

})
// 반응형 보정
$(window).resize(function(){
    if($(window).width() >= 777 ){
        $('.nav ul').css({'display':'block'});
    }else{
        if($('.nav ul').is('.open')){
            $('.nav ul').css({'display':'block'});
        }else{
            $('.nav ul').css({'display':'none'});
        }
    }
})
