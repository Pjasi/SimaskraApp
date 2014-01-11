<?php

$url = 'http://landsnet.is/landsnet/mannaudur/starfsmennlandsnets/';

$contents = file_get_contents($url);

echo $contents;

sleep(100);
?>