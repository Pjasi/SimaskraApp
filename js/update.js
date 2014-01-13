function Update_Check()
{
	$.ajax({
		url: 'http://entrio.appservicestation.com/lastchange.php?timestamp='+localStorage.timestamp,
		dataType: 'text',                                                                                                                                                                                                
		success: function(msg){

			category = $.parseJSON(msg);
			sessionStorage.timi = category.lastchange.timi;
            //if(sessionStorage.timi == 1) ta uppfaera nuna alltaf uppfaert
			if(sessionStorage.timi > localStorage.timestamp)
			{
				Update();
			}
			else
			{
				create_firstpage();
			}
			sessionStorage.setItem("kisi","kisi"); 

		   
		}
		
		 
	});
};


function Update()
{
    $.ajax({
        url: 'http://entrio.appservicestation.com/getDataJson.php',
        dataType: 'text',
        success: function(msg){

            localStorage.allContacts = msg;
            create_firstpage();

        }

    });
};