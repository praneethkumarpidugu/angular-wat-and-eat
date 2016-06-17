(function() {
	'use strict';
	
	angular
		.module('app.auth')
		.factory('authService', authService);
	
	authService.$inject = ['$firebaseAuth', 'firebaseDataService'];
	
	function authService($firebaseAuth, firebaseDataService) {
		
		var firebaseAuthObject = $firebaseAuth(firebaseDataService.root);
		
		var service = {
			firebaseAuthObject: firebaseAuthObject,
			register: register,
			login: login,
			logout: logout,
			isLoggedIn: isLoggedIn,
			sendWelcomeEmail: sendWelcomeEmail
		};
		
		return service;
		
		function register(user) {
			return firebaseAuthObject.$createUser(user);
		}
		
		function login(user) {
			return firebaseAuthObject.$authWithPassword(user);
		}
		
		function logout() {
			return firebaseAuthObject.$unauth();
		}
		
		function isLoggedIn() {
			return firebaseAuthObject.$getAuth();
		}
		
		function sendWelcomeEmail(emailAddress) {
			firebaseDataService.emails.push({
				emailAddress: emailAddress
			});
		}
	}
	
})();