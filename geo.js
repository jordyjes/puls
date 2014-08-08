$(function(){
var geo = navigator.geolocation;
var opciones={} /*es un objeto vacio*/

console.log(geo); /*imprime los metodos que utiliza geolocation*/

/*geo.getCurrentPosition(); pide la informacion una vez*/
/*geo.watchPosition(); checa la posicion constantemente*/
function geo_error()
{
	console.log("no puedo saber donde estas");
}

function geo_exito(posicion)
{
	var lat  = posicion.coords.latitude;
	var lon  = posicion.coords.longitude;
	var mapa = new Image();
	mapa.src = "http://maps.googleapis.com/maps/api/staticmap?maptype=hybrid&zoom=13&size=300x300&sensor=false&center="+lat+","+lon;

	$('#geo').append(mapa); /*al elemento geo hacerle un append del mapa es decir pasamos cadena de texto y objetos guardado en este caso es mapa*/
	obtenerGeoInformacion(lat,lon);
}


geo.getCurrentPosition(geo_exito, geo_error, opciones); /*utiliza 3 parametros , 1 una de exito si el navegor pudo obtener la ubicacacion, 2 si no se puedo obenter la localizacion y 3 un objeto para pasarle parametros de como funcioanra*/

});

