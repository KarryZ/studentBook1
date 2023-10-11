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

    //Reset the status of all the enrollments to active. 
    // GET  http://localhost:4004/odata/v4/student-book/resetStatus()
    this.on ('resetStatus', async req => {   
      await UPDATE (Enrollments) .with ({status:'active'});
      let enrollments = await this.run(
        SELECT.from(Enrollments)
    );   
      return  enrollments;    
    })
  


  return super.init()
}
  //Reset the status of the enrollments for a specific class.
  //GET 
  //http://localhost:4004/odata/v4/student-book/Classes/2713c83b-f171-482a-a82c-416e83b7dfdc/StudentBookService.resetClassEnrollment()
  //http://localhost:4004/odata/v4/student-book/Classes/2713c83b-f171-482a-a82c-416e83b7dfdc/resetClassEnrollment()
  //http://localhost:4004/odata/v4/student-book/Classes(2713c83b-f171-482a-a82c-416e83b7dfdc)/StudentBookService.resetClassEnrollment()
 async resetClassEnrollment(class_ID)  { 
   
    await UPDATE (Enrollments).with ({status:'active'})
    .where({'class_ID': class_ID});
    
    let enrollments = await this.run(
      SELECT.from(Enrollments).where({'class_ID': class_ID})
  );   
    return enrollments;    
  }
}

module.exports = { StudentBookService }
