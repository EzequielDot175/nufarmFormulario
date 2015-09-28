app.controller('ctrlAppThree', ['$scope','ajax', function(scp, ajax){


	scp.sports = {};
	scp.social = {};
	scp.actividades = {};
	scp.futbol = [];

	var srv = ajax.formInit();


		srv.getStep3(function(a){
			/**
			 * Seteo los checkbox deportes
			 */
			a.sports.map(function(element, index) {
				scp.sports[element] = false;
			});
			/**
			 * Seteo los checkbox social
			 */
			a.social.map(function(element, index) {
				scp.social[element] = false;
			});

			/**
			 * Seteo los select en futbol
			 */
			scp.futbol = a.futbol;

			/**
			 * Seteo los select de actividades recrativas
			 */
			
			a.actividades.map(function(element, index) {
				scp.actividades[element] = false;
			});


		});


	scp.check = function(){
		console.info('Reporting sport:', scp.sports);
	}
	

	scp.editPreferences = function(){
		console.info('Reporting :', scp.sports);	
		console.info('Reporting :', scp.social);	
		console.info('Reporting :', scp.actividades);	
		console.info('Reporting :', scp.userFutbol);	
	}

}]);