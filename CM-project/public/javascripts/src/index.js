const componentName = "CM-project";
module.exports = componentName;

const Login = require('./login-page');

////////////////////////////////////////////////////

const DashboardPage = require('./dashboard-page');

const ListSubject = require('./list-subject');
const SubjectDetails = require('./subject-details');

const ListRoom = require('./list-room');
const NewRoom = require('./new-room');
const EditRoom = require('./edit-room');

const TimetableManagement = require('./timetable-man');

////////////////////////////////////////////////////

const LecturerInterface = require('./lecturer-interface');

////////////////////////////////////////////////////////

const StudentInterface = require('./student-interface');

angular.module(componentName, 
    [
        'ngRoute', Login, DashboardPage, 
        ListSubject, SubjectDetails, 
        ListRoom, NewRoom, EditRoom, 
        TimetableManagement,
        LecturerInterface, StudentInterface
    ]
);


