 $(document).ready(function(){
           
           var i=0;
           var tumGenislik=0;
           var genislik=$(".slider-top li").width();
           function animasyon(px){
           $(".slider-top").stop(false,false).animate({
                left:px*-1},2000);
         }
        var zamanlayici = setInterval(function(){

             tumGenislik=i*genislik;
             if(i==6){
              i=-1;
             }
             animasyon(tumGenislik);
             i++;
         },3000);
        
 


$(".slider-bottom-sub a").click(function () {
          clearInterval(zamanlayici);

          var element = $(this);
          var number = element.attr("data-no") - 1;
          var genislik = $(".slider-top li").width();
          var hedefLeft = genislik * number;
          
           $(".slider-top").animate({
                  left:hedefLeft * -1}, 1000);
        }); 

      }); 





     $(document).ready(function(){
        
        var click=0;
        var allWidth=0;
        var width=$(".slider-bottom ul ").width()*4;
        function animasyon2(px){
          $(".slider-bottom ul").stop(false,false).animate({
            left:px*-1},1000);
        }
     

        
       
       $(".kaydirma-oku-iki").click(function(){
        allWidth=click*width;
         $($(".slider-bottom ul")[1]).detach().prependTo($(".slider-bottom .slider-bottom-sub"));
         $(".slider-bottom .slider-bottom-sub").css("left", "0px");
         $(".slider-bottom .slider-bottom-sub").animate({left:-816}, 1000);
         animasyon2(allWidth);
         click++;
       });
     });
      


      $(document).ready(function(){
        
        var click=0;
        var allWidth=0;
        var width=$(".slider-bottom ul ").width()*4;
        function animasyon2(px){
          $(".slider-bottom ul").stop(false,false).animate({
            left:px},1000);
        }
       $(".kaydirma-oku").click(function(){
        allWidth=click*width;
         
         $($(".slider-bottom ul")[0]).detach().appendTo($(".slider-bottom .slider-bottom-sub"));
         $(".slider-bottom .slider-bottom-sub").css("left", "-816px");
         $(".slider-bottom .slider-bottom-sub").animate({left: 0}, 1000);
         animasyon2(allWidth);
         click++;
       });
       }); 
