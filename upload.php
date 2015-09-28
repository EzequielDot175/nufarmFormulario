<?php 
	@session_start();
	require_once('../core_nufarm/libs.php');
    use core\Upload;

	$user = Auth::id();


	if(isset($_FILES['uploadLogo'])):

		Upload::$dir = '../marketingNet/images-clientes';
		Upload::$name = rand().'logo_empresa_'.$user;

		if(Upload::uploadFile($_FILES['uploadLogo'])):
			$userEdit = new Usuario();
		 	$result = $userEdit->editPicture($user, Upload::$uploadedName);
			echo($result ? 1 : 0);
		else:
			echo 0;
		endif;
	
	endif;

	if(isset($_FILES["uploadFiles"])):
		
		Upload::$dir = "uploads/folder_userid_".$user;
		var_dump(Upload::uploadAllTypeFiles($_FILES["uploadFiles"]));
	
	endif;
 ?>