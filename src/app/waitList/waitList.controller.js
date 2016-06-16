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
		
		console.log(user);
		
		
		vm.newParty = new partyService.Party();
		vm.parties = partyService.parties;	
		vm.addParty = addParty;
		vm.removeParty = removeParty;
		vm.sendTextMessage = sendTextMessage;
		vm.toggleDone = toggleDone;
		
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