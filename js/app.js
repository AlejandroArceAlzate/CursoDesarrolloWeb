(function(){

	if(navigator.geolocation)
	{
		navigator.geolocation.getCurrentPosition(getCoords, errorFound);
	}
	else
	{
		alert('Tu navegador es del pleistozeno, actulizalo!');
	}

	function errorFound(error)
	{
		alert('un error ocurrio: ' + error.code);
		// 0: error desconocido
		// 1: permiso denegado
		// 2: Posicion no disponible
		// 3: Timeout (a pasado much tiempo)	
	}

	function getCoords(position)
	{
		var lat = position.coords.latitude;
		var lon = position.coords.longitude;

		console.log('Tu posicion es: ' + lat + ';' + lon);
	}

});