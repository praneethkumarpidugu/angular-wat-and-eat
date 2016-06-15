(function() {
	'use strict';
	
	angular
		.module('app.waitList')
		.controller('WaitListController', WaitListController);
	
	WaitListController.$inject = ['$firebaseArray'];
	
	function WaitListController($firebaseArray) {
		var vm = this;
		
		var fireParties = new Firebase('https://blistering-heat-7766.firebaseio.com/parties');
		
		
		
		vm.parties = $firebaseArray(fireParties);
		
		vm.addParty = addParty;
		
		function addParty() {
			vm.parties.$add('another');
		}
	}
})();