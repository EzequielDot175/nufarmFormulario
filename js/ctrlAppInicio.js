app.controller('ctrlAppInicio', ['$scope','ajax','FileUploader', function(scp,ajax,FileUploader){

	scp.currentUser = [];
	scp.optionProvinces = [];
    scp.logoFileName = "";
    scp.form = false;
    scp.message = "";
    scp.save_changes = false;

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

    scp.showModal = function(){
        var modal = $('#triggModal');
        modal.trigger('click');
    }


	var srv = ajax.formInit();
	srv.provinces(function(a){
		scp.optionProvinces = a;
	});


	srv.getUser(function(a){
        console.log(a);
		scp.currentUser = a;
		scp.company   = a.strEmpresa;
		scp.direction = a.direccion;
		scp.city      = a.ciudad;
		scp.cod       = a.cp;
		scp.phone     = a.telefono;
		scp.province  = a.provincia;
        /**
         * jQuery Value
         */
        scp.form      = Boolean(parseInt(a.form));
        // scp.logoFileName  = a.logo;
		if (a.logo != "") {
			scp.logoEmpresa = '../marketingNet/images-clientes/'+a.logo;
		};


	});

	scp.basics = function(){
		var user = {
			company   : scp.company  ,
			direction : scp.direction,
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

    scp.addAlias = function(a){
    	var item = a;
    		item.alias = "uploadFiles";

    	return a;
    }

	scp.uploadLogo = function(){
		scp.logo.queue[0].alias = "uploadLogo";
		scp.logo.queue[0].upload();
	}


    scp.confirmForm = function(){
        // scp.contentModal = "¿Desea continuar con el formulario o desea acceder al programa?";
        scp.showModal();
    }

}]);