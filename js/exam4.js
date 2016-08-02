var app4 = angular.module('app4', []);

app4.controller('eventCtrl', function($scope){
    $scope.dayTimeButton=true;

    $scope.capitals=[{city:'chennai' , state:'tamilnadu'} ,{city:'lucknow',state:'Uttar pradesh'}];
});
