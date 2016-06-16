(function() {
	'use strict';
	
	angular
		.module('app.auth')
		.factory('authService', authService);
	
	authService.$inject = [];
	
	function authService() {
		var service = {};
		
		return service;
	}
	
})();