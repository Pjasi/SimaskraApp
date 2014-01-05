<?php 

  //--------------------------------------------------------------------------
  // Example php script for fetching data from mysql database
  //--------------------------------------------------------------------------
  $host = "localhost";
  $user = "appserv2_entrio";
  $pass = "R1501892679r!!";

  $databaseName = "appserv2_entrio";
  $tableName = "lastchange";
  
   $Timi_forrits = $_GET["timestamp"];
	$Timestamp_forrits = strtotime($Timi_forrits);
  
  //--------------------------------------------------------------------------
  // 1) Connect to mysql database
  //--------------------------------------------------------------------------

  $con = mysql_connect($host,$user,$pass);
  $dbs = mysql_select_db($databaseName, $con);
  
  //--------------------------------------------------------------------------
  // 2) Get DA DATA
  //--------------------------------------------------------------------------
  

  
  $uppfaera = 0;
    
  $result = mysql_query("SELECT * FROM $tableName WHERE ID=1");
  $row = mysql_fetch_row($result);  //query
  $timi = strtotime($row[1]);
  
  //Athuga hvort thurfi ad uppfaera, ef svo, ta skilum vid 1
  if($timi > $Timestamp_forrits)
  $uppfaera = 1;

//json strengur
   $data ='{"lastchange": {
		"timi": "'.$row[1].'",
		"uppfaera": "'.$uppfaera.'"
		}}';






	echo $data;
	die();

?>