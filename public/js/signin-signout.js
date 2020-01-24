$(document).ready(function(){
  $('#signup-btn').on('click', function(e){
    e.preventDefault();
    var userObj = {
      email: $('#inputEmail').val().trim(),
      first_name: $('#first_name').val().trim(),
      last_name: $('#last_name').val().trim(),
      password: $('#inputPassword').val().trim()
    };
    console.log(userObj);

    $.ajax({
      url: '/api/user/signup',
      method: 'POST',
      data: userObj
    }).then(function(resData){
      location.assign('/index');
    });
  });

  $('#login-btn').on('click', function(e){
    e.preventDefault();
    var userObj = {
      email: $('#inputEmail').val().trim(),
      password: $('#inputPassword').val().trim()
    };
    console.log(userObj);

    $.ajax({
      url: '/api/user/login',
      method: 'POST',
      data: userObj
    }).then(function(resData){
      location.assign('/index');
    });
  });

  $('#logout-btn').on('click', function(e){
    e.preventDefault();
    $.ajax({
      url: '/api/user/signout',
      method: 'POST'
    }).then(function(resData){
      location.assign('/login');
    });
  });

})

