$(document).on( 'pagebeforeshow','#workplace' ,function( e, data ) {

    console.log("Workplace");
    //category = $.parseJSON(localStorage.innihald);
    //console.log(category);

    // The pages we use to display our content are already in
    // the DOM. The id of the page we are going to write our
    // content into is specified in the hash before the '?'.
    pageSelector = workplace;//urlObj.hash.replace( /\?.*$/, "" );

    data = $.parseJSON(localStorage.innihald);
    if ( data ) {
        // Get the page we are going to dump our content into.
        var $page = $( pageSelector ),

        // Get the header for the page.
            $header = $page.children( ":jqmData(role=header)" ),

        // The markup we are going to inject into the content
        // area of the page.
            markup = '<ul id="workplace_list" data-role="listview" data-theme="a" data-filter="true" data-filter-placeholder="Leita af nafni" data-autodividers="true">';

        // The array of items for this category.
        cItems = data.items,

            // The number of items in the category.
            numItems = cItems.length;

        // Generate a list item for each item in the category
        // and add it to our markup.
        //markup += ' <li><a href="undirflokkur-items.html" ><h4>'+cItems[i].name+'</h4></a></li>';
        for ( var i = 0; i < numItems; i++ ) {
            //markup += ' <li><a href="undirflokkur-items.html" ><h4>'+cItems[i].name+'</h4></a></li>';
            markup += ' <li workplace="'+data.items[i].Starfsstod+'"><a  class="flokkur" id="'+i+'" href="#information"  data-transition="none"  ><h4>'+data.items[i].Nafn+'</h4></a></li>';
            //console.log(cItems[i].name);
        }
       //console.log(cItems[i].name);

        markup += "</ul>";

        console.log(markup);

        // Find the h1 element in our header and inject the name of
        // the category into it.
        $header.find( "h1" ).html( "Starfsstöð" );
        //console.log(markup);
        // Inject the category items markup into the content element.
        $("#workplaces_list").html( markup );

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
        $("#workplaces_list").trigger( 'create' );
        $page.page();

        $("#workplace_list").listview({
            autodividers: true,
            autodividersSelector: function (li) {
                var out = li.attr('workplace');
                return out;
            }
        }).listview('refresh');

    }




});