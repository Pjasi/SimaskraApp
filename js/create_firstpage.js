﻿function create_firstpage()
{

    console.log("HeimaSidakeyrist");
	 //category = $.parseJSON(localStorage.innihald);
	 //console.log(category);

	// The pages we use to display our content are already in
	// the DOM. The id of the page we are going to write our
	// content into is specified in the hash before the '?'.
	pageSelector = featured;//urlObj.hash.replace( /\?.*$/, "" );
	data = $.parseJSON(localStorage.innihald);
    dataAlpha = data.Users[0];

    console.log(data);
	if ( data ) {
        console.log("Heimaif");
		// Get the page we are going to dump our content into.
		var $page = $( pageSelector ),

			// Get the header for the page.
			$header = $page.children( ":jqmData(role=header)" ),

			// Get the content area element for the page.
			//$content = $page.children( ":jqmData(role=id)" ),

			// The array of items for this category.
			cItems = dataAlpha.items,

			// The number of items in the category.
			numItems = cItems.length;

        // The markup we are going to inject into the content
        // area of the page.
         markup = '<ul data-role="listview" data-theme="a" data-filter="true" data-filter-reveal="true" data-filter-placeholder="Leita af nafni">';

		// Generate a list item for each item in the category
		// and add it to our markup.
		for ( var i = 0; i < numItems; i++ ) {
			//markup += ' <li><a href="undirflokkur-items.html" ><h4>'+cItems[i].name+'</h4></a></li>';
            markup += ' <li data-icon="false"><a  class="flokkur" id="'+ cItems[i].Id +'" href="#information" data-transition="none"  ><h4>'+ cItems[i].Nafn+'</h4></a></li>';
			//console.log(cItems[i].name);
		}
		markup += "</ul>";

		// Find the h1 element in our header and inject the name of
		// the category into it.
		$header.find( "h1" ).html( "Símaskráin okkar allra" );
		//console.log(markup);
		// Inject the category items markup into the content element.
		$("#alphabet_list").html( markup );
        

		// Pages are lazily enhanced. We call page() on the page
		// element to make sure it is always enhanced before we
		// attempt to enhance the listview markup we just injected.
		// Subsequent calls to page() are ignored since a page/widget
		// can only be enhanced once.
		$page.page();

		// Enhance the listview we just injected.
		

		// We don't want the data-url of the page we just modified
		// to be the url that shows up in the browser's location field,
		// so set the dataUrl option to the URL for the category
		// we just loaded.
		//options.dataUrl = urlObj.href; tko ut er að prufa..

		// Now call changePage() and tell it to switch to
		// the page we just modified.
		//$.mobile.changePage( $page );
		//$content.find( ":jqmData(role=listview)" ).listview();
		$("#alphabet_list").trigger( 'create' );
		$page.page();
	}

}
