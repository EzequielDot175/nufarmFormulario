app.controller('ctrlAppFourth', ['$scope','ajax', function(scp,ajax){
	
	scp.seller = [
		{
			name: "",
			mail: "",
			cellphone: "",
			num: 1
		},
		{
			name: "",
			mail: "",
			cellphone: "",
			num: 2
		},
		{
			name: "",
			mail: "",
			cellphone: "",
			num: 3
		},
		{
			name: "",
			mail: "",
			cellphone: "",
			num: 4
		},
	]; 

	var srv = ajax.formInit();

	scp.optionProvinces = [];

	srv.provinces(function(a){
		scp.optionProvinces = a;
	});
	

	srv.getUser(function(a){
		scp.company   = a.strEmpresa;
		scp.direction = a.dir_empresa;
		scp.city      = a.ciudad_empresa;
		scp.cp        = a.cp_entrega;
		scp.phone     = a.tel_empresa;
		scp.province  = a.prov_empresa;

		if (a.vendedores != "") {
			scp.seller = JSON.parse(a.vendedores);
		};
	});




	scp.saveStep4 = function(){
		var params = {
			company: scp.company,
			direction: scp.direction,
			city: scp.city,
			cp: scp.cp,
			phone: scp.phone,
			province: scp.province
		};

		srv.saveStep4({company: params, sellers: scp.seller},function(a){
			if (a.trim() == "true") {
				alert('Datos guardados correctamente');
			};
		});

	}


}]);