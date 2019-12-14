const componentName = "editSubject";
module.exports = componentName;

const service = require('../app-service/index.js');

angular.module(componentName, ['ngRoute', service])
  .component("editSubject", {
    controller: EditSubjectController,
    controllerAs: "self",
    template: require("./template.html"),
    style: require("./style.css")
  });

function EditSubjectController($scope, $location, AuthenticationService, $rootScope) {
    let self = this;

    

}