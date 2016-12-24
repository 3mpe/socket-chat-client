angular.module('socket-chat')
	.controller('homeController', function (Storage, Config, $state, Notify) {
		var vm = this;	
		if (!Storage.name(Config.sessionkey).exists()) {
			Notify.error(' Please Sign in. ')
			$state.go('app.login');
		}	
	});

