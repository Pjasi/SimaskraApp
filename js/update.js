function Update_Check()
{
	$.ajax({
		url: 'http://entrio.appservicestation.com/lastchange.php?timestamp='+localStorage.timestamp,
		dataType: 'text',                                                                                                                                                                                                
		success: function(msg){

			category = $.parseJSON(msg);
			sessionStorage.timi = category.lastchange.timi;
            if(sessionStorage.uppfaera == 1) //ta uppfaera nuna alltaf uppfaert
			//if(sessionStorage.timi > localStorage.timestamp)
			{
				Update();
                localStorage.timestamp = sessionStorage.timi;
			}
			else
			{
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