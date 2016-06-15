(function() {
	'use strict';
	
	angular
		.module('app.waitList')
		.controller('WaitListController', WaitListController);
	
	WaitListController.$inject = ['$firebaseArray'];
	
	function WaitListController($firebaseArray) {
		var vm = this;
		
		var fireParties = new Firebase('https://blistering-heat-7766.firebaseio.com/parties');
		var fireTextMessages = new Firebase('https://blistering-heat-7766.firebaseio.com/textMessages')
		
		function Party() {
			this.name = '';
			this.phone = '';
			this.size = '';
			this.done = false;
			this.notified = false;
		}
		vm.newParty = new Party();
		vm.parties = $firebaseArray(fireParties);	
		vm.addParty = addParty;
		vm.removeParty = removeParty;
		vm.sendTextMessage = sendTextMessage;
		
		//function to add party
		function addParty() {
			vm.parties.$add(vm.newParty);
			vm.newParty = new Party();
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
			//send the above newTextMessage with fireTextMessages
			fireTextMessages.push(newTextMessage);
			//we will notify the other side.
			party.notified = true;
			
			//save the database  i,e vm.parties with $save directive.
			vm.parties.$save(party)
		}
		
		
	}
})();