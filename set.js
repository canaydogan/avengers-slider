$(document).ready(function(){
	var i=0;
	var tumgenislik=0;
	var genislik=$('.ust-ekran div').width();
	function animasyon(px){
		$('.ust-ekran').stop(false,false).animate({
			left:-px},1000);
		
		
	}
	$('.alt-konteynir').click(function(){
		var index=$(this).index();
		clearInterval( zamanlayici);
		pozition=index*genislik;
		animasyon(pozition);
		if(index==5){
			i=0;
		}
		else{
			i=index+1;
		}
		return false;
	});
	var zamanlayici=setInterval(function(){
		tumgenislik=i*genislik;
		if(i==3){
			i=-1;
		}
		animasyon(tumgenislik);
		i++;
	},2000);

	
 });



