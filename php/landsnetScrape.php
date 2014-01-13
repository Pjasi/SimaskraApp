<?php

function get_string_between($string, $start, $end){
    $string = " ".$string;
    $ini = strpos($string,$start);
    if ($ini == 0) return "";
    $ini += strlen($start);
    $len = strpos($string,$end,$ini) - $ini;
    return substr($string,$ini,$len);
}

 header ('Content-type: text/html; charset=utf-8');
$url = 'http://landsnet.is/landsnet/mannaudur/starfsmennlandsnets/';



$contents = file_get_contents($url);

$parsed = get_string_between($contents, "<tbody>", "</tbody>");

$arr = explode('/td>',$parsed,-1);


$numberOfArr = sizeof($arr);

$counter = 0;
for($i=0; $i<$numberOfArr; $i+=3)
{
	
	$names[$counter] = get_string_between($arr[$i], "<strong>", "</strong>");
	$title[$counter] = get_string_between($arr[$i], '<div class="job-title">', "<br />");
	$workplace[$counter] = get_string_between($arr[$i], "<br />", "</div>");
	$phonenumber[$counter] = get_string_between($arr[$i+1], '<td header="id3" scope="col" class="col1">', "<");
	$phonenumber[$counter] = str_replace(' ','',$phonenumber[$counter]);
	$email[$counter] = get_string_between($arr[$i+2], '<td header="id4" scope="col" class="col1">', "<");
	$email[$counter] = str_replace('[hja]',"@",$email[$counter]);
	
	
	$counter += 1;
	$division[$counter-1] = get_string_between($arr[$i], '<tr class="col'.$counter.' ', " ");
}

// Translate divisions
for($i=0; $i<$counter; $i++)
{
	switch ($division[$i])
	{
	case 'operations':
		$division[$i] = "Netrekstur";
		break;
	case 'marketing':
		$division[$i] = "Kerfisstj&oacute;rn og marka&eth;ur";
		break;
	case 'executive-office':
		$division[$i] = "Skrifstofa framkv&aelig;mdastj&oacute;rnar";
		break;
	case 'sys-development':
		$division[$i] = "Kerfis&thorn;r&oacute;un";
		break;
	case 'excecute':
		$division[$i] = "Framkv&aelig;mdir";
		break;
	case 'finance':
		$division[$i] = "Fj&aacute;rm&aacute;l";
		break;
	case 'IT':
		$division[$i] = "Uppl&yacute;singat&aelig;kni";
		break;
	case 'board':
		$division[$i] = "Framkv&aelig;mdastj&oacute;rn";
		break;
	case 'quality-environment':
		$division[$i] = "G&aelig;&eth;a-/umhverfism&aacute;l";
		break;
	case 'safety':
		$division[$i] = "&Ouml;ryggism&aacute;l";
		break;
	default:
		echo "</br>".$division[$i];
	}

}


print_r($email);
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
  $db = new PDO('mysql:host='.$host.';dbname='.$databaseName.';charset=utf8', $user, $pass);

//$sql = mysqli_query($con,"INSERT INTO landsnetsimaskra (id, Nafn, Simi, Netfang, StarfsHeiti, Starfsstod, Deild) VALUES (NULL, '".$names[$ip]."', ".$phonenumber[$ip].", '".$email[$ip]."', '".$title[$ip]."', '".$workplace[$ip]."', 'deild')");
$sql = //mysqli_query($con,"INSERT INTO landsnetsimaskra (id, Nafn, Simi, Netfang, StarfsHeiti, Starfsstod, Deild) VALUES (NULL, 'ddd', 23, 'asdf@asd.is', 'herra', 'heima', 'deild')");

$sql = "INSERT INTO landsnetsimaskra (id, Nafn, Simi, Netfang, StarfsHeiti, Starfsstod, Deild) VALUES (NULL,:nafn,:simi,:netfang,:starfsheiti,:starfsstod,:deild)";


for($ip=0; $ip<$counter; $ip++)
{
	$q = $db->prepare($sql);
	$q->execute(array(':nafn'=>$names[$ip],
					  ':simi'=>$phonenumber[$ip],
					  ':netfang'=>$email[$ip],
					  ':starfsheiti'=>$title[$ip],
					  ':deild'=>$division[$ip],
					  ':starfsstod'=>$workplace[$ip]));
}
$db = null;
?>