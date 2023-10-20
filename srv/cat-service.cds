using { sap.capire.studentbook as my } from '../db/schema';

service StudentBookService @(requires: 'authenticated-user'){
    action resetStatus @(requires: 'admin')() returns array of Enrollment;

    entity Students as projection on my.Students;
    entity Classes as projection on my.Classes 
    actions{    
        action resetClassEnrollment @(requires: 'admin') () returns array of Enrollment;    
      };
    entity Enrollment as projection on my.Enrollments;
    }


    // Access control restrictions
    annotate StudentBookService.Students with @restrict:[
      { grant:'READ',   to:'authenticated-user' },   // users must login to read info
      { grant:['CREATE', 'UPDATE', 'DELETE'], to:'admin' },  
    
    ];

    annotate StudentBookService.Classes with @restrict:[
      { grant:'READ',   to:'authenticated-user' },   // users must login to read info
      { grant: '*', to:'admin' },  
    
    ];

    annotate StudentBookService.Enrollment with @restrict:[
      { grant:'READ',   to:'authenticated-user' },   // users must login to read info
      { grant:['CREATE', 'UPDATE', 'DELETE'], to:'admin' },  
    
];
