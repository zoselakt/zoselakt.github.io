$(function() {
  $(function() { 
    const widthNum = 305; 
    const caInner = $("#carousel-inner");
  
    let liLeng = $("ul.column li", caInner).length;
  
    $("#carousel-inner ul.column").css("width", widthNum * liLeng * liLeng );
  
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

    /*---------------------------------------- */

    $(function() { 
      const widthNum = 305; 
      const newsInner = $("#news-inner");
    
      let newsLeng = $("ul.news-column li", newsInner).length;
    
      $("#news-inner ul.news-column").css("width", widthNum * newsLeng * newsLeng );
    
      $("#news-next").click(function() {
        let caInMarginLeft = parseInt($("#news-inner").css("margin-left"));
        let isAni = $("#news-inner").is(":animated");
        if (!isAni) {
          $("#news-inner").animate({marginLeft: caInMarginLeft - widthNum}, "slow", "swing", function() {
            $("#news-inner ul.news-column li:first").appendTo("#news-inner ul.news-column");
            $("#news-inner").css("margin-left", -widthNum);
          })
        };
      });
    
      $("#news-prev").click(function() {
        let caInMarginLeft = parseInt($("#news-inner").css("margin-left"));
        let isAni = $("#news-inner").is(":animated");
        if (!isAni) {
          $("#news-inner").animate({marginLeft: caInMarginLeft + widthNum}, "slow", "swing", function() {
            $("#news-inner ul.news-column li:last").prependTo("#news-inner ul.news-column");
            $("#news-inner").css("margin-left", -widthNum);
          })
        };
      });
    
      let auto = function(){
        timerID = setInterval(function(){
          $("#news-next").trigger("click");
        },3000);
        return timerID;
      };
    
      auto()
    
      $("#news-carousel, #news-prev, #news-next").on({
        mouseenter: function(){
          clearInterval(timerID);
        },
        mouseleave: function(){
          timerID = setInterval(function(){
            $("#news-next").trigger("click");
          },3000);
        }
      });0
    
    }); // end
  
    //back top
    const intervalNum = 150;
      $("nav ul li a", "back-to-top a, a.button, #footer ul li a").click(function(){
      let thisHash = $(this.hash);
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
           let thisElem = $(this);
           let thisOffset = $(this).offset();
           if(thisOffset.top <= scTop + intervalNum && scTop <= thisOffset.top + wHeight){
               thisElem.addClass("active");
           }
       })
    })
  }); 
