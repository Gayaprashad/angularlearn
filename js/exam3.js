
var app3=angular.module('app3',[]);
app3.controller('gListCtrl',function($scope){
$scope.groceries=[
 {item:"Tomatoes",purchased:false},
 {item:"Bread",purchased:false},
 {item:"Potatoes",purchased:false},
 {item:"Apple",purchased:false},
];

$scope.getList=function(){
    return $scope.showList ? "ulgrocerylist.html" : "grocerylist.html";
}
});
