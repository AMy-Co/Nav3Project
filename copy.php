<?Php
$dir='SOS'; // directory name 
$master='LSC_SO_master.pdf'; // directory name 
$new_SO='NOT SET';
$test='NOT SET';
$ar=scandir($dir); 
echo $_POST['new_SO'];
$test=$_POST['TEST']; // Receive the file list from form
$new_SO=$_POST['new_SO'];

copy($master, $dir.'/'.$new_SO);

echo "SOs Directory: $dir<br />";
echo "Master SO: $master<br />";
echo "File Created: $new_SO <---PDF<br />";
echo "Box?: $box <br />";

?>
