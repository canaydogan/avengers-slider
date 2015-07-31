$(document).ready(function(){
	var i=0;
	var tumgenislik=0;
	var genislik=$('#slider div').width();
	function animasyon(px){
		$('#slider').stop(false,false).animate({
			left:-px},300);
	}
	$('#sayfalama a').click(function(){
		var index = $(this).index();
		pozisyon = index * genislik;
		animasyon(pozisyon);
		if(index==4){
			i=0;
		}
		else{
			i = index + 1;
		}
		return false;
	});
	var zamanlayici= setInterval(function(){
		tumgenislik=i*genislik;
		if (i==2) {
			i=-1;
		}
		animasyon(tumgenislik);
		i++;
	},1000);
});