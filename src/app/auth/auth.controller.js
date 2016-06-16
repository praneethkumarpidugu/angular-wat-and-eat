(function() {
	'use strict';
	
	angular
		.module('app.auth')
		.controller('AuthController', AuthController);
	
	
	//adding location in firebase
	AuthController.$inject = ['$location', '$firebaseAuth', 'FIREBASE_URL', 'authService'];
	
	function AuthController($location, $firebaseAuth, FIREBASE_URL, authService) {
		var vm = this;
		var firebaseReference = new Firebase(FIREBASE_URL);
		var firebaseAuthObject = $firebaseAuth(firebaseReference);
		
		vm.user = {
			email: '',
			password: ''
		};
		
		vm.register = register;
		vm.login = login;
		vm.logout = logout;
		function register(user) {
			return authService.register(user)
				.then(function() {
					return vm.login(user);
				})
				.catch(function(error){
					console.log(error);
				});
		}
		
		//controller function for login
		function login(user) {
			return firebaseAuthObject.$authWithPassword(user)
				.then(function(loggedInUser){
					console.log(loggedInUser);
					$location.path('/waitlist');
			})
				.catch(function(error) {
					console.log(error);
			});
		}
		
		//controller function for logout
		function logout() {
			firebaseAuthObject.$unauth();
			$location.path('/')
		}
	}
	
	
})();