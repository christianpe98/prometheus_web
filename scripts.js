
// COOKIE
function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
  var username = getCookie("username");
  if (username != "") {
   alert("Welcome again " + username);
  } else {
    username = prompt("Please enter your name:", "");
    if (username != "" && username != null) {
      setCookie("username", username, 365);
    }
  }
}

//////////////////////////
//// JQUERY FUNCTIONS ////
////////////////////////

// Contact
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


// Tickets
function ticketNumber() {
  return $('#tickets-number').val();
}

function ticketEmail() {
  return $('#tickets-email').val();
}


//////////////////////////
//// EVENT FUNCTIONS ////
////////////////////////

// Contact
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

// Tickets
function buyTickets() {
  nTickets = ticketNumber();
  email = ticketEmail();

  console.log(nTickets);
  console.log(email);

  data = {
    tickets: nTickets,
    email: email,
  }

  dataLayer.push({'event': 'buy-tickets', 'data': data});
}
