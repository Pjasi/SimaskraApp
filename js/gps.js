//Sækja GPS hnit
function handle_errors(error)  
{  
	switch(error.code)  
	{  
		case error.PERMISSION_DENIED: console.log("user did not share geolocation data");  
		break;  

		case error.POSITION_UNAVAILABLE: console.log("could not detect current position");  
		break;  

		case error.TIMEOUT: console.log("retrieving position timed out");  
		break;  

		default: console.log("unknown error");  
		break;  
	}  
}  
		
function handle_geolocation_query(position){  
	console.log('Virkadi ad saekja gps hnit');
	var lat = position.coords.latitude;
	var lng = position.coords.longitude;
	sessionStorage.setItem("lat", lat);
	sessionStorage.setItem("long",lng); 
}  
//Endir a GPShnit