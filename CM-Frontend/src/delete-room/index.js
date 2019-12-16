const componentName = "deleteRoom";
module.exports = componentName;

const service = require('../app-service/index.js');

angular.module(componentName, ['ngRoute', service])
.component("deleteRoom", {
	controller: DeleteRoomController,
	controllerAs: "self",
	template: require("./template.html"),
	style: require("./style.css")
});

function DeleteRoomController($scope, $location, CallApiService, $rootScope) {
	let self = this;

	CallApiService.Get('http://localhost:3000/admin/room/list', function (res) {
		if (res.status == 200) {
			self.listRoom = res.data;
		} else {
			console.log(res.status);
		}
	});

	self.getInfo = function (r) {
		for(let i = 0; i< self.listRoom.length; i++) {
			if(self.listRoom[i].IDRoom == r) {
				self.id = r;
				self.name = self.listRoom[i].RoomName;
				self.address = self.listRoom[i].Address;
				self.statusRoom = self.listRoom[i].InUse;
				self.capacity = self.listRoom[i].Capacity;
			}
		}

		// console.log(r);
	} 

	self.deleteRoom = function () {
		let data = {
			"ten": self.name,
			"diachi": self.address,
			"trangthai": self.statusRoom,
			"succhua": self.capacity,
			"id": self.id
		};
		CallApiService.Delete("http://localhost:3000/admin/room/delete", data, function (res) {
			console.log(data);
			console.log(res);
			if (res.status == 200) {
				self.message = "Thao tác thành công!";
				self.typeMessage = "success";
    			location.reload();
    		} else {
    			self.message = "Thao tác thất bại!";
    			self.typeMessage = "danger";
    		}
    	})
		
	}   

}