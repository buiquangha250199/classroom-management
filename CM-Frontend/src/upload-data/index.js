const componentName = "uploadData";
module.exports = componentName;

const service = require('../app-service/index.js');

angular.module(componentName, ['ngRoute', service])
  .component("uploadData", {
    controller: UploadDataController,
    controllerAs: "self",
    template: require("./template.html"),
    style: require("./style.css")
  })
	.directive('fileModel', ['$parse', function ($parse) {
        return {
           restrict: 'A',
           link: function(scope, element, attrs) {
              var model = $parse(attrs.fileModel);
              var modelSetter = model.assign;
              element.bind('change', function(){
                 scope.$apply(function(){
                    modelSetter(scope, element[0].files[0]);
                 });
              });
           }
        };
     }]);

function UploadDataController($scope, $location, CallApiService , $rootScope) {
    let self = this;

    self.upload = function(){

          
           
        };

        

    

}