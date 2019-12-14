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

function NewSubjectController($scope, $location, CallApiService, $rootScope) {
    let self = this;

    CallApiService.Get('http://localhost:3000/admin/lecturer/list', function (res) {
		if (res.status == 200) {
			self.listLecturer = res.data;
		} else {
			console.log(res.status);
		}
	});

	let newCourse = {

	}

	self.createNewCourse = function (data) {
		CallApiService.Post('http://localhost:3000/admin/course/new', data, function (res) {
		if (res.status == 200) {
			self.listLecturer = res.data;
		} else {
			console.log(res.status);
		}
	});
	}
	



}