app.controller('ctrlAppInicio', ['$scope','ajax','FileUploader', function(scp,ajax,FileUploader){

	scp.currentUser = [];
	scp.optionProvinces = [];

	/**
	 * Uploader
	 */
	scp.logo = new FileUploader({
        url: 'upload.php',
        queueLimit: 1
    });

	scp.otherFiles = new FileUploader({
        url: 'upload.php'
    });

	scp.logo.onWhenAddingFileFailed = function(item /*{File|FileLikeObject}*/, filter, options) {
        console.info('onWhenAddingFileFailed', item, filter, options);
    };
    scp.logo.onAfterAddingFile = function(fileItem) {
        console.info('onAfterAddingFile', fileItem);
    };
    scp.logo.onAfterAddingAll = function(addedFileItems) {
        console.info('onAfterAddingAll', addedFileItems);
    };
    scp.logo.onBeforeUploadItem = function(item) {
        console.info('onBeforeUploadItem', item);
    };
    scp.logo.onProgressItem = function(fileItem, progress) {
        console.info('onProgressItem', fileItem, progress);
    };
    scp.logo.onProgressAll = function(progress) {
        console.info('onProgressAll', progress);
    };
    scp.logo.onSuccessItem = function(fileItem, response, status, headers) {

    	if (fileItem.alias == "uploadLogo") {

    		if (response == 1) {
    			alert('El logo se actualizo correctamente');
    		}else{
    			alert('Error al actualizar el logo');
    		}
    	};

    };
    scp.logo.onErrorItem = function(fileItem, response, status, headers) {
        console.info('onErrorItem', fileItem, response, status, headers);
    };
    scp.logo.onCancelItem = function(fileItem, response, status, headers) {
        console.info('onCancelItem', fileItem, response, status, headers);
    };
    scp.logo.onCompleteItem = function(fileItem, response, status, headers) {
    	// fileItem.remove();
        console.info('onCompleteItem', fileItem, response, status, headers);
    };
    scp.logo.onCompleteAll = function() {
        // console.info('onCompleteAll');
    };


    /**
     * End Uploader
     */
    

     /**
      * Upload Files Handler
      */
    scp.otherFiles.onSuccessItem = function(fileItem, response, status, headers){
    	console.info('Reporting response otherFiles:', response);
    }
    scp.otherFiles.onProgressAll = function(progress){
    	console.info('Reporting progress:', progress);
    }
    scp.otherFiles.onCompleteItem = function(fileItem, response, status, headers) {
    	fileItem.remove();
    };
     /**
      * End Upload Handler
      */



	var srv = ajax.formInit();
	srv.provinces(function(a){
		scp.optionProvinces = a;
	});


	// 	srv.user = 10;
	srv.getUser(function(a){
		scp.currentUser = a;
		scp.company   = a.strEmpresa;
		scp.direction = a.direccion;
		scp.name      = a.strNombre;
		scp.city      = a.ciudad;
		scp.lastname  = a.strApellido;
		scp.cod       = a.cp;
		scp.phone     = a.telefono;
		scp.province  = a.provincia;

		if (a.logo != "") {
			scp.logo = '../marketingNet/images-clientes/'+a.logo;
		};

		console.info('User :', a);

	});

	scp.basics = function(){
		var user = {
			company   : scp.company  ,
			direction : scp.direction,
			name      : scp.name     ,
			lastname  : scp.lastname ,
			city  	  : scp.city 	 ,
			cod       : scp.cod      ,
			phone     : scp.phone    ,
			province  : scp.province
		};

		srv.basics(user,function(a){
			var result = Boolean(parseInt(a));
			if (result) {
				alert('Usuario guardado correctamente');
			}else{
				alert('Error al actualizar los datos');
			}
		});

	}

    scp.ver = function(){
    	
    	// scp.otherFiles.clearQueue();
    	console.info('Reporting :', scp.otherFiles);
    }

    scp.addAlias = function(a){
    	var item = a;
    		item.alias = "uploadFiles";

    	return a;
    }

	scp.uploadLogo = function(){
		scp.logo.queue[0].alias = "uploadLogo";
		scp.logo.queue[0].upload();
	}

}]);