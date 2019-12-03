const componentName = "listSubject";
module.exports = componentName;

const service = require('../app-service');

angular.module(componentName, ['ngRoute', service])
  .component("listSubject", {
    controller: ListSubjectController,
    controllerAs: "self",
    template: require("./template.html"),
    style: require("./style.css")
  });

function ListSubjectController($scope, $location, AuthenticationService, $rootScope) {
    

}