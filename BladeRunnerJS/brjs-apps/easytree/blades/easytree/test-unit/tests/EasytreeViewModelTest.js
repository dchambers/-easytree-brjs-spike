(function(){
	'use strict';
	
	var EasytreeViewModelTest = TestCase( 'EasytreeViewModelTest' );
	
	var EasytreeViewModel = require( 'appx/easytree/EasytreeViewModel' );
	
	EasytreeViewModelTest.prototype.testSomething = function() {
	  var model = new EasytreeViewModel();
	  assertEquals( 'Welcome to your new Blade.', model.welcomeMessage() );
	};
}());