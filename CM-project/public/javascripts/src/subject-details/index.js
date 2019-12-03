const componentName = "subjectDetails";
module.exports = componentName;

const service = require('../app-service');

angular.module(componentName, ['ngRoute', service])
  .component("subjectDetails", {
    controller: SubjectDetailsController,
    controllerAs: "self",
    template: require("./template.html"),
    style: require("./style.css")
  });

function SubjectDetailsController($scope, $location, AuthenticationService, $rootScope) {
    

}