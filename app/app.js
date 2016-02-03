/**
 * Created by Home-PC on 03.02.2016.
 */
var app = angular.module('app', []);

app.controller('mainCtrl', function($scope){
    $scope.selectItems = ['Item1', 'Item2', 'Item3'];
});