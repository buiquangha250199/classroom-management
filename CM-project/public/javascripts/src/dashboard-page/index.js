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

function DashboardController($scope, $location, AuthenticationService, $rootScope) {
    let self = this;

    

}