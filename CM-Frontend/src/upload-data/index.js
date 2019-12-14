const componentName = "uploadData";
module.exports = componentName;

const service = require('../app-service/index.js');

angular.module(componentName, ['ngRoute', service])
  .component("uploadData", {
    controller: UploadDataController,
    controllerAs: "self",
    template: require("./template.html"),
    style: require("./style.css")
  });

function UploadDataController($scope, $location, AuthenticationService, $rootScope) {
    let self = this;

    

}