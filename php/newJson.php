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
  //$con = mysql_connect($host,$user,$pass);
  //$dbs = mysql_select_db($databaseName, $con);
  $db = new PDO('mysql:host=localhost;dbname=test;charset=utf8', 'landsnetsimaskra', 'kisi123');
  
  //--------------------------------------------------------------------------
  // 2) Get DA DATA
  //--------------------------------------------------------------------------
  
//mysql_set_charset("UTF8");

	$data = '{"Users":[';

	//Load all departments from table
	$uniqueListQuery = $db->query("SELECT DISTINCT $uniqueItem FROM $tableName ORDER BY Deild ASC");

    $counter = 0;
	while($row = $uniqueListQuery->fetch(PDO::FETCH_ASSOC)) {
	    $uniqueList[$counter] = trim($row['Deild']);
	    $uniqueListJson[$counter] = '{"items": [';
        $counter += 1;
    }

	echo "uniqueList done";

	$allItemsFromTable = $db->query("SELECT * FROM $tableName ORDER BY Nafn ASC");

	while($row = $allItemsFromTable->fetch(PDO::FETCH_ASSOC)) {
	    for ($iUnique = 0; $iUnique < $counter; $iUnique++) {
	        if ($uniqueList[$iUnique] == trim($row['Deild'])){
	            $uniqueListJson[$iUnique] .= '{
                		"Id": "'.trim($row['id']).'",
                		"Nafn": "'.trim($row['Nafn']).'",
                		"Simi": "'.trim($row['Simi']).'",
                		"Netfang": "'.trim($row['Netfang']).'",
                		"Starfsheiti": "'.trim($row['StarfsHeiti']).'",
                		"Starfsstod": "'.trim($row['Starfsstod']).'",
                		"Deild": "'.trim($row['Deild']).'"
                		},';
                break;
	        }

	    }

	}
	for ($iUnique = 0; $iUnique < $counter; $iUnique++) {
	    $uniqueListJson[$iUnique] = rtrim($uniqueListJson[$iUnique], ','); // Taka ut seinustu kommuna
        $uniqueListJson[$iUnique] .=']},';
        $data .= $uniqueListJson[$iUnique];
	}
    $data = rtrim($data, ','); // Taka ut seinustu kommuna
    $data .=']}';
    $data .=']}';
    echo $data;

/*
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

*/
?>