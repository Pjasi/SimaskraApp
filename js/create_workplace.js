$(document).on( 'pagebeforeshow','#workplace' ,function( e, data ) {


    pageSelector = workplace;//urlObj.hash.replace( /\?.*$/, "" );

    data = $.parseJSON(localStorage.innihald);
    dataWorkplace = data.Users[2];
    if ( dataWorkplace ) {
        // Get the page we are going to dump our content into.
        var $page = $( pageSelector ),

        // Get the header for the page.
        $header = $page.children( ":jqmData(role=header)" ),

        // The markup we are going to inject into the content
        // area of the page.
        markup = '<ul id="workplace_list" data-role="listview" data-theme="a" data-filter-reveal="true" data-filter="true" data-filter-placeholder="Leita af nafni" >';

        cItems = dataWorkplace.items;
        numItems = cItems.length;

        for ( var i = 0; i < numItems; i++ ) {

            markup += ' <li data-icon="false" workplace="'+cItems[i].Starfsstod+'"><a  class="flokkur" id="'+ cItems[i].Id +'" href="#information"  data-transition="none"  ><h4>'+cItems[i].Nafn+'</h4></a></li>';

        }

        markup += "</ul>";

        $header.find( "h1" ).html( "Starfsstöð" );

        $("#workplaces_list").html( markup );


        $page.page();

        $("#workplaces_list").trigger( 'create' );
        $page.page();

    }
});