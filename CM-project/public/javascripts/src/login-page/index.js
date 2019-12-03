const componentName = "loginPage";
module.exports = componentName;

const service = require('../app-service');

angular.module(componentName, ['ngRoute', service])
  .component("loginPage", {
    controller: LoginController,
    controllerAs: "self",
    template: require("./template.html"),
    style: require("./style.css")
  });

function LoginController($scope, $location, AuthenticationService, $rootScope) {

    let self = this;

    console.log('LoginController');

    $rootScope.turnOffMenu = true;

    console.log($rootScope.turnOffMenu);
    

}