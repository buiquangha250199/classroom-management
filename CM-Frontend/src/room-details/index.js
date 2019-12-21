const componentName = "roomDetails";
module.exports = componentName;

const service = require('../app-service');

angular.module(componentName, ['ngRoute', service])
.component("roomDetails", {
	controller: RoomDetailsController,
	controllerAs: "self",
	template: require("./template.html"),
	style: require("./style.css")
});

function RoomDetailsController($scope, $location, CallApiService, $rootScope) {
	let self = this;

	CallApiService.Get('http://localhost:3000/admin/room/list', function (res) {
		if (res.status == 200) {
			self.listRoom = res.data;
		} else {
			console.log(res.status);
		}
	});

	self.getInfo = function () {

		let url = 'http://localhost:3000/admin/room/' + self.IDRoom;

		CallApiService.Get(url , function (res) {
			if (res.status == 200) {
				self.listUseRoom = res.data;
				//console.log(self.listUseRoom);
			} else {
				console.log(res.status);
			}
		});
		
	}

}