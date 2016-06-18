(function() {
	'use strict';
	
	angular
		.module('app.auth')
		.directive('gzAuthForm', gzAuthForm);
	
	function gzAuthForm() {
		return {
			templateUrl: 'app/auth/authForm.html',
			restrict: 'E',
			controller: AuthFormController,
			controllerAs: 'vm',
			bindToController: true,
			scope: {
				error: '='
			}
		};
	}
	
	function AuthFormController() {
		var vm = this;
	}
	
})();