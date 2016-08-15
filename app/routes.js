app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    // For any unmatched url, redirect to /page1
    $urlRouterProvider.otherwise("/page1");
    // Now set up the states
    $stateProvider
        .state('page1', {
            url: '/page1',
            templateUrl: 'page1/page1.html',
            controller: 'Page1Controller'
        })
        .state('page2', {
            url: '/page2',
            templateUrl: 'page2/page2.html',
            controller: 'Page2Controller'
        });
}]);

app.run(['$rootScope', '$cookies', '$location', function ($rootScope, $cookies, $location) {
    $rootScope.$on('$stateChangeStart', function (event, toState, fromState) {
        console.log(toState.name);
    });
}]);
