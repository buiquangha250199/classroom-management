const componentName = "timetableMan";
module.exports = componentName;

const service = require('../app-service/index.js');

angular.module(componentName, ['ngRoute', service])
  .component("timetableMan", {
    controller: TimetableManController,
    controllerAs: "self",
    template: require("./template.html"),
    style: require("./style.css")
  });

function TimetableManController($scope, $location, AuthenticationService, $rootScope) {
    

}