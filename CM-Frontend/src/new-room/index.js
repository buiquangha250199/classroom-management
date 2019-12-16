const componentName = "newRoom";
module.exports = componentName;

const service = require('../app-service');

angular.module(componentName, ['ngRoute', service])
  .component("newRoom", {
    controller: NewRoomController,
    controllerAs: "self",
    template: require("./template.html"),
    style: require("./style.css")
  });

function NewRoomController($scope, $location, CallApiService, $rootScope) {
	let self = this;

    self.createRoom = function () {
    	let data = {
		"ten": self.name,
		"diachi": self.address,
		"trangthai": self.statusRoom,
		"succhua": self.capacity
		};
    	console.log(data);

    	CallApiService.Post('http://localhost:3000/admin/room/new', data, function (res) {
    		console.log(res);
    		if (res.status == 200) {
    			self.message = "Thao tác thành công!";
    			self.typeMessage = "success";
    			setTimeout(function(){ location.reload(); }, 500);
    		} else {
    			self.message = "Thao tác thất bại!";
    			self.typeMessage = "danger";
    		}
    	})
    	//event.preventDefault();
    }

}