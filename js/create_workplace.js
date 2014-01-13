$(document).on( 'pagebeforeshow','#workplace' ,function( e, data ) {


    pageSelector = workplace;//urlObj.hash.replace( /\?.*$/, "" );


    data = $.parseJSON(localStorage.allContacts);
    allContacts = data.Contacts;
    cItems = allContacts[1].Workplace;

    if ( cItems ) {
        var $page = $( pageSelector ),

        $header = $page.children( ":jqmData(role=header)" ),

        markup = '<ul id="workplace_list"  data-role="listview" data-theme="a" >';

        numItems = cItems.length;

        for ( var i = 0; i < numItems; i++ ) {

            markup += ' <li data-icon="false" ><a class="workplace" id="'+i+'" href="#oneworkplace"><h4>'+cItems[i].WorkplaceName+'</h4></a></li>';

        }

        markup += "</ul>";

        $header.find( "h1" ).html( "Starfsstöð" );

        $("#workplaces_list").html( markup );

        $page.page();

        $("#workplaces_list").trigger( 'create' );
        $page.page();

    }

});