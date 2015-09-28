<?php 
	@session_start();
	require_once('../core_nufarm/libs.php');
	Auth::check();
 ?>
<!DOCTYPE html>
<html lang="en" ng-app="Nufarm">
<head>
	<meta charset="UTF-8">
	<title>Formulario - inicio</title>
</head>
<body >
	


	<div ng-view ></div>

	<script src="js/jquery-1.4.2.min.js"></script>
	<script src="js/angular.min.js"></script>
	<script src="js/angular-route.min.js"></script>
	<script src="js/app_init.js"></script>
	<script src="js/angular-file-upload.min.js"></script>
	<script src="js/services.js"></script>
	<script src="js/directives.js"></script>
	<script src="js/ctrlAppInicio.js"></script>
	<script src="js/ctrlAppTwo.js"></script>
	<script src="js/ctrlAppThree.js"></script>
	<script src="js/ctrlAppFourth.js"></script>
</body>
</html>