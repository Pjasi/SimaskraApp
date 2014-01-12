function create_firstpage()
{
	pageSelector = featured;//urlObj.hash.replace( /\?.*$/, "" );
    data = $.parseJSON(localStorage.Divisions);
    dataDivision = data.Divisions;
    numItemss = dataDivision.length -1;

	if ( dataDivision ) {
		// Get the page we are going to dump our content into.
		var $page = $( pageSelector ),

        // Get the header for the page.
        $header = $page.children( ":jqmData(role=header)" ),

        // Get the content area element for the page.
        //$content = $page.children( ":jqmData(role=id)" ),

        // The array of items for this category.
        cItems = dataDivision[numItemss].Division;

        // The number of items in the category.
        numItems = cItems.length;

        // The markup we are going to inject into the content
        // area of the page.
         markup = '<ul data-role="listview" data-theme="a" data-filter="true" data-filter-reveal="true" data-filter-placeholder="Leita af nafni">';


		for ( var i = 0; i < numItems; i++ ) {

            markup += ' <li data-icon="false"><a  class="flokkur" id="'+ cItems[i].Id +'" href="#information" data-transition="none"  ><h4>'+ cItems[i].Nafn+'</h4></a></li>';

		}
		markup += "</ul>";


		$header.find( "h1" ).html( "Símaskráin okkar allra" );

		$("#alphabet_list").html( markup );

		$page.page();
		$("#alphabet_list").trigger( 'create' );
		$page.page();
	}

}
