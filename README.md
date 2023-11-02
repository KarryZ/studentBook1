# Getting Started

We have a list of students which can be enrolled to multiple classes.
Students can have many enrollments, classes can have multiple students.
Students have a first and last name (mandatory fields).
Classes have a name and description. Name is a mandatory field.
Enrollment can have an active/inactive status. Status is a mandatory field with 'inactive' as a default status.

 

1. We should be able to manipulate (read, create, update, delete) the students' information, as well as the classes and enrollments.
2. (Show) Run a CAP app and retrieve the students with the information about their enrolled classes (full info). Filter the information (show top 5 students, show only the students with the last name beginning with a certain letter, show the students enrolled to more than 3 classes).
3. Reset the status of all the enrollments to active. Reset the status of the enrollments for a specific class.
4. Only the authenticated users can access the service. Users can only read the information. Administrators can also create/update/delete the information.

 

5. Use Fiori elements to display the information about the students and their enrollments.
Use semantic colors to display the color of the enrollment status.

 

6. Deploy the app to BTP, use XSUAA, HANA, use any of the routers (managed/standalone). Be able to explain how to set it up via the configuration files in the application project.
Show the successful access to the application.

 

7. Set up the local development using the hybrid mode. Be able to explain how to set it up via the configuration files in the application project.
Show the successful run of the local app.



## Next Steps

- Open a new terminal and run `cds watch` 
- (in VS Code simply choose _**Terminal** > Run Task > cds watch_)
- Start adding content, for example, a [db/schema.cds](db/schema.cds).

======= OR =======

- Open a new terminal and run `cds watch --profile hybrid`
- Open a second terminal and run `cds bind --exec '--' npm start --prefix app/router`

## Learn More

Learn more at https://cap.cloud.sap/docs/get-started/.


PATH B: Fiori Elements UI Implementation 
+ •  Add additional UI components using custom columns
+ •  Implement additional custom logic inside UI5 controllers
+ •  Add additional UI components using custom section
+ •  Trigger OData actions from UI
  •  Add additional UI components using custom pages
  •  Handle CAP DRAFT lifecycle on UI side
  •  Write unit tests for UI components
