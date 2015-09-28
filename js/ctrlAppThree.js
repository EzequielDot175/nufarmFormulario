app.controller('ctrlAppThree', ['$scope','ajax', function(scp, ajax){
	
	scp.auth           = [];
	
	scp.sports         = {};
	scp.social         = {};
	scp.actividades    = {};
	scp.futbol         = [];
	scp.other_activity = [];

	scp.user = [];

	var srv = ajax.formInit();

	

		/**
		 * Auth Info
		 */
		srv.getUser(function(a){

			scp.user = a;

			scp.user.equipodefutbol = a.equipodefutbol.split(',');
			scp.user.other_activity = a.other_activity.split(',');
			scp.user.social = a.social.split(',');
			scp.user.deport_pref = a.deport_pref.split(',');
			scp.user.actividades = a.actividades.split(',');


			/**
			 * SET USER DATA IN CURRENT FORM
			 */
			scp.user.deport_pref.map(function(elem, index) {
				scp.sports[elem] = true;
			});

			scp.user.actividades.map(function(elem, index) {
				scp.actividades[elem] = true;
			});

			scp.other_activity = scp.user.other_activity;

			scp.user.social.map(function(elem, index) {
				scp.social[elem] = true;
			});

			scp.userFutbol = scp.user.equipodefutbol[0] || "";
			scp.userFutbol2 = scp.user.equipodefutbol[1] || "";


			

			console.info('Reporting sports:', scp.user);
			// console.info('Reporting deport_pref:', );
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
		var other_activity = scp.other_activity.join();
		var userFutbol = [scp.userFutbol,scp.userFutbol2].join();

		if (scp.alertEmpty('Deportes de preferencia',sports)) {
			return;
		};

		if (scp.alertEmpty('Redes Sociales',social)) {
			return;
		};

		if (scp.alertEmpty('Actividades Recreativas',actividades)) {
			return;
		};

		if (scp.alertEmpty('Equipo favorito',scp.userFutbol)) {
			return;
		};

		var edit = {
			actividades: actividades,
			equipodefutbol: userFutbol,
			social: social,
			other_activity: other_activity,
			deport_pref: sports
		};
		
		srv.updateStep3(edit,function(a){
			console.log(a);
		});
	}

	scp.alertEmpty = function(name, value){
		if (value == "" || value == undefined) {
			alert(name+" no puede estar vacio");
			return true;
		}else{
			return false;
		}

	}

	scp.deleteOtherActivity = function(a){
		console.info('deleteOtherActivity :', a);
		scp.other_activity.splice(a, 1);
	}

	scp.add_other_activity = function(){
		scp.other_activity.push(scp.in_other_activity);
		scp.in_other_activity = "";
	}

}]);