<!DOCTYPE html PUBLIC '-//W3C//DTD XHTML 1.0 Transitional//EN' 'http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd'>

<?php
print "<style type=\'text/css\' media=\'print\'> body { visibility: hidden; display: none }</style>";
//$password="lutron";

?>

<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <title>Nav3Project</title>
        <!--iOS Stuff-->
        <meta name="apple-mobile-web-app-title" content="Nav3Project">
        <link rel="shortcut icon" href="../../images/lutfavicon.ico">
        <link rel="apple-touch-icon" href="../../images/lut.png">
        <link rel="apple-touch-startup-image" href="../../images/lut.png">
        <meta name="apple-mobile-web-app-capable" content="yes">
        <meta name="apple-mobile-web-app-status-bar-style" content="black">
        
        <link rel="stylesheet" type="text/css" media="only screen and (max-device-width: 1024px)" href="../../css/mobile.css" />


        <!-- /iOS stuff-->
        
        
        <style type="text/css" media="print">
        body { visibility: hidden; display: none }
        </style>
        
        <!-- Load JavaScript files -->
        <script type='text/javascript' src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
        <script type='text/javascript' src="../../scripts/jquery.simplemodal-1.4.4.js"></script>
        <script type='text/javascript' src="../../scripts/osx.simplemodal.js"></script>
        <script type='text/javascript' src="../../scripts/nav3project.js"></script>
        
        <!-- /Load JavaScript files -->
        
        <!-- Page styles -->
        <link type='text/css' href='../../css/demo.css' rel='stylesheet' media='screen' />

        <!-- OSX Style CSS files -->
        <link type='text/css' href='../../css/osx.css' rel='stylesheet' media='screen' />
        
    </head>
<body>


<!-- <?php 

// If password is valid let the user get access
// if (isset($_POST["password"]) && ($_POST["password"]=="$password")) {

?> -->


<!-- START OF HIDDEN HTML -->
<div id='container'>
	<div id='logo'>
		<h1>Nav3<span>Project</span></h1>
		<span class='title'>A shameless Nav2Project knock-off. <a href='#' id = 'PDF_expert_toggle'> | PDF Expert</a>
		
		
		  </span>
		  <div id = "desktop_mobile" hidden>
		  Looks like you are using a desktop browser.  For security reasons most modern browsers will not access local files.
		  <br />
		   <a href = 'https://goo.gl/OVLklG'>LocalLinks-Chrome</a> | <a href = 'https://goo.gl/BpEHyk'>Local Link-FF</a>
		  </div>
	</div>
	<div id='content'>
	  
		<div id='osx-modal'>
		
			<h3>Project Number:</h3>
			
			<form id= 'frm_job_number' action="">
			 <input 
	     class='field'
			 type='number' 
       id='job_number' 
       name='job_number' 
      pattern= '[0-9]*'
      placeholder='e.g. 1088253'
      value=''
      ><span id="err_msg"></span>
      <div id = 'auto_open'  hidden>
        Auto Open? <input type='checkbox' id='fb_auto_open' unchecked>
      </div>
      
      <br />
			<input type='submit' id='btn_project_folder' value='Nav3 Proj Folder' class= 'btn'>
			</form>
			
			   <div id = 'PDF_expert' hidden>
         <br />
         <hr noshode color='#999'>
         	<h3>Date:</h3>
        <input 
	     class='field'
			 type='date' 
       id='job_date' 
       name='job_date' 
       
      >
      <input type='submit' id='new_signoff' value='New SO' class= 'btn'>
     
     <br />
      PDF Search History: <br />
  	<div id = 'PDF_search_history'>
  	  
    	</div>
    	 <hr noshode color='#999'>
      </div>
			


	</div>
	<br />
	 Search History: <br />
	<div id = "search_history">
	</div>
  <input type='submit' id='clear_history' value='Clear History' class= 'btn' hidden>

	
	</div>
	<div id='footer'>

	   <a href='https://drive.google.com/file/d/0B3pRg7GM9iUDeWxJS2Rid2xpRzA/view?usp=sharing'>Instructions PDF</a> |
	   <a href='https://itunes.apple.com/us/app/filebrowser-access-files-on/id364738545?mt=8'>FileBrowser</a> | <a href='https://itunes.apple.com/us/app/cisco-anyconnect/id392790924?mt=8'>Any Connect VPN</a> 
	 <br />
 <a href='http://twitter.com/samstevenm'>@samstevenm</a>
	</div>
</div>

<!-- END OF HIDDEN HTML -->
<?php 
/*
  
}
else
{
// Wrong password or no password entered display this message
if (isset($_POST['password']) || $password == "") {
  print "<center><font color=\"red\"><b>Incorrect Password</b><br>Please enter the correct password</font></center>";}
  print "<form method=\"post\"><center>Please enter your password for access<br>";
  print "<input name=\"password\" type=\"password\" size=\"25\" maxlength=\"10\"><input value=\"Login\" type=\"submit\"></center></form>";
}

*/
 
?>
<BR>

 
</body>

</html>
