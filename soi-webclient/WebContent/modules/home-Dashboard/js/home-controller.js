'use strict';
 
angular.module('Home')
 
.controller('HomeController',
    ['$scope','$rootScope','$location',
    function ($scope, $rootScope, $location) {
    	
    	$scope.view = true;
    	$scope.tile = true;
    	$scope.sidebarview = true;
    	$scope.sidebartile = true;
    	
    	/*$scope.loadUserAdmin = function(){
    		$location.path('$rootScope/userAdmin');
    	};*/
    	
    	
    	 /*For Page Redirecting*/
		 $scope.getInclude = function(){
				console.log( "getInclude method called ");
				if($scope.view==true){
					if($scope.tile==true){
						return "tiles/tiles.html";
					}
				}				
			};
			
			$scope.getSidebar = function(){
	    		 console.log( "getSidebar method called.");
	    		 if($scope.sidebarview==true){
						if($scope.sidebartile==true){
							return "tiles/template.html";
						}
					}
	    		 
	    	 };
      
    }]);