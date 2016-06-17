(function() {
	'use strict';
	
	angular
		.module('app.waitList')
		.controller('WaitListController', WaitListController);
	
	WaitListController.$inject = ['partyService', 'textMessageService', 'user'];
	
	function WaitListController(partyService, textMessageService, user) {
		var vm = this;
		
		//var fireParties = new Firebase(FIREBASE_URL + 'parties');
		//var fireTextMessages = new Firebase(FIREBASE_URL + 'textMessages')
		
		
		
		
		
		vm.parties = partyService.getPartiesByUser(user.uid);	
		
		vm.removeParty = removeParty;
		vm.sendTextMessage = sendTextMessage;
		vm.toggleDone = toggleDone;
		
		
		
		function removeParty(party) {
			vm.parties.$remove(party);
		}
		
		//function to mark as done
		function toggleDone(party) {
			vm.parties.$save(party);
		}
		
		//function to sendtext message
		function sendTextMessage(party) {
			textMessageService.sendTextMessage(party, vm.parties);
		}
		
		
	}
})();