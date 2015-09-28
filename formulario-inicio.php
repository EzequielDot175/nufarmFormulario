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
	
	<section ng-controller="ctrlAppInicio">
		<h1>Domicio Entrega</h1>
		<label for="">Empresa</label>
		<input type="text" ng-model="company">

		<br>

		<label for="">Direccion</label>
		<input type="text" ng-model="direction">

		<br>

		<label for="">Nombre</label>
		<input type="text" ng-model="name">

		<br>

		<label for="">Ciudad</label>
		<input type="text" ng-model="city">

		<br>

		<label for="">Apellido</label>
		<input type="text" ng-model="lastname">

		<br>

		<label for="">Codigo Postal</label>
		<input type="text" ng-model="cod">

		<br>

		<label for="">Telefono</label>
		<input type="text" ng-model="phone">

		<br>

		<label for="">Provincia</label>
		<select name="" id="" ng-model="province" ng-options=" item for item in optionProvinces">
			<option value="">Seleccionar provincia</option>
		</select>

		<br>

		<input type="submit" value="Guardar" ng-click="basics();">


		<form ng-submit="uploadLogo();">
			<h1>Logo de empresa</h1>
			<img ng-src="{{logoEmpresa}}" preloader-img alt="" >
			<h1>Seleccionar imagen</h1>
			<input type="text" value="nombre de imagen" preloader-text>
			<input type="file" name="logo" accept="image/*" preloader-input nv-file-select uploader="logo">
			<input type="submit" value="subir imagen">
		</form>

		<form ng-cloak>
			<h1>Seleccionar otros formatos de logo</h1>
			<input type="file" nv-file-select uploader="otherFiles" >
			<button ng-click="ver();">Ver scope</button>
			<ul ng-repeat="(key, value) in otherFiles.queue | filter:addAlias"  >
				<li>
					<div>
						{{value.file.name}} <br> <button ng-click="value.upload();">Upload</button> <br> <button ng-click="value.remove();">Delete</button> 
					</div>
				</li>
			</ul>
		</form>




		<button>Confirmar</button>
	</section>

	<hr>


	<section ng-controller="ctrlAppTwo">
		<h1>Datos de usuarios</h1>

		<label for="">Cargo</label>
		<input type="text" ng-model="appointment">

		<br>

		<label for="">Numero de telefono/celular</label>
		<input type="text" ng-model="cellphone">

		<br>

		<label for="">Fecha de nacimiento</label>
		<input type="text" ng-model="birthday">

		<br>

		<label for="">Compania</label>
		<input type="text" ng-model="company">

		<br>

		<label for="">Email</label>
		<input type="text" ng-model="mail">

		<br>

		<label for="">Domicilio de empresa</label>
		<input type="text" ng-model="companyAdress">

		<br>

		<label for="">Estado Civil</label>
		<input type="text" ng-model="civilStatus">

		<br>

		<label for="">Desea recibir comunicados por sms</label>
		<input type="checkbox" ng-model="sms" >

		<br>

		<input type="submit" value="Guardar" ng-click="submitData();">	


		<h1>Accesos: usuario y clave</h1>

		<label for="">Usuario</label>
		<input type="text" ng-model="mail" disabled="">

		<br>

		<label for="">Cambiar Clave</label>
		<input type="password" ng-model="password">

		<br>

		<input type="submit" value="Guardar" ng-click="editPassword()">	

	</section>

	<hr>

	<section ng-controller="ctrlAppThree">
		<h1>Datos de usuario</h1>
		

		<h3>Deportes de preferencia</h3>
		<ul>
			<li ng-repeat="(key,item) in sports">
				<label for="">{{key}}</label>
				<input  type="checkbox" ng-model="sports[key]" >
			</li>
		</ul>
		
		<h3>Actividades recreativas</h3>
		<ul>
			<li ng-repeat="(key,item) in actividades">
				<label for="">{{key}}</label>
				<input  type="checkbox" ng-model="actividades[key]" >
			</li>
		</ul>
		<h3>Otras activades</h3>
		<ul>
			<li ng-repeat="(key, value) in other_activity">{{value}} <button ng-click="deleteOtherActivity(key)">Borrar</button> </li>
		</ul>
		<input type="text" ng-model="in_other_activity">
		<button ng-click="add_other_activity()">Agregar</button>

		<h3>Redes Sociales</h3>
		<ul>
			<li ng-repeat="(key,item) in social">
				<label for="">{{key}}</label>
				<input  type="checkbox" ng-model="social[key]" >
			</li>
		</ul>
		
		<h1>Equipo de Futbol</h1>
		<select name="" id="" ng-model="userFutbol" ng-options="value for value in futbol">
			<option value="">Seleccione su equipo de futbol</option>
		</select>
		<input type="text" ng-model="userFutbol2">
		<br>

		<input type="submit" ng-click="editPreferences()">
	</section>


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