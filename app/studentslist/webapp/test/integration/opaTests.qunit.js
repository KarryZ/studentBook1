sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'studentslist/test/integration/FirstJourney',
		'studentslist/test/integration/pages/StudentsList',
		'studentslist/test/integration/pages/StudentsObjectPage',
		'studentslist/test/integration/pages/EnrollmentObjectPage'
    ],
    function(JourneyRunner, opaJourney, StudentsList, StudentsObjectPage, EnrollmentObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('studentslist') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheStudentsList: StudentsList,
					onTheStudentsObjectPage: StudentsObjectPage,
					onTheEnrollmentObjectPage: EnrollmentObjectPage
                }
            },
            opaJourney.run
        );
    }
);