$(document).on( 'pagebeforeshow','#divisions' ,function( e, data ) {

    console.log("Divisons");
    pageSelector = divisions;//urlObj.hash.replace( /\?.*$/, "" );

    data = $.parseJSON(localStorage.Divisions);
    dataDivision = data.Divisions;

    if ( dataDivision ) {
        var $page = $( pageSelector ),

        $header = $page.children( ":jqmData(role=header)" ),

        markup = '<ul id="division_list"  data-role="listview" data-theme="a" >';

        numItems = dataDivision.length-1;

        for ( var i = 0; i < numItems; i++ ) {

            markup += ' <li data-icon="false" ><a class="division" id="'+i+'" href="#onedivision"><h4>'+dataDivision[i].DivisionName+'</h4></a></li>';

        }

        markup += "</ul>";

        $header.find( "h1" ).html( "Deildir" );

        $("#divisions_list").html( markup );

        $page.page();

        $("#divisions_list").trigger( 'create' );
        $page.page();

    }

});