(function() {
	'use strict';
	
	angular
		.module('app.waitList')
		.directive('gzPartyForm', gzPartyForm);
	
	function gzPartyForm() {
		return {
			templateUrl: 'app/waitlist/directives/partyForm.html',
			restrict: 'E',
			controller: PartyFormController,
			controllerAs: 'vm',
			scope: {}
		};
	}
	
	PartyFormController.$inject = ['partyService'];
	function PartyFormController(partyService) {
		
	}
})();