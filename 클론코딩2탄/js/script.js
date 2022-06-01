$(function() {
    $(function() { // script 영역 slide banner 만들기 예2
      const widthNum = 300; // slide li 개별 너비, ul.column의 너비를 계산할 수 있다.
      const caInner = $("#carousel1-inner");
    
      // li의 개수 가져오기
      let liLeng = $("ul.column1 li", caInner).length;
    
      // li의 개수로 ul.column의 너비를 설정
      $("#carousel1-inner ul.column1").css("width", widthNum * liLeng);
    
      // next button script
      $("#carousel1-next").click(function() {
        let caInMarginLeft = parseInt($("#carousel1-inner").css("margin-left"));
        let isAni = $(caInner).is(":animated");
        if (!isAni) {
          $(caInner).animate({marginLeft: caInMarginLeft - widthNum}, "slow", "swing", function() {
            $("#carousel1-inner ul.column1 li:first").appendTo("#carousel1-inner ul.column1");
            $(caInner).css("margin-left", -widthNum);
          })
        };
      });
    
      $("#carousel1-prev").click(function() {
        let caInMarginLeft = parseInt($(caInner).css("margin-left"));
        let isAni = $(caInner).is(":animated");
        if (!isAni) {
          $(caInner).animate({marginLeft: caInMarginLeft + widthNum}, "slow", "swing", function() {
            $("#carousel1-inner ul.column1 li:last").prependTo("#carousel1-inner ul.column1");
            $(caInner).css("margin-left", -widthNum);
          })
        };
      });
    
    //   let auto = function(){
    //     timerID = setInterval(function(){
    //       $("#carousel1-next").trigger("click");
    //     },3000);
    //     return timerID;
    //   };
    
    //   auto()
    
    //무한루프
      $("#carousel1, #carousel1-prev, #carousel1-next").on({
        mouseenter: function(){
          clearInterval(timerID);
        },
        mouseleave: function(){
          timerID = setInterval(function(){
            $("#carousel1-next").trigger("click");
          },3000);
        }
      });
    
    }); // loop end

        //rightfix
  $(window).scroll(function(){
    let fixbox = $(".right_fixbox");
    if($(this).scrollTop() == 0){
      fixbox.removeClass("on");
    }else{
      fixbox.addClass("on");
    }

    let wHeight = $(window).height();
    let scTop = $(this).scrollTop();
    $("section").each(function(){
        let thisElem = $(this);
        let thisOffset = $(this).offset();
        if(thisOffset.top <= scTop + intervalNum && scTop <= thisOffset.top + wHeight){
            thisElem.addClass("active");
        }
    })
 })

 $("hobby").css({"display" : "none", "height" : 0});
 $(".chatting .chat_btn").click(function(){
     let thisElem = $(this);
     $("hobby").each(function(){
         if(parseInt($(this).css("height")) ==100){
             $(this).animate({height : 0}, 300, function (){
                 $(this).css("display", "none");
             });
         };
     });
     $("+a", thisElem).css("display", "block").animate({height : 200}, 400);
 });
}); 
