'use strict';

angular
		.module('UserAdmin', [])
		.controller(
				'UserAdminController',
				function($scope, $http) {

					$scope.view = true;
					$scope.tile = true;
					$scope.sidebarview = true;
					$scope.sidebartile = true;
					$scope.message = "This page will be used to display add student form";

					/* $http.get('tree.json')
					 .then(function(res){
					    $scope.roles = res.data;                
					  });*/

					$scope.roles =

					[ {
						label : 'All Users'
					}, {
						label : 'Backup Administrators'
					}, {
						label : 'Super Users'
					}, {
						label : 'System Administrators'
					}, {
						label : 'Telco Administrators'
					}, {
						label : 'Telco Operators'
					}, {
						label : 'User Administrators'
					} ]
					$scope.users = [ {
						label : 'esagark'
					}, {
						label : 'edivya'
					}, {
						label : 'emanoran'
					} ]

					/*For Nav Bar*/
					$scope.getInclude = function() {
						console.log("getInclude method called.");
						if ($scope.view == true) {
							if ($scope.tile == true) {
								return "tiles/tiles.html";
							}
						}
					};
					/*For Side Nav Bar*/
					$scope.getSidebar = function() {
						console.log("getSidebar method called.");
						if ($scope.sidebarview == true) {
							if ($scope.sidebartile == true) {
								return "tiles/template.html";
							}
						}
					};
				});