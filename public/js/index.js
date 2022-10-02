$(document).ready(function () {
  // ==================================================
  // REQUEST LOGIC
  // ==================================================

  // ==================================================
  // BUTTON LOGIC
  // ==================================================
  // Add class to database
  $("#addclasssubmit").on("click", e => {
    e.preventDefault();
    const classObj = {
      className: $("#nameofclass")
        .val()
        .trim(),
      notes: $("#classmessagetext")
        .val()
        .trim()
    };
    // console.log(classObj);

    $.ajax({
      url: "/api/classes",
      method: "POST",
      data: classObj,
    }).then(() => {
      location.reload();
    });
  });

  // Add Assignment to Database CLass View
  $("#addassignmentsubmit").on("click", e => {
    e.preventDefault();
    const assignObj = {
      assignmentName: $("#nameofassignment")
        .val()
        .trim(),
      pointsPossible: $("#points").val(),
      notes: $("#assignmentmessagetext")
        .val()
        .trim(),
      ClassId: $("#ClassId").val()
    };
    // console.log(assignObj);

    $.ajax({
      url: "/api/assignments/",
      method: "POST",
      data: assignObj,
    }).then(() => {
      location.reload();
    });
  });

  // Add Student To Database
  $("#addstudentsubmit").on("click", e => {
    e.preventDefault();
    const studentObj = {
      firstName: $("#firstname")
        .val()
        .trim(),
      lastName: $("#lastname")
        .val()
        .trim(),
      email: $("#email")
        .val()
        .trim(),
      contactName: $("#contactname")
        .val()
        .trim(),
      contactPhone: $("#contactphone")
        .val()
        .trim(),
      address: $("#address")
        .val()
        .trim(),
      notes: $("#studentmessagetext")
        .val()
        .trim(),
      ClassId: $("#classid").val()
    };
    // console.log(studentObj);

    $.ajax({
      url: "/api/students",
      method: "POST",
      data: studentObj,
    }).then(() => {
      location.reload();
    });
  });

  // Add Lesson Plan to Database
  $("#addlessonplansubmit").on("click", e => {
    e.preventDefault();
    const lessonObj = {
      lessonplanName: $("#nameoflesson")
        .val()
        .trim(),
      notes: $("#lessonmessagetext")
        .val()
        .trim(),
      ClassId: $("#classId").val()
    };
    // console.log(lessonObj);

    $.ajax({
      url: "/api/lessonplans",
      method: "POST",
      data: lessonObj,
    }).then(() => {
      location.reload();
    });
  });

  // Add notes To Database Students View
  $("#addnotesubmit").on("click", e => {
    e.preventDefault();
    const noteObj = {
      notes: $("#notemessagetext")
        .val()
        .trim()
    };
    // console.log(noteObj);

    $.ajax({
      url: "/api/students/notes",
      method: "POST",
      data: noteObj
    }).then(() => {
      location.reload();
    });
  });

  // Add Students assignment to Database
  $("#addstudentassignmentsubmit").on("click", e => {
    e.preventDefault();
    const studentAssignmentObj = {
      totalPoints: $("#totalpoints").val(),
      notes: $("#studentassignmentmessagetext")
        .val()
        .trim()
    };
    // console.log(studentAssignmentObj);

    $.ajax({
      url: "/api/students/assignments",
      method: "POST",
      data: studentAssignmentObj,
    }).then(() => {
      location.reload();
    });
  });

  // Delete Classes
  $(".class-delete-btn").on("click", e => {
    e.preventDefault();
    const classId = e.target.id;

    $.ajax({
      type: "DELETE",
      url: "/api/classes/" + classId,
    }).then(() => {
      location.reload();
    });
  });

  // Delete Students
  $(".student-delete-btn").on("click", e => {
    e.preventDefault();

    $.ajax({
      type: "DELETE",
      url: "/api/students/" + this.name,
    }).then(() => {
      location.reload();
    });
  });

  // Delete Lesson Plan
  $(".lessonplan-delete-btn").on("click", e => {
    e.preventDefault();

    $.ajax({
      type: "DELETE",
      url: "/api/lessonplans/" + this.name,
    }).then(() => {
      location.reload();
    });
  });

  // Delete Assignment
  $(".assignment-delete-btn").on("click", e => {
    e.preventDefault();

    $.ajax({
      type: "DELETE",
      url: "/api/assignments/" + this.name,
    }).then(() => {
      location.reload();
    });
  });

  // ==================================================
  // FOOTER YEAR
  // ==================================================
  const year = new Date().getFullYear();
  $('.footer-year').text(year);
});

