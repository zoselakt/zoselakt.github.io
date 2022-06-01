'use strict'
$(function(){
    const intervalNum = 150;
    $("nav ul li a", "back-to-top a, a.button, #footer ul li a").click(function(){
        // console.log($(this.hash));
        // console.log($(this.hash).offset().top);
        let thisHash = $(this.hash);

        //방법1 //즉시 작동이 안됨 / 애니메이션 종료후 이동
        // let isAni = $("html, body").is(":animated")
        // if(!isAni){
        //     $("html, body").animate({scrollTop : thisHash.offset().top}, 1500);
        // }

        //방법2 // 즉시 작동 가능
        $("html, body").stop();
        $("html, body").animate({scrollTop : thisHash.offset().top}, 1500); 
    });

    $(window).scroll(function(){
        let backTop = $(".back-to-top");
        if($(this).scrollTop() == 0){
            backTop.removeClass("on");
        }else{
            backTop.addClass("on");
        }
        
        let wHeight = $(window).height();
        let scTop = $(this).scrollTop();
        $("section").each(function(){
            // console.log($(this).offset())
            let thisElem = $(this);
            let thisOffset = $(this).offset();
            if(thisOffset.top <= scTop + intervalNum && scTop <= thisOffset.top + wHeight){
                thisElem.addClass("active");
            }
        })
    })
});