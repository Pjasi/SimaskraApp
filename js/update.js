function Update_Check()
{
	$.ajax({
		url: 'http://entrio.appservicestation.com/lastchange.php?timestamp='+localStorage.timestamp,
		dataType: 'text',                                                                                                                                                                                                
		success: function(msg){

			category = $.parseJSON(msg);
			sessionStorage.timi = category.lastchange.timi;
            sessionStorage.uppfaera = category.lastchange.uppfaera;
            console.log(sessionStorage.uppfaera);
            if(sessionStorage.uppfaera == "1") //ta uppfaera nuna alltaf uppfaert
			//if(sessionStorage.timi > localStorage.timestamp)
			{
                console.log("updating");
				Update();
                localStorage.timestamp = sessionStorage.timi;
			}
			else
			{
                console.log("not updating");
				create_firstpage();
			}
		}
	});
};


function Update()
{
    $.ajax({
        url: 'http://entrio.appservicestation.com/getDataJson.php',
        dataType: 'text',
        success: function(msg){

            console.log("update");
            localStorage.allContacts = msg;
            create_firstpage();

        }

    });
};