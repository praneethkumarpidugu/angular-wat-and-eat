(function() {
	'use strict';
	
	angular
		.module('app.auth')
		.controller('AuthController', AuthController);
	
	AuthController.$inject = ['$firebaseAuth'];
	
	function AuthController($firebaseAuth) {
		var vm = this;
		var firebaseReference = new Firebase('https://blistering-heat-7766.firebaseio.com/');
		var firebaseAuthObject = $firebaseAuth(firebaseReference);
		
		vm.user = {
			email: '',
			password: ''
		};
		
		vm.register = register;
		
		function register(user) {
			return firebaseAuthObject.$createUser(user)
				.then(function(user) {
					console.log(user);
				})
				.catch(function(error){
					console.log(error);
				});
		}
	}
	
	
})();