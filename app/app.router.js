angular
	.module('socket-chat')
	.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
		$stateProvider
			.state('app', {
				abstract: true,
				templateUrl: 'pages/layout.html',
				controller: 'LayoutController',
				controllerAs: 'vm'
			})
			.state('app.login', {
				url: '/login',
				views: {
					wrapper: {
						templateUrl: 'pages/login/login.html',
						controller: 'loginController',
						controllerAs: 'vm'
					}
				}
			})
			.state('app.home', {
				url: '/home',
				views: {
					wrapper: {
						templateUrl: 'pages/home/index.html',
						controller: 'homeController',
						controllerAs: 'vm'
					}
				}
			});
		$urlRouterProvider.otherwise('/login');
		$locationProvider.hashPrefix('!');
	});
