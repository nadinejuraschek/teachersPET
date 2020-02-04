# teachersPET
## Plan, Educate, Track

### UC Davis Coding Bootcamp - Project 2

A Class Management Tool for all educators. Individual student data, assignments, and lesson plans can be added, deleted, and displayed for each class. Built with Node.js, jQuery, EJS, Sequelize, and Bootstrap. 

### Team of Developers
* [Tim Gangl](https://github.com/TimGangl)
* [Nadine Juraschek](https://github.com/nadinejuraschek)
* [Jed Smit](https://github.com/jedsmit)
* [Loralee Smith](https://github.com/LoraleeSmith)

### Project Goals
The goal for this project was to make it easier for teachers to keep track of classes and students, including student information and individual progress within the class. We want to be able to use the Google calendar to input homework due dates, parent-teacher meetings, school events, etc. 

### Motivation
Our motivation was first to do something with education somehow. We knew we wanted a project that made it easier for students or teachers. 
Thus we decided on an organizer for teachers to be able to keep track of classes and students.

### Technologies
* JavaScript
* jQuery
* Node.js
    * express
    * express-session
    * dotenv
    * ejs
    * sequelize
    * jsonwebtoken
    * cookie-parser
    * bcrypt
* Bootstrap
* mySQL

### What It Can Do
* LOGIN AND SIGNUP
   * secure authentication
* DASHBOARD
   * personal welcome message using the logged in user's name
   * connectino to Google API to display the Google Calendar widget
   * list of classes with notes which link to the individual class' overview
   * classes can be added and deleted
* CLASS VIEW
   * list of students --> each link will send the user to the student's contact and grading information
   * list of assignments
   * list of lesson plans
   * students, assignemnts, and lesson plans can be added and deleted
* STUDENT VIEW
   * display contact information
      * first and last name
      * email
      * address
      * (emergency) contact name and phone number
   * notes
   * notes can be added and deleted
* LESSON PLAN VIEW

### Future Development Goals
* optimization of lesson plans:
   * add learning objectives and goals
   * add date
   * add subject / information about curriculum
* optimization of assignments:
   * add grading option to calculate each student's overall grade
   * pdf link or new route to view individual assignments
* user profile page and profile pictures for all students
* make all classes, students, lesson plans, notes, and assignments editable
* Google log in OR
* custom calendar
