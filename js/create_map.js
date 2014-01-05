$(document).on( 'pagebeforeshow ','#map', function(event) 
{
	  var defaultLatLng = new google.maps.LatLng(34.0983425, -118.3267434);  // Default to Hollywood, CA when no geolocation support
	  var entrio = new google.maps.LatLng(64.123192, -21.924723); 
		if ( navigator.geolocation ) {
			function success(pos) {
				// Location found, show map with these coordinates
				drawMap(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
			}
			function fail(error) {
				drawMap(defaultLatLng);  // Failed to find location, show default map
			}
			// Find the users current position.  Cache the location for 5 minutes, timeout after 6 seconds
			navigator.geolocation.getCurrentPosition(success, fail, {maximumAge: 500000, enableHighAccuracy:true, timeout: 6000});
		} else {
			drawMap(defaultLatLng);  // No geolocation support, show default map
		}
		function drawMap(latlng) {
			var myOptions = {
				zoom: 10,
				center: latlng,
				mapTypeId: google.maps.MapTypeId.ROADMAP
			};
			var map = new google.maps.Map(document.getElementById("map-canvas"), myOptions);
			// Add an overlay to the map of current lat/lng
			var marker = new google.maps.Marker({
				position: latlng,
				map: map,
				title: "Þú ert hér!!",
				animation: google.maps.Animation.DROP,
				icon: 'marker.png'
			});
			
			var marker = new google.maps.Marker({
				position: entrio,
				map: map,
				title: "Entrio!!",
				animation: google.maps.Animation.DROP,
				icon: 'marker.png'
			});
		}
	
});