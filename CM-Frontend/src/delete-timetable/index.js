const componentName = "deleteTimetable";
module.exports = componentName;

const service = require('../app-service/index.js');

angular.module(componentName, ['ngRoute', service])
  .component("deleteTimetable", {
    controller: DeleteTimetableController,
    controllerAs: "self",
    template: require("./template.html"),
    style: require("./style.css")
  });

function DeleteTimetableController($scope, $location, CallApiService, $rootScope) {

	let self = this;

	self.slot = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];

	self.sort = function(keyname){
		self.sortKey = keyname;   //set the sortKey to the param passed
		self.reverse = !self.reverse; //if true make it false and vice versa
	}

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
			console.log(self.listTimeslot);
		} else {
			console.log(res.status);
		}
	});

	self.getInfo = function (_IDCourse, _IDSemester) {
		self.IDCourse = _IDCourse;
		self.IDSemeter = _IDSemester;
	}

	self.addTimeslot = function () {
		let data = {
			tietbd: self.tietbd,
			tietkt: self.tietkt,
            kyhoc: self.IDSemeter,
            thu: self.thu,
            phong: self.IDRoom,
            lop: self.IDCourse
        }

     	console.log(data);

     	CallApiService.Post('http://localhost:3000/admin/timeslot/new', data, function (res) {
			if (res.status == 200) {
				self.message = "Thao tác thành công!";
				self.typeMessage = "success";
				console.log(res);
				//setTimeout(function(){ location.reload(); }, 500);
			} else {
				console.log(res.status);
			}
		});
    }

    

}