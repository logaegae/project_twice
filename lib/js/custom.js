$(document).ready(function(){
    
    
    $(window).resize(function(){
        var winW = $(window).width();
        var winH = $(window).height();
        
        if(winW / winH >= 1.5){
            console.log(winW / winH)
            $('.bg').css({
                'width':winW,
                'height':winW / 1.5,
                'marginTop': (winH - winW / 1.5)*0.5,
                'marginLeft':0
            })
        }
        
        else if(winW / winH < 1.5){
            console.log(winW / winH)
            $('.bg').css({
                'width':winH * 1.5,
                'height':winH,
                'marginTop':0,
                'marginLeft': (winW - winH * 1.5)*0.5
            })
        }
    })
    
})