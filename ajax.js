$(function()
	{

		/*$('footer ').load('logos-footer.html'); /*una forma de agregar cotenido mediante ajax*/
		$('footer .logos').load('logos-footer.html #mejorandola'); /*una forma de agregar cotenido mediante ajax agregando un div clase logos en el html*/

		/*peticiones ajax*/

		/*$.get('logos-footer.html', function(codiguito){
			$('footer').append(codiguito);*/ /*ponemos el contenido obtenido en el footer -- esta es otra forma la tradicional de agregar contenido por medio de ajax

		});*/
		$.get('usuario.json', function(info){
			var avatar   = new Image();    
			avatar.src   =info.avatar;
			avatar.title =info.nombre+' '+info.apellido;

			$('#avatar').append(avatar);

		});
		


	});
var base_url = "http://query.yahooapis.com/v1/public/yql?";

function obtenerGeoInformacion(lat,lon){
	var query='SELECT * FROM geo.placefinder WHERE text="'+lat+','+lon+'" AND gflags="R"';
	query = encodeURIComponent(query);
	
	$.ajax({
		url: base_url+"q="+query,
		dataType: 'jsonp',
		jsonpCallback:'procesarGeoInfo',
		data: {
			format: 'json'
		}
	});
}

function procesarGeoInfo(datos){
	 var res    = datos.query.results.Result;
	 var barrio = res.neighborhood;
	 var ciudad = res.city;
	 var pais   = res.country;
	 var woeid  = res.woeid;

	 $('#geo').prepend('<p><strong>'+barrio+'</strong><br/>'+ciudad+', '+pais+'</p>')

obtenerClima(woeid); 
}

function obtenerClima(woeid){
	var query='SELECT * FROM weather.forecast WHERE woeid="'+woeid+'" AND u="c"';
	query = encodeURIComponent(query);
	
	$.ajax({
		url: base_url+"q="+query,
		dataType: 'jsonp',
		jsonpCallback:'procesarClima',
		data: {
			format: 'json'
		}
	});
}

function procesarClima(datos){

	var clima = datos.query.results.channel;
	var temp = clima.item.condition.temp;
	var unit = clima.units.temperature;
	var img = new Image();
	var code = clima.item.condition.code;
	img.src="http://l.yimg.com/a/i/us/we/52/"+code+".gif"

console.log(clima);

	$('#clima')
		.append(img)
		.append(temp+' '+unit+'º');	
	
}