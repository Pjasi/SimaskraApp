$(document).on( 'pagebeforeshow','#onedivision' ,function( e, data ) {

    console.log("onedivision");
    //category = $.parseJSON(localStorage.innihald);
    //console.log(category);

    // The pages we use to display our content are already in
    // the DOM. The id of the page we are going to write our
    // content into is specified in the hash before the '?'.
    pageSelector = onedivision;//urlObj.hash.replace( /\?.*$/, "" );

    data = $.parseJSON(localStorage.allContacts);
    allContacts = data.Contacts;
    cItems = allContacts[0].Divisions;

    if ( cItems ) {
        // Get the page we are going to dump our content into.
        var $page = $( pageSelector ),

        // Get the header for the page.
            $header = $page.children( ":jqmData(role=header)" ),

        // The markup we are going to inject into the content
        // area of the page.
        markup = '<div id="fixedfilter">';
        markup += '<ul data-role="listview" data-theme="a" data-filter="true" data-filter-placeholder="Leita af nafni">';


        dataoneDivision = cItems[sessionStorage.division].Division;
        // The number of items in the category.
        numItems = dataoneDivision.length;


        for ( var i = 0; i < numItems; i++ ) {

            markup += ' <li data-icon="false"><a class="flokkur" id="'+ dataoneDivision[i].Id +'" href="#information" data-transition="none"  ><h4>'+ dataoneDivision[i].Nafn+'</h4></a></li>';
        }


        markup += "</ul>";
        markup += "</div>";

        $textforhader = dataoneDivision[0].Deild;
        $header.find( "h1" ).html($textforhader).text();
        $("#onedivision_list").html( markup );

        $page.page();

        $("#onedivision_list").trigger( 'create' );
        $page.page();


    }
});