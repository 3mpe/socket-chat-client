angular.module('socket-chat')
	.service('Auth', function (Api, Config, Storage) {
		return {
			signin: function (params) {
				return Api.post('user/login', params);
			},
			setsession: function (value) {
				Storage.name(Config.sessionkey).set(value);
			},
			getsession: function (value) {
				return Storage.name(Config.sessionkey).get();
			},
			isAuthorized: function () {
				return Storage.name(Config.sessionkey).exists();
			}
		};
	});

