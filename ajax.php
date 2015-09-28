<?php 
	require_once('../core_nufarm/libs.php');
	Ajax::Angular();

	Utils::POST('frontAjax', function(){
		Ajax::call($_POST['method']);
	});

	if(!empty($_FILES)):
		print_r($_FILES);	
	endif;
 ?>