var indexCorousel;
var nombreCarousel;
var cantidadCarousel;
function carousel(Nombre){
	nombreCarousel=Nombre;
	indexCorousel=0;
	var puntos='<div class=paginate-slide><ul>';
	cantidadCarousel=$(Nombre+' div.item').length;
	$(Nombre+' div.item').each(function(index){
		$(this).show();
		puntos=puntos+'<li class="sel"><a>'+index+'</a></li>';
    });
    puntos=puntos+'</ul></div>';
    $(Nombre).append(puntos);
    cambiarCarousel();
}
function cambiarCarousel(){
	$(nombreCarousel+' div.item').each(function(index){
		if (index==indexCorousel) {
			$(this).show();
		}
		else{
			$(this).hide();	
		}
    });
    $('.sel a').each(function(index){

    	if (index==indexCorousel) {
    		
    		$(this).addClass('activo');
    	}else{
    		$(this).removeClass('activo');
    	}
    });
	if((cantidadCarousel-1)==indexCorousel) indexCorousel=0;
	else indexCorousel=indexCorousel+1;    
    setTimeout(function(){cambiarCarousel();},4500);
}

carousel('#carousel');