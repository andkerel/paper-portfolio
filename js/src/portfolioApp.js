//init module
var portfolioApp = angular.module('portfolioApp', ['ngRoute']);

//init controller
var PortCtrl = function($scope, $http, portfolioData, $filter) {
    $scope.portfolio = portfolioData.data;
    $scope.codeList = portfolioData.allCodeTypes;
    $scope.isEmpty = emptyFilter();
};

//controller to module
portfolioApp.controller("PortCtrl", PortCtrl);

//emptyFilter to module
portfolioApp.filter("emptyFilter", emptyFilter);