$(document).on( 'pagebeforeshow','#information' ,function( e, data ) {

    pageSelector = information;//urlObj.hash.replace( /\?.*$/, "" );
    data = $.parseJSON(localStorage.allContacts);
    allContacts = data.Contacts;
    cItems = allContacts[2].Alphabet;

    if ( cItems ) {
        // Get the page we are going to dump our content into.
        var $page = $( pageSelector ),

        // Get the header for the page.
        $header = $page.children( ":jqmData(role=header)" ),

        $current = sessionStorage.flokkur;

        // The array of items for this category.
        //cItem

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
        markup += "<li><a id=\"contact_save\" href=\"javascript:find_contact(" + $current + ");\" ><h3>Vista sem tengilid</h3></a></li>";
        markup += "</ul>";


        $header.find( "h1" ).html( cItems[$current].Nafn );

        // Inject the category items markup into the content element.
        $("#information_list").html( markup );

        $page.page();

        $("#information_list").trigger( 'create' );
        $page.page();
    }
});