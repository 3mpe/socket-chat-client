angular
	.module('socket-chat')
  .config(function ($httpProvider) {
    $httpProvider.interceptors.push(function ($q, $injector) {
      return {
        response: function (response) {
          $injector.invoke(function (Config, Storage) {
            if (response.config.url == "/api/v1/user/logout") {
              Storage.name(Config.userkey).remove();
              Storage.name(Config.sessionkey).remove();
            }
            if (response && response.data && response.data.session) {
              Storage.name(Config.userkey).set(response.data.user);
              Storage.name(Config.sessionkey).set(response.data.session);
            }
          });

          return response;
        },
				request: function (reqItem) {
					$injector.invoke(function (Config, Storage) {
						reqItem.headers.token = Storage.name(Config.sessionkey).get();
					});

					return reqItem;
				}
      };
    });
  });
