$(document).ready(function () {
  $("#addclasssubmit").on("click", function (e) {
    e.preventDefault();
    var classObj = {
      class: $("#nameofclass")
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
    });
  });
});
