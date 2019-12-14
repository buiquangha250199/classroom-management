const componentName = "dashboardPage";
module.exports = componentName;

const service = require('../app-service/index.js');

angular.module(componentName, ['ngRoute', service])
  .component("dashboardPage", {
    controller: DashboardController,
    controllerAs: "self",
    template: require("./template.html"),
    style: require("./style.css")
  });

function DashboardController($http, $scope, $location, AuthenticationService, $rootScope) {
    let self = this;

    let req = {
        method: 'GET',
        url: 'http://localhost:3000/admin/totalClass',
        headers: {
            'Content-Type': 'application/json'
        }
    } 

    let platforms = [];

    $http(req).then(function (res) {

        console.log(res.data);

    }, function (res) {
        console.log(res.data);
    });

    
}

    

