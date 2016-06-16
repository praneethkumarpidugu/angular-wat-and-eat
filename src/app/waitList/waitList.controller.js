(function() {
	'use strict';
	
	angular
		.module('app.waitList')
		.controller('WaitListController', WaitListController);
	
	WaitListController.$inject = ['firebaseDataService', 'partyService'];
	
	function WaitListController(firebaseDataService, partyService) {
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
			var newTextMessage = {
				phoneNumber: party.phone,
				size: party.size,
				name: party.name
			};
			//send the above newTextMessage with firebaseDataService
			firebaseDataService.textMessages.push(newTextMessage);
			//we will notify the other side.
			party.notified = true;
			
			//save the database  i,e vm.parties with $save directive.
			vm.parties.$save(party)
		}
		
		
	}
})();