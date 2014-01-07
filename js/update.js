//Prufu fall til a� byrta loading screen � me�an vi� s�kjum g�gn
function Update_Check()
{
	console.log("fallið update check");
	// update the block message
    /*
	$.blockUI({ 
		message: $('#displayBox'), 
		css: { 
			top:  '0 px',
			left:  '0 px',
			width: $(window).width() + 'px',
            height: $(window).height() + 'px'
        }
	});
	*/
	$.ajax({
		url: 'http://entrio.appservicestation.com/lastchange.php?timestamp='+localStorage.timestamp,
		dataType: 'text',                                                                                                                                                                                                
		success: function(msg){
			//$("#kisi").html(msg.a);
			//alert(msg.a);
			// unblock when remote call returns 
			
			 
			category = $.parseJSON(msg);
			sessionStorage.timi = category.lastchange.timi;
			if(sessionStorage.timi > localStorage.timestamp)
			{
				console.log("timi stærri");
				Update();
			}
			else
			{	
				console.log("unblock");
				create_firstpage();
				//$.unblockUI();
			}
			sessionStorage.setItem("kisi","kisi"); 
			
			
			
		   
		}
		
		 
	});
};

function Update()
{
	console.log("fallid update");
	
	$.ajax({
		url: 'http://entrio.appservicestation.com/update.php',
		dataType: 'text',                                                                                                                                                                                                
		success: function(msg){
			//$("#kisi").html(msg.a);
			//alert(msg.a);
			// unblock when remote call returns 
		
			
			localStorage.innihald = msg;
			data = $.parseJSON(msg);
			//console.log(localStorage.innihald);
			console.log("Fyllainngogn keyrdi");
			console.log("unblock");
			
			create_firstpage();
			//$.unblockUI();
			
			
		   
		}
		
		 
	});
};