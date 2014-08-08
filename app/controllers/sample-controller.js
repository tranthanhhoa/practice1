define(['./controllers'],function(controllers){
	'use strict';
	controllers.controller("MainCtrl",function($scope,sampleService){
		$scope.directiveData1 = "This is data 1";
		$scope.directiveData2 = "This is data 2";
		$scope.simpleChartData = "This is a sampleChartData";
		sampleService.getData().then(function(data){
			$scope.dataService = data;
		})
	})
})