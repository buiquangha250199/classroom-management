const componentName = "lecturerInterface";
module.exports = componentName;

const service = require('../app-service');

angular.module(componentName, ['ngRoute', service])
  .component("lecturerInterface", {
    controller: LecturerInterface,
    controllerAs: "self",
    template: require("./template.html"),
    style: require("./style.css")
  });

function LecturerInterface($scope, $location, AuthenticationService, $rootScope) {
    let self = this;

    

}