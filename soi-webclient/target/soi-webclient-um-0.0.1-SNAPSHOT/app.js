'use strict';

// Soi UserManagement modules
angular.module('Login', []);
angular.module('Home', []);
angular.module('UserAdmin', []);


angular.module('soiPortal', [
    'Login',
    'Home',
    'UserAdmin',
    'ngRoute',
    'ngCookies'
])
 
.config(['$routeProvider', function ($routeProvider) {

    $routeProvider
        .when('/login', {
            controller: 'LoginController',
            templateUrl: 'modules/login/partials/login.html',
            hideMenus: true
        })
 
        .when('/dashboard', {
            controller: 'HomeController',
            templateUrl: 'tiles/template.html'
        })
        
        .when('/userAdmin',{
    		controller: 'UserAdminController',
    		templateUrl: 'modules/userAdmin/partials/user-admin.html'
        })
        	
        .when('/userAdmin/allUsers', {
        	controller: 'UserAdminController',
    		templateUrl: 'modules/userAdmin/partials/allUsers.html'
        })
         .when('/userAdmin/backupAdmin', {
        	controller: 'UserAdminController',
    		templateUrl: 'modules/userAdmin/partials/backupAdmin.html'
        })
        
 
        .otherwise({ redirectTo: '/login' });
}])
 
.run(['$rootScope', '$location', '$cookieStore', '$http',
    function ($rootScope, $location, $cookieStore, $http) {
        // keep user logged in after page refresh
        $rootScope.globals = $cookieStore.get('globals') || {};
        if ($rootScope.globals.currentUser) {
            $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
        }
 
        $rootScope.$on('$locationChangeStart', function (event, next, current) {
            // redirect to login page if not logged in
            if ($location.path() !== '/login' && !$rootScope.globals.currentUser) {
                $location.path('/login');
            }
        });
    }]);
	

