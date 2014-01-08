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
  $uniqueItem = "Deild";
  

  
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
	//Load all departments from table
	$uniqueList = mysql_query("SELECT DISTINCT $uniqueItem FROM $tableName;");
	print_r(mysql_fetch_array($uniqueList));
	echo "uniqueList done";

	$resultyfir = mysql_query("SELECT * FROM $tableName ");   
	echo mysql_error();
	          //query
	$seenB4 = array("Netrekstur");
	while( $rowyfir = mysql_fetch_row($resultyfir) )
	{//rowyfir

	if (in_array(trim($rowyfir[6],$seenB4)))
	{
        echo "Er i array";
	}
	else
	{
        echo "Er EKKI i array";
	}
	
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
	$data .=']},';
	
	$data .='{"items": [';
	$resultyfir = mysql_query("SELECT * FROM $tableName ORDER BY Deild ASC");   
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
	$data .=']},';
	
	$data .='{"items": [';
	$resultyfir = mysql_query("SELECT * FROM $tableName ORDER BY Starfsstod ASC");   
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