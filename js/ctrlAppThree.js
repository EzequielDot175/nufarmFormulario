app.controller('ctrlAppThree', ['$scope','ajax', function(scp, ajax){
	
	scp.auth           = [];
	
	scp.sports         = {};
	scp.social         = {};
	scp.actividades    = {};
	scp.futbol         = [];
	scp.other_activity = [];


	var srv = ajax.formInit();


		/**
		 * Auth Info
		 */
		srv.getUser(function(a){
			console.info('Reporting :', a);
		});

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

		var sports = srv.ifTrue(scp.sports);
		var social = srv.ifTrue(scp.social);
		var actividades = srv.ifTrue(scp.actividades);
		console.info('Reporting sports:', sports);	
		console.info('Reporting social:', social);	
		console.info('Reporting actividades:', actividades);	
		console.info('Reporting userFutbol:', scp.userFutbol);
		
		
	}

}]);