// Get references to page elements
var $exampleText = $("#example-text");
var $exampleDescription = $("#example-description");
var $submitBtn = $("#submit");
var $classList = $("#class-list");

// The API object contains methods for each kind of request we'll make
var API = {
  
  getUser: function(){ 
    console.log("ajax getUser call");
    return $.ajax({
      url: "api/user/:id", 
      tyoe: "GET"
    })
  },

  getClasses: function() {
    console.log("ajax getClasses call");
    return $.ajax({
      url: "api/classes",
      type: "GET"
    });
  },

  getOneClass: function() {
    console.log("ajax get Oneclass call");
    return $.ajax({
      url: "api/classes/:id",
      type: "GET"
    });
  },

  deleteExample: function(id) {
    return $.ajax({
      url: "api/examples/" + id,
      type: "DELETE"
    });
  }
};

// refreshClasses gets classes from the db and repopulates the class list
const refreshClasses = function() {
  API.getClasses().then(function(data) {
    var $class = data;
      console.log($class);
      $classList.empty();

      for (i = 0; i < $class.length; i++) {
        let $col = $("<div>").addClass("col-11 section overview-item");

        let $ul = $("<ul>").addClass("list-group");

        let $a = $("<a>")
          .attr("href", "/classes/" + $class[i].id);

          let $h3 = $("<h3>").addClass("overview-header");
          

        let $i = $("<i>").addClass("fas fa-trash-alt");


        let $a2 = $("<a>").attr({
          class: "float-right",
          href: "#"
        });  

        let $h3 = $("<h3>").addClass("overview-header");

        let $h5 = $("<h5>").addClass("overview-text").text($class[i].class_name)

        $h3.append($a2);
        $a2.append($i);
         $a.append($h3);
        $a.append($h5);
       

        let $li = $("<li>")
          .attr({
            class: "list-group-item",
            "data-id": $class[i].id
          })
          .append($a);
       
        $classList.append($col);
        $ul.append($li)
        $col.append($ul);
        console.log("appended");
      }
    });   
};
refreshClasses();

// function to display user's name
// const nameDisplay = function(){
//   API.getUser().then(function(data) {
//     let $userName = data[id].first_name + " " + data[id].last_name;
//       console.log($userName);
//       $(".profile-name").text("Welcome back, " + $userName + "!");
// });
// };
// nameDisplay();


// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
const handleFormSubmit = function(event) {
  event.preventDefault();

  var example = {
    text: $exampleText.val().trim(),
    description: $exampleDescription.val().trim()
  };

  if (!(example.text && example.description)) {
    alert("You must enter an example text and description!");
    return;
  }

  //   API.saveExample(example).then(function() {
  //     refreshExamples();
  //   });

  //   $exampleText.val("");
  //   $exampleDescription.val("");
};

// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list
// var handleDeleteBtnClick = function() {
//   var idToDelete = $(this)
//     .parent()
//     .attr("data-id");

//   API.deleteExample(idToDelete).then(function() {
//     refreshExamples();
//   });
// };

// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleFormSubmit);
$classList.on("click", ".delete", handleDeleteBtnClick);


$(document).ready(function () {
  //Add class to database
  $("#addclasssubmit").on("click", function (e) {
    e.preventDefault();
    var classObj = {
      // eslint-disable-next-line camelcase
      class_name: $("#nameofclass")
        .val()
        .trim(),
      notes: $("#classmessagetext")
        .val()
        .trim()
    };
    console.log(classObj);

    $.ajax({
      url: "/api/classes",
      method: "POST",
      data: classObj
    }).then(function () {
      location.reload();
    });
  });

  //Add Assignment to Database CLass View
  $("#addassignmentsubmit").on("click", function (e) {
    e.preventDefault();
    var assignObj = {
      // eslint-disable-next-line camelcase
      assignment_name: $("#nameofassignment")
        .val()
        .trim(),
      // eslint-disable-next-line camelcase
      points_possible: $("#points").val(),
      notes: $("#assignmentmessagetext")
        .val()
        .trim()
    };
    console.log(assignObj);

    $.ajax({
      url: "/api/assignments",
      method: "POST",
      data: assignObj
    }).then(function () {
      location.reload();
    });
  });

  //Add Student To Database
  $("#addstudentsubmit").on("click", function (e) {
    e.preventDefault();
    var studentObj = {
      // eslint-disable-next-line camelcase
      first_name: $("#firstname")
        .val()
        .trim(),
      // eslint-disable-next-line camelcase
      last_name: $("#lastname")
        .val()
        .trim(),
      // eslint-disable-next-line camelcase
      email: $("#email")
        .val()
        .trim(),
      // eslint-disable-next-line camelcase
      contact_name: $("#contactname")
        .val()
        .trim(),
      // eslint-disable-next-line camelcase
      contact_phone: $("#contactphone")
        .val()
        .trim(),
      // eslint-disable-next-line camelcase
      address: $("#address")
        .val()
        .trim(),
      notes: $("#studentmessagetext")
        .val()
        .trim()
    };
    console.log(studentObj);

    $.ajax({
      url: "/api/students",
      method: "POST",
      data: studentObj
    }).then(function () {
      location.reload();
    });
  });

  //Add Lesson Plan to Database
  $("#addlessonplansubmit").on("click", function (e) {
    e.preventDefault();
    var lessonObj = {
      // eslint-disable-next-line camelcase
      assignment_name: $("#nameoflesson")
        .val()
        .trim(),
      notes: $("#lessonmessagetext")
        .val()
        .trim()
    };
    console.log(lessonObj);

    $.ajax({
      url: "/api/lessonplans",
      method: "POST",
      data: lessonObj
    }).then(function () {
      location.reload();
    });
  });

  //Add notes To Database Students View
  $("#addnotesubmit").on("click", function (e) {
    e.preventDefault();
    var noteObj = {
      // eslint-disable-next-line camelcase
      notes: $("#notemessagetext")
        .val()
        .trim()
    };
    console.log(noteObj);

    $.ajax({
      url: "/api/students/notes",
      method: "POST",
      data: noteObj
    }).then(function () {
      location.reload();
    });
  });

  //Add Students assignment to Database
  $("#addstudentassignmentsubmit").on("click", function (e) {
    e.preventDefault();
    var studentAssignmentObj = {
      // eslint-disable-next-line camelcase
      total_points: $("#totalpoints").val(),
      notes: $("#studentassignmentmessagetext")
        .val()
        .trim()
    };
    console.log(studentAssignmentObj);

    $.ajax({
      url: "/api/students/assignments",
      method: "POST",
      data: studentAssignmentObj
    }).then(function () {
      location.reload();
    });
  });
});
