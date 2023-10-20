const cds = require('@sap/cds')
const { SELECT } = cds.ql;
const { Enrollments, Students } = cds.entities ('sap.capire.studentbook')

class StudentBookService extends cds.ApplicationService { 
  init(){
    this.after('READ', 'Students', async data => {
     
      let dataInfo = await Promise.all(data.map(async (student) => {
        let enrollments = await this.run(
          SELECT.from(Enrollments).where({'student_ID': student.ID})
      ); 
     
      enrollments.forEach( async (enrol) => {
        const {student_ID, class_ID, status} = enrol;
        const status_code = status === 'active' ? '3' : '1';
        await UPDATE (Enrollments) .with ({status_code: status_code}).where({'student_ID': student_ID, 'class_ID': class_ID});
      })
     
      }));
      
      return dataInfo;
    }) 
  


  return super.init()
}

  //Reset the status of all the enrollments to active. 
    // Post  http://localhost:4004/odata/v4/student-book/resetStatus
    async resetStatus() {   
      await UPDATE (Enrollments).with ({status:'active'});
      let enrollments = await this.run(
        SELECT.from(Enrollments)
    );   
      return  enrollments;    
    }

  //Reset the status of the enrollments for a specific class.
  //Post 
  //http://localhost:5000/odata/v4/student-book/Classes(2104c617-89bc-4b65-aed4-158827f645d2)/StudentBookService.resetClassEnrollment

 async resetClassEnrollment(Classes, class_ID)  { 
   
    await UPDATE (Enrollments).with ({status:'active'})
    .where({'class_ID': class_ID});
    
    let enrollments = await this.run(
      SELECT.from(Enrollments).where({'class_ID': class_ID})
  );   
    return enrollments;    
  }
}

module.exports = { StudentBookService }
