const moduleName = "appService";
module.exports = moduleName;

angular.module(moduleName, [])
.factory('CallApiService', ['$http', '$rootScope', function ($http, $rootScope) {

    var service = {};

    service.Post = function (_url, _data, callback) {

        var req = {
            method: 'POST',
            url: _url,
            headers: {
                'Content-Type': 'application/json'
            },
            data: _data
        }

        $http(req).then(function (res) {
            callback(res);

        }, function (res) {
            console.log(res);
        }); 

    }

    service.Get = function (_url, callback) {
        var req = {
            method: 'GET',
            url: _url,
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            }   
        }
        $http(req).then(function (res) {
            callback(res);

        }, function (res) {
            console.log(res);
        }); 
       
    }

    service.Put = function (_url, _data, callback) {
        var req = {
            method: 'PUT',
            url: _url,
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
            },
            data: _data
        }
        $http(req).then(function (res) {
            callback(res);

        }, function (res) {
            console.log(res);
        }); 
       
    }

    service.Delete = function (_url, _data, callback) {
        var req = {
            method: 'DELETE',
            url: _url,
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
            },
            data: _data
        }
        $http(req).then(function (res) {
            callback(res);

        }, function (res) {
            console.log(res);
        }); 
       
    }

    return service;
    
}])

.service('fileUpload', ['$http', function ($http) {
        this.uploadFileToUrl = function(file, uploadUrl){
           var fd = new FormData();
           fd.append('file', file);
           $http.post(uploadUrl, fd, {
              transformRequest: angular.identity,
              headers: {'Content-Type': undefined},
              data: {
                'model':'room'
              }
           })
           .success(function(){
           })
           .error(function(){
           });
        }
     }])

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

    service.Get = function (_url, callback) {
        var req = {
            method: 'GET',
            url: _url,
            headers: {
                'Content-Type': 'application/json'
            }   
        }
        $http(req).then(function (res) {
            callback(res);

        }, function (res) {
            console.log(res);
        }); 
       
    }

    return service;
    
}])
.config(function($routeProvider, $locationProvider) {  

    $routeProvider
    .when("/admin/dashboard", {
        template : '<dashboard-page></dashboard-page>'
    })
    .when("/admin/account", {
        template : '<admin-account></admin-account>'
    })
    .when("/admin/room/new", {
        template : '<new-room></new-room>'
    })
    .when("/admin/room/edit", {
        template : '<edit-room></edit-room>'
    })
    .when("/admin/room/delete", {
        template : '<delete-room></delete-room>'
    })
    .when("/admin/subject/new", {
        template : '<new-subject></new-subject>'
    })
    .when("/admin/subject/edit", {
        template : '<edit-subject></edit-subject>'
    })
    .when("/admin/subject/delete", {
        template : '<delete-subject></delete-subject>'
    })
    .when("/admin/room/use", {
        template : '<room-details></room-details>'
    })
    .when("/admin/timetable/new", {
        template : '<new-timetable></new-timetable>'
    })
    .when("/admin/timetable/delete", {
        template : '<delete-timetable></delete-timetable>'
    })
    .when("/admin/data/upload", {
        template : '<upload-data></upload-data>'
    })

    .otherwise({ redirectTo: "/admin/dashboard" });
})

.run(['$rootScope', '$location', '$http',
    function ($rootScope, $location, $http) {

        

    }]);