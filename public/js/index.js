// Get references to page elements
var $exampleText = $("#example-text");
var $exampleDescription = $("#example-description");
var $submitBtn = $("#submit");
var $classList = $("#class-list");

// The API object contains methods for each kind of request we'll make
var API = {
  // saveExample: function(example) {
  //   return $.ajax({
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //     type: "POST",
  //     url: "api/examples",
  //     data: JSON.stringify(example)
  //   });
  // },
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
const nameDisplay = function(){
  API.getUser().then(function(data) {
    let $userName = data[id].first_name + " " + data[id].last_name;
      console.log($userName);
      $(".profile-name").text("Welcome back, " + $userName + "!");
});
};
nameDisplay();
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


