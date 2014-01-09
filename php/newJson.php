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
  $db = new PDO('mysql:host=localhost;dbname=test;charset=utf8', 'landsnetsimaskra', 'kisi123');
  
  //--------------------------------------------------------------------------
  // 2) Get DA DATA
  //--------------------------------------------------------------------------

	$data = '{"Users":[';

	//Load all departments from table
	$uniqueListQuery = $db->query("SELECT DISTINCT $uniqueItem FROM $tableName ORDER BY Deild ASC");

    // Initialize json for each division and add division names to a vector
    $counter = 0;
	while($row = $uniqueListQuery->fetch(PDO::FETCH_ASSOC)) {
	    $uniqueList[$counter] = trim($row['Deild']);
	    $uniqueListJson[$counter] = '{
                    "DivisionName": "'.$uniqueList[$counter].'",
	                "Division": [';
        $counter += 1;
    }

    // Get all contacts and sort them into divisions
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
	// Taking our extra commas and finising the json
	for ($iUnique = 0; $iUnique < $counter; $iUnique++) {
	    $uniqueListJson[$iUnique] = rtrim($uniqueListJson[$iUnique], ','); // Taka ut seinustu kommuna
        $uniqueListJson[$iUnique] .=']},';
        $data .= $uniqueListJson[$iUnique];
	}
    $data = rtrim($data, ','); // Taka ut seinustu kommuna
    $data .=']}';
    echo $data;

    // Close mysql connection
    $db = null;
?>