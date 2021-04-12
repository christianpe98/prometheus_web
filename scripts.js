
// JQUERY FUNCTIONS
function contactName() {
  return $('#contact-name').val();
}

function contactEmail() {
  return $('#contact-email').val();
}

function contactMessage() {
  return $('#contact-message').val();
}

function clearContact() {
  $('#contact-name').val('');
  $('#contact-email').val('');
  $('#contact-message').val('');
}

// EVENT FUNCTIONS
function submitContact() {
  name = contactName();
  email = contactEmail();
  message = contactMessage();
  
  data = {
    name: name,
    email: email,
    message: message
  }
  
  dataLayer.push({'event': 'submit-contact', 'data': data});
  
}
