$(document).on( 'pageinit','#information' ,function( e, data ) {

    console.log("information");
    //category = $.parseJSON(localStorage.innihald);
    //console.log(category);

    // The pages we use to display our content are already in
    // the DOM. The id of the page we are going to write our
    // content into is specified in the hash before the '?'.
    pageSelector = information;//urlObj.hash.replace( /\?.*$/, "" );

    data = $.parseJSON(localStorage.innihald);
    dataAlpha = data.Users[0];
    if ( dataAlpha ) {
        // Get the page we are going to dump our content into.
        var $page = $( pageSelector ),

        // Get the header for the page.
        $header = $page.children( ":jqmData(role=header)" ),
        $current = sessionStorage.flokkur;

        // The array of items for this category.
        cItems = dataAlpha.items,

        /*
        markup =" <Strong>Nafn: " + cItems[$current].Nafn + "</br>";
        markup +=" <Strong>Simi:" + "<a href=\"tel:+354" +  cItems[$current].Simi + "\""+ ">" +  cItems[$current].Simi + "</a> </br>";
        markup +=" <Strong>Netfang:" + "<a href=\"mailto:" +  cItems[$current].Netfang + "\""+ ">" +  cItems[$current].Netfang + "</a> </br>";
        markup +=" <Strong>Deild: " + cItems[$current].Deild + "</br>";
        markup +=" <Strong>Starfsstöð: " + cItems[$current].Starfsstod + "</br>";
        markup +=" <Strong>Starfsheiti: " + cItems[$current].Starfsheiti + "</br>";
        */

        markup = "<div id=\"employeeDetails\">";
        markup += "<h3 id=\"fullName\">" + cItems[$current].Nafn + "</h3>";
        markup += "<p id=\"employeeTitle\">" + cItems[$current].Starfsheiti + "</p>";
        markup += "<p id=\"division\">" + cItems[$current].Deild + "</p>";
        markup += "<p id=\"city\">" + cItems[$current].Starfsstod  + "</p>";
        markup += "</div>";

        markup += "<ul id=\"actionList\" data-role=\"listview\" data-inset=\"true\">";
        markup += "<li><a href=\"mailto:" +  cItems[$current].Netfang + "\""+ "><h3>Netfang</h3><p>" +  cItems[$current].Netfang + "</p></a></li>";
        markup += "<li><a href=\"tel:+354" +  cItems[$current].Simi + "\""+ "><h3>Simi</h3><p>" +  cItems[$current].Simi + "</p></a></li>";
        markup += "<li><a href=\"sms:+354" +  cItems[$current].Simi + "\""+ "><h3>Sms</h3><p>" +  cItems[$current].Simi + "</p></a></li>";
        markup += "<li><a id=\"contact_save\" href=\"javascript:save_contact();\" ><h3>Vista sem tengilid</h3></a></li>";
        markup += "</ul>";
        // Find the h1 element in our header and inject the name of
        // the category into it.
        $header.find( "h1" ).html( cItems[$current].Nafn );
        //console.log(markup);
        // Inject the category items markup into the content element.
        $("#information_list").html( markup );

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
        $("#information_list").trigger( 'create' );
        $page.page();
    }




});