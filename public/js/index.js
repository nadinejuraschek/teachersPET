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
  getClasses: function() {
    return $.ajax({
      url: "api/classes",
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

// refreshExamples gets new examples from the db and repopulates the list
var refreshClasses = function() {
  API.getClasses().then(function(data) {
    var $classes = data.map(function($class) {
      var $a = $("<a>")
        .text($class.class_name)
        .attr("href", "/class" + $class.id);

      var $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": $class.id
        })
        .append($a);

      // var $button = $("<button>")
      //   .addClass("btn btn-danger float-right delete")
      //   .text("ｘ");

      // $li.append($button);

      return $li;
    });

    $classList.empty();
    $classList.append($li);
  });
};

// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
var handleFormSubmit = function(event) {
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
var handleDeleteBtnClick = function() {
  var idToDelete = $(this)
    .parent()
    .attr("data-id");

  API.deleteExample(idToDelete).then(function() {
    refreshExamples();
  });
};

// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleFormSubmit);
$classList.on("click", ".delete", handleDeleteBtnClick);

refreshClasses();