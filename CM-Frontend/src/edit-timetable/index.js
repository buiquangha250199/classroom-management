const componentName = "editTimetable";
module.exports = componentName;

const service = require('../app-service/index.js');

angular.module(componentName, ['ngRoute', service])
  .component("editTimetable", {
    controller: EditTimetableController,
    controllerAs: "self",
    template: require("./template.html"),
    style: require("./style.css")
  });

function EditTimetableController($scope, $location, CallApiService, $rootScope) {

	let self = this;

	CallApiService.Get('http://localhost:3000/admin/timeslot/list', function (res) {
		if (res.status == 200) {
			self.listTimeslot = res.data;
			console.log(self.listTimeslot);
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

	CallApiService.Get('http://localhost:3000/admin/semester/list', function (res) {
		if (res.status == 200) {
			self.listSemester = res.data;
			self.semester = self.listSemester[1].IDSemester;
			self.semesterName = self.listSemester[1].SemesterName;
		} else {
			console.log(res.status);
		}
	});

	self.getRoomName = function (r) {
		for(let i = 0; i< self.listRoom.length; i++) {
			if(self.listRoom[i].IDRoom == r) {
				self.id = r;
				self.name = self.listRoom[i].RoomName;
			}
		}

		// console.log(r);
	}

	self.getInfo = function () {
		self.days = [[],[],[],[],[],[],[],[]];
		self.thu = [];
		self.tietbd = undefined;
		self.tietkt = undefined;

		for(let i =0; i<self.listTimeslot.length; i++) {
			if(self.listTimeslot[i].CourseName == self.CourseName) {
				self.timeslots = self.listTimeslot[i].TimeSlots;
				self.IDCourse = self.listTimeslot[i].IDCourse;
			}
		}

		for(let i =0; i<self.timeslots.length; i++) {
			self.days[self.timeslots[i].Day].push(self.timeslots[i].Period);
		}

		console.log(self.timeslots);

		for(let i = 0; i<self.days.length; i++) {
			if(self.days[i].length != 0) self.thu.push(i);
		}

		console.log(self.thu);

	}

	self.getPeriod = function () {
		self.tietbd = Math.min(...self.days[self.day]);
		self.tietkt = Math.max(...self.days[self.day]);

		for(let i =0; i<self.timeslots.length; i++) {
			if(self.day == self.timeslots[i].Day) self.IDRoom = self.timeslots[i].IDRoom;
		}

		for(let i =0; i<self.listRoom.length; i++) {
			if(self.IDRoom == self.listRoom[i].IDRoom) self.RoomName = self.listRoom[i].RoomName;
		}
	}

	self.editTimeslot = function () {
		let data = {
			"tietbd": self.tietbd,
			"tietkt": self.tietkt,
			"kyhoc": self.semester,
			"thu": self.day,
			"phong": self.IDRoom,
			"lop":self.IDCourse
		}

		CallApiService.Put("http://localhost:3000/admin/timeslot/edit", data, function (res) {
			console.log(data);
			console.log(res);
			if (res.status == 200) {
				self.message = "Thao tác thành công!";
				self.typeMessage = "success";
    			//setTimeout(function(){ location.reload(); }, 1000);
    		} else {
    			self.message = "Thao tác thất bại!";
    			self.typeMessage = "danger";
    		}
    	})
	}

    

}