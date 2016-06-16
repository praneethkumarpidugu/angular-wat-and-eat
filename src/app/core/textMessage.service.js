(function() {
	'use strict';
	
	angular
		.module('app.core')
		.factory('textMessageService', textMessageService);
	
	textMessageService.$inject = ['firebaseDataService'];
	
	function textMessageService() {
		var service = {
			sendTextMessage: sendTextMessage
		};
		
		return service
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
	
})();