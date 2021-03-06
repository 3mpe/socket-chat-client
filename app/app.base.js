angular
	.module('socket-chat', ['ui.router', 'angular-toasty', 'hSweetAlert', 'LocalStorageModule', 'btford.socket-io'])

	/**
	 * Config value
	 */
	.value('Config', {
		userkey: 'chat-user',
		sessionkey: 'chat-sess',
		api: {
			url: '/api',
		}
	})

/**
 * DİRECTİVES
 */
.directive('loadingIndicator', function (Static) {
	return {
		scope: { indicator: '=' },
		restrict: 'E',
		template: '<span class="loading-indicator" data-ng-show="isShow"><i class="icon"></i><ng-transclude class="message"></ng-transclude></span>',
		transclude: true,
		replace: true,
		link: function (scope, element, attrs) {
			scope.$watch('indicator', function (newVal) {
				if (angular.isDefined(newVal)) { scope.isShow = newVal; }
			});
		}
	};
});
