angular.module('socket-chat')
	.controller('loginController', function (Auth, Storage, Notify, $state) {
		var vm = this;

		function signin(formData) {
			Auth.signin(formData)
				.success(function (response) {
					if (response.type === true) { $state.go('app.home'); }
					else { Notify.warning( response.data ); }
				})
				.error(function (error) {
					console.log('Auth Error', error);
				});
		}
		vm.signin = signin;
	});

