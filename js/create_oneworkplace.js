$(document).on( 'pagebeforeshow','#oneworkplace' ,function( e, data ) {

    console.log("oneworkplace");
    //category = $.parseJSON(localStorage.innihald);
    //console.log(category);

    // The pages we use to display our content are already in
    // the DOM. The id of the page we are going to write our
    // content into is specified in the hash before the '?'.
    pageSelector = oneworkplace;//urlObj.hash.replace( /\?.*$/, "" );

    data = $.parseJSON(localStorage.allContacts);
    allContacts = data.Contacts;
    cItems = allContacts[1].Workplace;

    if ( cItems ) {
        // Get the page we are going to dump our content into.
        var $page = $( pageSelector ),

        // Get the header for the page.
            $header = $page.children( ":jqmData(role=header)" ),

        // The markup we are going to inject into the content
        // area of the page.
        markup = '<div id="fixedfilter">';
        markup += '<ul data-role="listview" data-theme="a" data-filter="true" data-filter-placeholder="Leita af nafni">';


        dataoneWorkplace = cItems[sessionStorage.workplace].Workplace;

        // The number of items in the category.
        numItems = dataoneWorkplace.length;


        for ( var i = 0; i < numItems; i++ ) {

            markup += ' <li data-icon="false"><a class="flokkur" id="'+ dataoneWorkplace[i].Id +'" href="#information" data-transition="none"  ><h4>'+ dataoneWorkplace[i].Nafn+'</h4></a></li>';
        }


        markup += "</ul>";
        markup += "</div>";

        $textforhader =cItems[sessionStorage.workplace].WorkplaceName;
        $header.find( "h1" ).html($textforhader).text();
        $("#oneworkplace_list").html( markup );

        $page.page();

        $("#oneworkplace_list").trigger( 'create' );
        $page.page();


    }
});