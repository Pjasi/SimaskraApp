<?php 
header('content-type: application/json; charset=utf-8');
header("access-control-allow-origin: *");

  //--------------------------------------------------------------------------
  // Example php script for fetching data from mysql database
  //--------------------------------------------------------------------------
  $host = "localhost";
  $user = "landsnetsimaskra";
  $pass = "kisi123";

  $databaseName = "test";
  $tableName = "landsnetSimaskra";
  

  
  //--------------------------------------------------------------------------
  // 1) Connect to mysql database
  //--------------------------------------------------------------------------
  $con = mysql_connect($host,$user,$pass);
  $dbs = mysql_select_db($databaseName, $con);
  
  //--------------------------------------------------------------------------
  // 2) Get DA DATA
  //--------------------------------------------------------------------------
  
mysql_set_charset("UTF8");

	$data = '{"Users":[';
	  
	$data .='{"items": [';
	$resultyfir = mysql_query("SELECT * FROM $tableName ");   
	echo mysql_error();
	          //query
	while( $rowyfir = mysql_fetch_row($resultyfir) )
	{//rowyfir
	
	
		$data .= '{
		"Id": "'.trim($rowyfir[0]).'",
		"Nafn": "'.trim($rowyfir[1]).'",
		"Simi": "'.trim($rowyfir[2]).'",
		"Netfang": "'.trim($rowyfir[3]).'",
		"Starfsheiti": "'.trim($rowyfir[4]).'",
		"Starfsstod": "'.trim($rowyfir[5]).'",
		"Deild": "'.trim($rowyfir[6]).'"
		},';		
		
	}//rowyfir
	$data = rtrim($data, ','); // Taka ut seinustu kommuna
	$data .=']}';
	

	$data .=']}';

echo $data;

mysql_close();
	die();

?>