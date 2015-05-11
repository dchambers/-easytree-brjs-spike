(function(){
	'use strict';
	
	require( 'jasmine' );
	
	var originalConsoleLog = console.log;
	
	var EasytreeViewModel = require( 'appx/easytree/EasytreeViewModel' );
	
	describe('Easytree Tests', function() {
	
		beforeEach(function() {
			console.log = jasmine.createSpy("console.log");
		});
	
		afterEach(function() {
			console.log = originalConsoleLog;
		});
	
		it( 'Should log hello on load', function() {
			new EasytreeViewModel();
			expect(console.log).toHaveBeenCalledWith('Welcome to your new Blade.');
		});
	
	});
}());