const componentName = "deleteRoom";
module.exports = componentName;

const service = require('../app-service/index.js');

angular.module(componentName, ['ngRoute', service])
  .component("deleteRoom", {
    controller: DeleteRoomController,
    controllerAs: "self",
    template: require("./template.html"),
    style: require("./style.css")
  });

function DeleteRoomController($scope, $location, AuthenticationService, $rootScope) {
    let self = this;

    

}