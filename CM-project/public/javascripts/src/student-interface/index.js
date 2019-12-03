const componentName = "studentInterface";
module.exports = componentName;

const service = require('../app-service');

angular.module(componentName, ['ngRoute', service])
  .component("studentInterface", {
    controller: StudentInterface,
    controllerAs: "self",
    template: require("./template.html"),
    style: require("./style.css")
  });

function StudentInterface($scope, $location, AuthenticationService, $rootScope) {

	let self = this;

 
    

}