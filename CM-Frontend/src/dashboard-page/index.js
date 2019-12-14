const componentName = "dashboardPage";
module.exports = componentName;

const service = require('../app-service/index.js');

angular.module(componentName, ['ngRoute', service])
.component("dashboardPage", {
	controller: DashboardController,
	controllerAs: "self",
	template: require("./template.html"),
	style: require("./style.css")
});

function DashboardController($http, $scope, $location, CallApiService, $rootScope) {
	let self = this;

	CallApiService.Get('http://localhost:3000/admin/totalRoom', function (res) {
		if (res.status == 200) {
			self.totalRoom = res.data;
		} else {
			console.log(res.status);

		}
	});

	CallApiService.Get('http://localhost:3000/admin/totalCourse', function (res) {
		if (res.status == 200) {
			self.totalCourse = res.data;
		} else {
			console.log(res.status);
		}
	});

	CallApiService.Get('http://localhost:3000/admin/totalLecturer', function (res) {
		if (res.status == 200) {
			self.totalLecturer = res.data;
		} else {
			console.log(res.status);
		}
	});

	CallApiService.Get('http://localhost:3000/admin/totalStudent', function (res) {
		if (res.status == 200) {
			self.totalStudent = res.data;
		} else {
			console.log(res.status);
		}
	});

	CallApiService.Get('http://localhost:3000/admin/room/list', function (res) {
		if (res.status == 200) {
			self.listRoom = res.data;
		} else {
			console.log(res.status);
		}
	});

	CallApiService.Get('http://localhost:3000/admin/lecturer/list', function (res) {
		if (res.status == 200) {
			self.listLecturer = res.data;
		} else {
			console.log(res.status);
		}
	});

	CallApiService.Get('http://localhost:3000/admin/course/list', function (res) {
		if (res.status == 200) {
			self.listCourse = res.data;
		} else {
			console.log(res.status);
		}
	});


}



