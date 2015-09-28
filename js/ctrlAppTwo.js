app.controller('ctrlAppTwo', ['$scope','ajax', function(scp,ajax){
	
	

	var srv = ajax.formInit();
	

	srv.getUser(function(data){
		
		scp.appointment   = data.cargorelevado;
		scp.cellphone     = data.telefono;
		scp.birthday      = data.cumpleanos;
		scp.company       = data.compania;
		scp.mail          = data.strEmail;
		scp.companyAdress = data.direccion;
		scp.name 		  = data.strNombre;
		scp.lastName	  = data.strApellido;
		scp.civilStatus   = data.estadocivil;
		scp.sms           = Boolean(parseInt(data.sms));
		scp.password      = "";

	});


	scp.submitData = function(){
		var params = {
			appointment  : scp.appointment  ,
			name  		 : scp.name  		,
			lastName  	 : scp.lastName  	,
			cellphone    : scp.cellphone    ,
			birthday     : scp.birthday     ,
			company      : scp.company      ,
			mail         : scp.mail         ,
			companyAdress: scp.companyAdress,
			civilStatus  : scp.civilStatus  ,
			sms          : scp.sms          
		}


		srv.editTwo(params,function(a){
			if (a.trim() == 'true') {
				alert('Datos modificados correctamente');
			}else{
				alert('No se pudieron guardar los datos');
			}
		});
	}


	scp.editPassword = function(){

		srv.editPassword(scp.password,function(a){
			console.info('Reporting a:', a);
			if (a.trim() == 'true') {
				alert('Password Cambiado Correctamente');
				scp.password = "";
			}else{
				alert('Error al cambiar la contraseña');
			}
		});

	}


}]);


