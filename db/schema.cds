using { Currency, managed, sap, cuid , sap.common.CodeList} from '@sap/cds/common';
namespace sap.capire.studentbook;


type preferredContactType: String enum { 
        Mail; Email
    }
    
entity Students: cuid {
    @mandatory name  : String;
    @mandatory surname: String;
    email: String;
    preferredContactType: preferredContactType @mandatory ;
    enrollments: Association to many Enrollments  on enrollments.student = $self;
}

entity Classes : cuid {
  @mandatory name  : String;
  description: String;
  students: Association to many Enrollments on students.class = $self;
}

type status: String enum { 
        active; inactive
}

entity Enrollments {
  @mandatory status: status default 'inactive';  
   status_code: Integer default 0; 
   key student: Association to one Students;
   key class: Association to one Classes;
}