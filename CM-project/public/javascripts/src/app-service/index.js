const moduleName = "appService";
module.exports = moduleName;

angular.module(moduleName, [])
.factory('AuthenticationService', ['$http', '$rootScope', function ($http, $rootScope) {

    var service = {};

    service.Login = function (username, password, callback) {

        console.log('login service works.');

        var req = {
            method: 'POST',
            url: 'https://fb-members.sellpro.vn/api/v1/accounts/login',
            headers: {
                'Content-Type': 'application/json'
            },
            data: {
                'user_name': username,
                'password' : password
            }
        }

        $http(req).then(function (res) {
            callback(res);

        }, function (res) {
            $scope.res = res.status;
            console.log($scope.res);
        }); 

    }

    service.Register = function (username, password, email, callback) {

        var req = {
            method: 'POST',
            url: 'https://fb-members.sellpro.vn/api/v1/accounts/register',
            headers: {
                'Content-Type': 'application/json'
            },
            data: {
                'user_name': username,
                'password' : password,
                'email'    : email
            }
        }

        $http(req).then(function (res) {
            callback(res);

        }, function (res) {
            $scope.res = res.status;
            console.log($scope.res);
        }); 

    }

    return service;
    
}])
.config(function($routeProvider, $locationProvider) {  

    $routeProvider
    .when("/login", {
        template : '<login-page></login-page>'
    })
    .when("/admin/dashboard", {
        template : '<dashboard-page></dashboard-page>'
    })
    .when("/admin/subject/list", {
        template : '<list-subject></list-subject>'
    })
    .when("/admin/subject/details", {
        template : '<subject-details></subject-details>'
    })
    .when("/admin/room/list", {
        template : '<list-room></list-room>'
    })
    .when("/admin/room/new", {
        template : '<new-room></new-room>'
    })
    .when("/admin/room/edit", {
        template : '<edit-room></edit-room>'
    })
    .when("/admin/timetable", {
        template : '<timetable-man></timetable-man>'
    })
    .when("/lecturer", {
        template : '<lecturer-interface></lecturer-interface>'
    })
    .when("/student", {
        template : '<student-interface></student-interface>'
    })

    .otherwise({ redirectTo: '/login' });
})

.run(['$rootScope', '$location', '$http',
    function ($rootScope, $location, $http) {

        

        if (
                $location.path() === "/login" || 
                $location.path() === "/lecturer" || 
                $location.path() === "/student" 
                )
            {
                $rootScope.turnOffMenu = true;
            } else {
                $rootScope.turnOffMenu = false;
            }

        $rootScope.$on('$locationChangeStart', function (event, next, current) {
            

           

        });
    }]);