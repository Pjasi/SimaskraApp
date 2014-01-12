//TODO hafa splash screen a tangad til loading er buid
//Prufu fall til ad birta loading screen a medan vid saekjum gogn
//Stilling i config .xml setur loading screen sem hatt gildi og tekur svo af tegar ajax er buid
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
        url: 'http://entrio.appservicestation.com/grabDivisions.php',
        dataType: 'text',
        success: function(msg){

            localStorage.Divisions = msg;
            //console.log(localStorage.innihald);

            create_firstpage();

        }

    });
    $.ajax({
        url: 'http://85.220.27.109:2205/simaskra/simaskraapp/php/getdatajson.php',
        dataType: 'text',
        success: function(msg){

            localStorage.test = $.parseJSON(msg);
            console.log(localStorage.test.Contacts);
            console.log(localStorage.test.Contacts.Divisions);


        }

    });
};