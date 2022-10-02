$(document).ready(function() {
  $("#signup-btn").on("click", e => {
    e.preventDefault();
    var userObj = {
      email: $("#inputEmail")
        .val()
        .trim()
        .toLowerCase(),
      firstName: $("#firstName")
        .val()
        .trim(),
      lastName: $("#lastName")
        .val()
        .trim(),
      password: $("#inputPassword")
        .val()
        .trim()
    };

    $.ajax({
      url: "/api/user/signup",
      method: "POST",
      data: userObj,
    }).then(resData => {
      console.log('%c User signed up successfully!', 'background: honeydew; color: green;');
      location.assign("/index");
    });
  });

  $("#login-btn").on("click", e => {
    e.preventDefault();
    var userObj = {
      email: $("#inputEmail")
        .val()
        .trim(),
      password: $("#inputPassword")
        .val()
        .trim()
    };

    $.ajax({
      url: "/api/user/login",
      method: "POST",
      data: userObj,
    }).then(resData => {
      location.assign("/index");
    });
  });

  $("#logout-btn").on("click", e => {
    e.preventDefault();
    $.ajax({
      url: "/api/user/signout",
      method: "POST",
    }).then(resData => {
      location.assign("/login");
    });
  });

  $("#login-guest-btn").on("click", e => {
    e.preventDefault();

    $.ajax({
      url: "/api/guestaccount",
      method: "POST",
    }).then(resData => {
      location.assign("/index");
    });
  });
});
