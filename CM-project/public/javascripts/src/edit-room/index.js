const componentName = "editRoom";
module.exports = componentName;

const service = require('../app-service');

angular.module(componentName, ['ngRoute', service])
  .component("editRoom", {
    controller: EditRoomController,
    controllerAs: "self",
    template: require("./template.html"),
    style: require("./style.css")
  });

function EditRoomController($scope, $location, AuthenticationService, $rootScope) {
    

}