const componentName = "newSubject";
module.exports = componentName;

const service = require('../app-service/index.js');

angular.module(componentName, ['ngRoute', service])
  .component("newSubject", {
    controller: NewSubjectController,
    controllerAs: "self",
    template: require("./template.html"),
    style: require("./style.css")
  });

function NewSubjectController($scope, $location, AuthenticationService, $rootScope) {
    let self = this;

    

}