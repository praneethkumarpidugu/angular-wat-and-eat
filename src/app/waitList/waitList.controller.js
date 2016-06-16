(function() {
	'use strict';
	
	angular
		.module('app.waitList')
		.controller('WaitListController', WaitListController);
	
	WaitListController.$inject = ['partyService', 'textMessageService'];
	
	function WaitListController(partyService, textMessageService) {
		var vm = this;
		
		var fireParties = new Firebase(FIREBASE_URL + 'parties');
		var fireTextMessages = new Firebase(FIREBASE_URL + 'textMessages')
		
		
		vm.newParty = new partyService.Party();
		vm.parties = partyService.parties;	
		vm.addParty = addParty;
		vm.removeParty = removeParty;
		vm.sendTextMessage = sendTextMessage;
		
		//function to add party
		function addParty() {
			vm.parties.$add(vm.newParty);
			vm.newParty = new partyService.Party();
		}
		
		function removeParty(party) {
			vm.parties.$remove(party);
		}
		
		//function to mark as done
		function toggleDone(party) {
			vm.parties.$save(party);
			console.log('in toggleDone');
		}
		
		//function to sendtext message
		function sendTextMessage(party) {
			textMessageService.sendTextMessage(party, vm.parties);
		}
		
		
	}
})();