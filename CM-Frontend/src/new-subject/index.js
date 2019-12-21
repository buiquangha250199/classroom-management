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

	CallApiService.Get('http://localhost:3000/admin/semester/current', function (res) {
		if (res.status == 200) {
			self.currentSemester = res.data;
			self.semesterName = self.currentSemester.SemesterName;
			self.IDSemester = self.currentSemester.IDSemester;
		} else {
			console.log(res.status);
		}
	});

	self.getInfoLecturer = function () {
		for(let i = 0; i< self.listLecturer.length; i++) {
			if(self.listLecturer[i].Name === self.lecturer) {
				self.IDLecturer = self.listLecturer[i].IDLecturer;
			}
		}

		console.log(self.IDLecturer);
	}

	self.createNewCourse = function (argument) {

		let data = {
			CourseName: self.courseName, 
			SubjectName: self.subjectName, 
			Lecturer: self.IDLecturer,
			Semester: self.semester,
			TotalStudent: self.totalStudent,
			Note: self.note
		}
		console.log(data);

		CallApiService.Post('http://localhost:3000/admin/course/new', data, function (res) {
			if (res.status == 200) {
				self.message = "Thao tác thành công!";
				self.typeMessage = "success";
				console.log(res);
				setTimeout(function(){ location.reload(); }, 500);
			} else {
				console.log(res.status);
			}
		});
	}
	



}