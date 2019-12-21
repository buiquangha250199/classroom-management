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

function EditSubjectController($scope, $location, CallApiService, $rootScope) {
	let self = this;

	CallApiService.Get('http://localhost:3000/admin/course/list', function (res) {
		if (res.status == 200) {
			self.listCourse = res.data;
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

	CallApiService.Get('http://localhost:3000/admin/semester/current', function (res) {
		if (res.status == 200) {
			self.currentSemester = res.data;
			self.semesterName = self.currentSemester.SemesterName;
			self.IDSemester = self.currentSemester.IDSemester;
		} else {
			console.log(res.status);
		}
	});

	self.getCourseInfo = function () {
		for(let i = 0; i<self.listCourse.length; i++) {
			if(self.Course == self.listCourse[i].IDCourse) {
				self.CourseName = self.listCourse[i].CourseName;
				self.SubjectName = self.listCourse[i].SubjectName;
				self.TotalStudent = self.listCourse[i].TotalStudent;
				self.Note = self.listCourse[i].Note;
				self.IDSemester = self.listCourse[i].IDSemester;
				self.IDLecturer = self.listCourse[i].IDLecturer;
			}
			// console.log(self.Course);
			// console.log(self.CourseName);
			// console.log(self.SubjectName);
			// console.log(self.TotalStudent);
			// console.log(self.Note);
			// console.log(self.IDSemester);
			// console.log(self.IDLecturer);

			for(let i = 0; i< self.listLecturer.length; i++) {
				if(self.IDLecturer == self.listLecturer[i].IDLecturer) {
					self.lecturerName = self.listLecturer[i].Name;
				}
			}

		}
	}

	self.editCourse = function () {
		let data = {
			"CourseName" : self.CourseName,
			"SubjectName" : self.SubjectName,
			"IDLecturer": self.IDLecturer,
			"IDSemester": self.IDSemester,
			"TotalStudent": self.TotalStudent,
			"Note": self.Note,
			"IDCourse": Number(self.Course)
		};

		CallApiService.Put("http://localhost:3000/admin/course/edit", data, function (res) {
			console.log(data);
			console.log(res);
			if (res.status == 200) {
				self.message = "Thao tác thành công!";
				self.typeMessage = "success";
    			setTimeout(function(){ location.reload(); }, 1000);
    		} else {
    			self.message = "Thao tác thất bại!";
    			self.typeMessage = "danger";
    		}
    	})
	}




}