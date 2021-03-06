app.service('ajax', ['$http',function (ajax) {

	this.formInit = function(){
		return {
			post: function(params,callback){
				var extend = params;
					extend.frontAjax = "";
				ajax.post('ajax.php',extend).success(callback).error(function(data) {
					console.error('Error ', data);
				});
			},
			getUser: function(callback){
				this.post({method: 'AuthUser'},callback);
			},
			basics: function(params,callback){
				this.post({method: 'editAuth', data: params},callback);
			},
			provinces: function(callback){
				ajax.get('js/provincias.json').success(callback).error(function(a){
					console.error('Error :', a);
				});
			},
			editTwo: function(params,callback){
				this.post({method:'editDataAuth', data: params},callback);
			},
			editPassword: function(params,callback){
				this.post({method: 'editPassword', password: params},callback);
			},
			getStep3 : function(callback){
				ajax.get('js/collectionStep3.json').success(callback);
			},
			ifTrue: function(collection){
				var string = "";
				var init = 0;
				angular.forEach(collection, function(value, key) {
					if (value) {
						if (init == 0) {
							string += key;
							init++;
						}else{
							string += ","+key;
						}			
					};
				});

				return string;
			},
			updateStep3: function(params,callback){
				this.post({method: 'editStep3', data: params},callback);
			},
			saveStep4 : function(params,callback){
				var extend = params;
					extend.method = "editStep4";
				this.post(params,callback);
			}


		}
	}

	


}])

