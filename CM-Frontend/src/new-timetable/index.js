const componentName = "newTimetable";
module.exports = componentName;

const service = require('../app-service/index.js');

angular.module(componentName, ['ngRoute', service])
  .component("newTimetable", {
    controller: NewTimetableController,
    controllerAs: "self",
    template: require("./template.html"),
    style: require("./style.css")
  });

function NewTimetableController($scope, $location, CallApiService, $rootScope) {

	let self = this;

	self.slot = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];

	self.sort = function(keyname){
		self.sortKey = keyname;   //set the sortKey to the param passed
		self.reverse = !self.reverse; //if true make it false and vice versa
	}

	CallApiService.Get('http://localhost:3000/admin/semester/current', function (res) {
		if (res.status == 200) {
			self.currentSemester = res.data;
			self.semesterName = self.currentSemester.SemesterName;
			self.IDSemester = self.currentSemester.IDSemester;
		} else {
			console.log(res.status);
		}
	});

	CallApiService.Get('http://localhost:3000/admin/totalRoom', function (res) {
		if (res.status == 200) {
			self.totalRoom = res.data;
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

	CallApiService.Get('http://localhost:3000/admin/timeslot/list', function (res) {
		if (res.status == 200) {
			self.listTimeslot = res.data;
			//console.log(self.listTimeslot);
		} else {
			console.log(res.status);
		}
	});

	self.getCourseInfo = function () {
		for(let i =0; i<self.listTimeslot.length; i++) {
			if(self.IDCourse == self.listTimeslot[i].IDCourse) {
				self.IDSemeter = self.listTimeslot[i].IDSemester;
				self.CourseName = self.listTimeslot[i].CourseName;
				self.LecturerName = self.listTimeslot[i].Lecturer.Name;
			}
		}
	}


	self.addTimeslot = function () {
		let data = {
			tietbd: self.tietbd,
			tietkt: self.tietkt,
            kyhoc: self.IDSemeter,
            thu: self.day,
            phong: self.IDRoom,
            lop: self.IDCourse
        }

     	console.log(data);

     	CallApiService.Post('http://localhost:3000/admin/timeslot/new', data, function (res) {
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