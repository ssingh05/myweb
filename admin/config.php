<?php
$mysql_hostname = "localhost";
$mysql_usernamae = "root";
$mysql_password = "";
$mysql_dbname = "personal";

$db = mysql_connect($mysql_hostname, $mysql_usernamae, $mysql_password)
or die("Database connection failed");
mysql_select_db($mysql_dbname, $db) or die("Can not connect to DB");

?>




