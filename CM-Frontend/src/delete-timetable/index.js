const componentName = "deleteTimetable";
module.exports = componentName;

const service = require('../app-service/index.js');

angular.module(componentName, ['ngRoute', service])
  .component("deleteTimetable", {
    controller: deleteTimetableController,
    controllerAs: "self",
    template: require("./template.html"),
    style: require("./style.css")
  });

function deleteTimetableController($scope, $location, CallApiService, $rootScope) {

	let self = this;

	CallApiService.Get('http://localhost:3000/admin/timeslot/list', function (res) {
		if (res.status == 200) {
			self.listTimeslot = res.data;
			//console.log(self.listTimeslot);
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

	self.getRoom = function () {
		for(let i = 0; i< self.listRoom.length; i++) {
			if(self.listRoom[i].RoomName == self.RoomName) {
				
				self.IDRoom = self.listRoom[i].IDRoom;
			}
		}

		// console.log(r);
	}

	self.getInfo = function () {

		for(let i =0; i<self.listTimeslot.length; i++) {
			if(self.listTimeslot[i].CourseName == self.CourseName) {
				self.timeslots = self.listTimeslot[i].TimeSlots;
				self.IDCourse = self.listTimeslot[i].IDCourse;
				self.IDRoom = self.listTimeslot[i].IDRoom;
			}
		}

		 console.log(self.timeslots);
		//console.log(self.IDRoom);

		self.slotArr = [];

		for(let i =0; i<self.timeslots.length; i++) {
			if(self.IDCourse == self.timeslots[i].IDCourse) {
				self.slotArr.push(self.timeslots[i].Period);
				self.day = self.timeslots[i].Day;
				self.IDRoom = self.timeslots[i].IDRoom;
			}
		}	

		// for(let i = 0; i< self.listRoom.length; i++) {
		// 	if(self.listRoom[i].IDRoom == self.IDRoom) {
				
		// 		self.RoomName = self.listRoom[i].RoomName;
		// 	}
		// }

		//console.log(self.RoomName);
	

	}

	self.getPeriod = function () {

		self.tietbd = undefined;
		self.tietkt = undefined;
		self.RoomName = undefined;

		if(self.thu == self.day) {
			self.tietbd = self.slotArr[0];
			self.tietkt = self.slotArr[self.slotArr.length-1];


		for(let i = 0; i< self.listRoom.length; i++) {
			if(self.listRoom[i].IDRoom == self.IDRoom) {
				
				self.RoomName = self.listRoom[i].RoomName;
			}
		}

		}
		 
	}

	self.deleteTimeslot = function () {
		let data = {
			"kyhoc": self.semester,
			"tietbd": self.tietbd,
			"tietkt": self.tietkt,
			"thu": self.thu,
			"phong": self.IDRoom,
			"lop":self.IDCourse
		}

		console.log(data);

		CallApiService.Delete("http://localhost:3000/admin/timeslot/delete", data, function (res) {
			//console.log(data);
			//console.log(res);
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