const componentName = "deleteSubject";
module.exports = componentName;

const service = require('../app-service/index.js');

angular.module(componentName, ['ngRoute', service])
  .component("deleteSubject", {
    controller: DeleteSubjectController,
    controllerAs: "self",
    template: require("./template.html"),
    style: require("./style.css")
  });

function DeleteSubjectController($scope, $location, AuthenticationService, $rootScope) {
    let self = this;

    

    

}