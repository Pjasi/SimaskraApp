$(document).on( 'pagebeforeshow','#onedivision' ,function( e, data ) {

    console.log("onedivision");
    //category = $.parseJSON(localStorage.innihald);
    //console.log(category);

    // The pages we use to display our content are already in
    // the DOM. The id of the page we are going to write our
    // content into is specified in the hash before the '?'.
    pageSelector = divisions;//urlObj.hash.replace( /\?.*$/, "" );

    data = $.parseJSON(localStorage.Divisions);
    dataDivision = data.Divisions;

    if ( dataDivision ) {
        // Get the page we are going to dump our content into.
        var $page = $( pageSelector ),

        // Get the header for the page.
            $header = $page.children( ":jqmData(role=header)" ),

        // The markup we are going to inject into the content
        // area of the page.
            markup = '<ul data-role="listview" data-theme="a" data-filter="true" data-filter-placeholder="Leita af nafni">';

        for (var key in dataDivision) {
            console.log(key);
        }
        dataoneDivision = dataDivision[sessionStorage.division].Division;
            // The number of items in the category.
            numItems = dataoneDivision.length;

        // Generate a list item for each item in the category
        // and add it to our markup.
        for ( var i = 0; i < numItems; i++ ) {
            //markup += ' <li><a href="undirflokkur-items.html" ><h4>'+cItems[i].name+'</h4></a></li>';
            markup += ' <li data-icon="false"><a class="flokkur" id="'+ dataoneDivision[i].Id +'" href="#information" data-transition="none"  ><h4>'+ dataoneDivision[i].Nafn+'</h4></a></li>';
        }
       //console.log(cItems[i].name);

        markup += "</ul>";


        // Find the h1 element in our header and inject the name of
        // the category into it.
        $header.find( "h1" ).html( dataoneDivision[0].Deild );
        //console.log(markup);
        // Inject the category items markup into the content element.
        $("#onedivision_list").html( markup );

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

        $("#onedivision_list").trigger( 'create' );
        $page.page();


    }




});