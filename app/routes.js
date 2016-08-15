app.config(function ($stateProvider, $urlRouterProvider) {
    //
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/page1");
    //
    // Now set up the states
    $stateProvider
        .state('page1', {
            url: '/page1',
            templateUrl: 'pages/page1.html',
            controller: 'Page1Controller'
        })
        .state('page2', {
            url: '/page2',
            templateUrl: 'pages/page2.html',
            controller: 'Page2Controller'
        });
});
