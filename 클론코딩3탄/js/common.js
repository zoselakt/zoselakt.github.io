$(function() {
  $(function() { // script 영역 slide banner 만들기 예2
    const widthNum = 300; // slide li 개별 너비, ul.column의 너비를 계산할 수 있다.
    const caInner = $("#carousel-inner");
  
    // li의 개수 가져오기
    let liLeng = $("ul.column li", caInner).length;
  
    // li의 개수로 ul.column의 너비를 설정
    $("#carousel-inner ul.column").css("width", widthNum * liLeng);
  
    // next button script
    $("#carousel-next").click(function() {
      let caInMarginLeft = parseInt($("#carousel-inner").css("margin-left"));
      let isAni = $("#carousel-inner").is(":animated");
      if (!isAni) {
        $("#carousel-inner").animate({marginLeft: caInMarginLeft - widthNum}, "slow", "swing", function() {
          $("#carousel-inner ul.column li:first").appendTo("#carousel-inner ul.column");
          $("#carousel-inner").css("margin-left", -widthNum);
        })
      };
    });
  
    $("#carousel-prev").click(function() {
      let caInMarginLeft = parseInt($("#carousel-inner").css("margin-left"));
      let isAni = $("#carousel-inner").is(":animated");
      if (!isAni) {
        $("#carousel-inner").animate({marginLeft: caInMarginLeft + widthNum}, "slow", "swing", function() {
          $("#carousel-inner ul.column li:last").prependTo("#carousel-inner ul.column");
          $("#carousel-inner").css("margin-left", -widthNum);
        })
      };
    });
  
    let auto = function(){
      timerID = setInterval(function(){
        $("#carousel-next").trigger("click");
      },3000);
      return timerID;
    };
  
    auto()
  
    $("#carousel, #carousel-prev, #carousel-next").on({
      mouseenter: function(){
        clearInterval(timerID);
      },
      mouseleave: function(){
        timerID = setInterval(function(){
          $("#carousel-next").trigger("click");
        },3000);
      }
    });0
  
  }); // end


  const intervalNum = 150;
    $("nav ul li a", "back-to-top a, a.button, #footer ul li a").click(function(){
    let thisHash = $(this.hash);
    $("html, body").stop();
        $("html, body").animate({scrollTop : thisHash.offset().top}, 1500);
    });

    //back top
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
           let thisElem = $(this);
           let thisOffset = $(this).offset();
           if(thisOffset.top <= scTop + intervalNum && scTop <= thisOffset.top + wHeight){
               thisElem.addClass("active");
           }
       })
    })

    //이미지클릭
  $(".slideimg a").click(function () {
    let imgSrc = $(this).attr("href");
    let checkAni = $(".leftimg-text img:last").is(":animated");
    let lastimg = $(".leftimg-text img:last");
    let mainimg = $(".leftimg-text img");
    if (checkAni == true) {
      $(mainimg).before(`<img src="${imgSrc}">`)
      $(lastimg).stop().css("opacity", 0);
      $(lastimg).remove();
      $(mainimg).attr("src", imgSrc);
    } else {
      $(mainimg).before(`<img src="${imgSrc}">`)
      $(lastimg).stop().css("opacity", 1);
      $(lastimg).remove();
      $(mainimg).attr("src", imgSrc);
    }
    return false;
  });

  // 최근본상품
  $("#section a").click(function () {
    let imgSrc = $(this).attr("href");
    let checkAni = $(".chatting img:last").is(":animated");
    let lastimg = $(".chatting img:last");
    let mainimg = $(".chatting img");
    if (checkAni == true) {
      $(mainimg).before(`<img src="${imgSrc}">`)
      $(lastimg).stop().css("opacity", 0);
      $(lastimg).remove();
      $(mainimg).attr("src", imgSrc);
    } else {
      $(mainimg).before(`<img src="${imgSrc}">`)
      $(lastimg).stop().css("opacity", 1);
      $(lastimg).remove();
      $(mainimg).attr("src", imgSrc);
    }
    return false;
  });
// end
}); 
