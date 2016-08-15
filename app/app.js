var app = angular.module('SeedApp', ['ngResource', 'ngCookies', 'ui.router', 'ui.bootstrap', 'ngMask']);

app.service('PageService', function ($http) {

});

app.controller('Page1Controller', function (PageService, $scope) {
    $scope.value = 'Hello Page 1';
});

app.controller('Page2Controller', function (PageService, $scope) {
    $scope.value = 'Hello Page 2';
});
