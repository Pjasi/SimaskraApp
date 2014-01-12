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
  $uniqueItem1 = "Deild";
  $uniqueItem2 = "Starfsstod";



  //--------------------------------------------------------------------------
  // 1) Connect to mysql database
  //--------------------------------------------------------------------------
  $db = new PDO('mysql:host='.$host.';dbname='.$databaseName.';charset=utf8', $user, $pass);

  //--------------------------------------------------------------------------
  // 2) Get DA DATA
  //--------------------------------------------------------------------------

    $allData = '{"Contacts":[';

	$data = '{"Divisions":[';

	//Load all departments from table
	$uniqueListQuery = $db->query("SELECT DISTINCT $uniqueItem1 FROM $tableName ORDER BY Deild ASC");

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

    $count = 0;
	while($row = $allItemsFromTable->fetch(PDO::FETCH_ASSOC)) {
	    for ($iUnique = 0; $iUnique < $counter; $iUnique++) {
	        if ($uniqueList[$iUnique] == trim($row['Deild'])){
	            $uniqueListJson[$iUnique] .= '{
                		"Id": "'.$count.'",
                		"Nafn": "'.trim($row['Nafn']).'",
                		"Simi": "'.trim($row['Simi']).'",
                		"Netfang": "'.trim($row['Netfang']).'",
                		"Starfsheiti": "'.trim($row['StarfsHeiti']).'",
                		"Starfsstod": "'.trim($row['Starfsstod']).'",
                		"Deild": "'.trim($row['Deild']).'"
                		},';
                $count++;
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
    $data .=']},';

    	$data2 = '{"Workplace":[';

    	//Load all departments from table
    	$uniqueListQuery = $db->query("SELECT DISTINCT $uniqueItem2 FROM $tableName ORDER BY Starfsstod ASC");

        // Initialize json for each division and add division names to a vector
        $counter = 0;
    	while($row = $uniqueListQuery->fetch(PDO::FETCH_ASSOC)) {
    	    $uniqueListWP[$counter] = trim($row['Starfsstod']);
    	    $uniqueListJsonWP[$counter] = '{
                        "WorkplaceName": "'.$uniqueListWP[$counter].'",
    	                "Workplace": [';
            $counter += 1;
        }

        // Get all contacts and sort them into divisions
    	$allItemsFromTable = $db->query("SELECT * FROM $tableName ORDER BY Nafn ASC");

        $count = 0;
    	while($row = $allItemsFromTable->fetch(PDO::FETCH_ASSOC)) {
    	    for ($iUnique = 0; $iUnique < $counter; $iUnique++) {
    	        if ($uniqueListWP[$iUnique] == trim($row['Starfsstod'])){
    	            $uniqueListJsonWP[$iUnique] .= '{
                    		"Id": "'.$count.'",
                    		"Nafn": "'.trim($row['Nafn']).'",
                    		"Simi": "'.trim($row['Simi']).'",
                    		"Netfang": "'.trim($row['Netfang']).'",
                    		"Starfsheiti": "'.trim($row['StarfsHeiti']).'",
                    		"Starfsstod": "'.trim($row['Starfsstod']).'",
                    		"Deild": "'.trim($row['Deild']).'"
                    		},';
                    $count++;
                    break;
    	        }

    	    }

    	}
    	// Taking our extra commas and finising the json
    	for ($iUnique = 0; $iUnique < $counter; $iUnique++) {
    	    $uniqueListJsonWP[$iUnique] = rtrim($uniqueListJsonWP[$iUnique], ','); // Taka ut seinustu kommuna
            $uniqueListJsonWP[$iUnique] .=']},';
            $data2 .= $uniqueListJsonWP[$iUnique];
    	}

        $data2 = rtrim($data2, ','); // Taka ut seinustu kommuna
        $data2 .=']},';


    // All contacts in alphabet order
    $data3 = '{"Alphabet":[';
    $data3 .= '

    	$allItemsFromTable = $db->query("SELECT * FROM $tableName ORDER BY Nafn ASC");

        $count = 0;
        while($row = $allItemsFromTable->fetch(PDO::FETCH_ASSOC)) {

            $data3 .= '{
                        "Id": "'.$count.'",
                        "Nafn": "'.trim($row['Nafn']).'",
                        "Simi": "'.trim($row['Simi']).'",
                        "Netfang": "'.trim($row['Netfang']).'",
                        "Starfsheiti": "'.trim($row['StarfsHeiti']).'",
                        "Starfsstod": "'.trim($row['Starfsstod']).'",
                        "Deild": "'.trim($row['Deild']).'"
                        },';
            $count++;


        }


        $data3 = rtrim($data3, ','); // Taka ut seinustu kommuna

        $data3 .=']}';

    $allData .= $data;
    $allData .= $data2;
    $allData .= $data3;
    $allData .= ']}';
    echo $allData;

    // Close mysql connection
    $db = null;
?>