/**
 * Created by xiejiao on 16/10/28.
 */
var m1 = angular.module('myApp',['ngRoute']);
m1.config(['$routeProvider',function($routeProvider){
	$routeProvider
		.when('/create',{
			templateUrl: 'first.html'
		})
		.when('/first/:pro',{
			templateUrl: 'second.html',
			controller: 'proController'
		})
}]);
m1.controller('proController',['$scope',function($scope){
	$scope.pros = [
		{
			'id':1,
			'age':2
		},{
			'id':2,
			'age':2
		},{
			'id':3,
			'age':2
		}
	];
	$scope.apps = [
		{
			'name':'演示应用',
			'id':'380-1',
			'soft':'andorid',
			'action':'管理',
			'type': '休闲娱乐'
		},
		{
			'name':'演示应用2',
			'id':'380-2',
			'soft':'ios',
			'action':'管理',
			'type': '休闲娱乐'
		},{
			'name':'演示应用',
			'id':'380-1',
			'soft':'andorid',
			'action':'管理',
			'type': '休闲娱乐'
		}
	];
	$scope.types = [
		{
			name: '休闲娱乐'
		},
		{
			name: '休闲娱乐2'
		},
		{
			name: '休闲娱乐3'
		},
		{
			name: '休闲娱乐4'
		},
	];
	$scope.myShow = true;
	$scope.save = function(){
		var obj  = {};
		obj.type = $scope.myType.name;
		obj.name = $scope.myName;
		$scope.apps.push(obj);
		$scope.myShow = true;
	}
}]);