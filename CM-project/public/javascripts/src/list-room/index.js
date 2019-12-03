const componentName = "listRoom";
module.exports = componentName;

const service = require('../app-service');

angular.module(componentName, ['ngRoute', service])
  .component("listRoom", {
    controller: ListRoomController,
    controllerAs: "self",
    template: require("./template.html"),
    style: require("./style.css")
  });

function ListRoomController($scope, $location, AuthenticationService, $rootScope) {
    

}