var app1= angular.module('app1',[]);
//$scope see dependecy injection
app1.controller('ctrl1',function($scope){//this function is called as factory function which gets the controller ready to use
    $scope.first=1;
    $scope.second=1;

    $scope.updateValue = function(){
        $scope.calculation=$scope.first + '+' + $scope.second + '=' +(+$scope.first + +$scope.second);
    };
});
