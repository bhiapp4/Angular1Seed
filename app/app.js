var app = angular.module('SeedApp',[]);

app.service('seedService',function($http){
    
});

app.controller('seedController',function(seedService, $scope){
    $scope.value = 'Hello Angular 1';
});