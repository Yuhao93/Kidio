$('#email-notify-btn').click(function() {
  var emailAddress = $('#email-notify-field').val();
  if (!emailAddress) {
    return;
  }

  $.post('/emailSignup', {
    'email': emailAddress
  }, function(data) {
    if (data == 'true') {
      $('#success-modal').modal({});
    }
  });
});
