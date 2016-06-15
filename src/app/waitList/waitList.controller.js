(function() {
	'use strict';
	
	angular
		.module('app.waitList')
		.controller('WaitListController', WaitListController);
	
	function WaitListController() {
		var vm = this;
		
		vm.parties = [1, 2, 3, 4];
		
		vm.addParty = addParty;
		
		function addParty() {
			vm.parties.push('another');
		}
	}
})();