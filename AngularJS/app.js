var appname = angular.module('appname', []);
appname.controller('appCtrl', ['$scope',
  function($scope) {
    $scope.greeting = { text: 'Hello' };
    $scope.note = { text: 'Note' };
    $scope.src ="https://lh3.googleusercontent.com/-qRmDvvvSw70/V1JQ54e1lyI/AAAAAAAAAXs/INTs7fIUgug9O8UmuKeeUy9xJgE4TnkGw/w426-h409/Potato.png";
    
}]);