const componentName = "newRoom";
module.exports = componentName;

const service = require('../app-service');

angular.module(componentName, ['ngRoute', service])
  .component("newRoom", {
    controller: NewRoomController,
    controllerAs: "self",
    template: require("./template.html"),
    style: require("./style.css")
  });

function NewRoomController($scope, $location, AuthenticationService, $rootScope) {
    

}