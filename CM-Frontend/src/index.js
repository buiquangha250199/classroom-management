const componentName = "CM-FRONTEND";
module.exports = componentName;

////////////////////////////////////////////////////

const DashboardPage = require('./dashboard-page');

const NewRoom = require('./new-room');
const EditRoom = require('./edit-room');
const DeleteRoom = require('./delete-room');

const NewSubject = require('./new-subject');
const EditSubject = require('./edit-subject');
const DeleteSubject = require('./delete-subject');

const UpLoadData = require('./upload-data');

const NewTimetable = require('./new-timetable');
const DeleteTimetable = require('./delete-timetable');

const RoomDetails = require('./room-details');

angular.module(componentName, 
    [
        'ngRoute', DashboardPage,  
        NewRoom, EditRoom, DeleteRoom,
        NewSubject, EditSubject, DeleteSubject,
        UpLoadData, NewTimetable, DeleteTimetable, RoomDetails
    ]
);


