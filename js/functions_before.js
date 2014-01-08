// settings on mobile init
$(document).on('mobileinit', function (e) {
	if (e) { e.preventDefault(); }
	$.support.cors = true;
	$.mobile.allowCrossDomainPages = true;
	$.mobile.pushStateEnabled = false;
	$.mobile.buttonMarkup.hoverDelay = 0; // (default: 300ms)
	$.mobile.defaultPageTransition = 'none'; // (default: pop)
	$.mobile.defaultDialogTransition = 'none'; // (default: pop)
	$.event.special.swipe.scrollSupressionThreshold = 40;  // (default: 10px) � More than this horizontal displacement, and we will suppress scrolling.
	$.event.special.swipe.durationThreshold = 1000; // (default: 1000ms) � More time than this, and it isn't a swipe.
	$.event.special.swipe.horizontalDistanceThreshold = 30; // (default: 30px) � Swipe horizontal displacement must 
	$.event.special.swipe.verticalDistanceThreshold = 40; // (default: 75px) � Swipe vertical displacement must be less than this.
});


$(document).bind('mobileinit', function () {
    $.mobile.activeBtnClass = 'unused';
 });



