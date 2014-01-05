<?php


exec('git pull origin master', $o);
echo implode("\n", $o);