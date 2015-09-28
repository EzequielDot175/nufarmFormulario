app.directive('preloaderImg', [ function(){
	// Runs during compile
	return {
		// name: '',
		// priority: 1,
		// terminal: true,
		// scope: {}, // {} = isolate, true = child, false/undefined = no change
		// controller: function($scope, $element, $attrs, $transclude) {},
		// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
		// restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
		// template: '',
		// templateUrl: '',
		// replace: true,
		// transclude: true,
		// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
		link: function($scope, iElm, iAttrs, controller) {
			var input = $('input[preloader-input]');
			var inputText = $('input[preloader-text]');
			var reader = new FileReader();


				input.change(function(event) {
					if ($(this)[0].files[0] != undefined) {
						var file = $(this)[0].files[0];
						inputText.val(file.name);
					    reader.readAsDataURL( file );
						reader.onload = function(e){
							iElm[0].src = this.result || 'http://placehold.it/200x100';
						}
					};
				});
			console.info('$scope :', $scope);
			
		}
	};
}]);