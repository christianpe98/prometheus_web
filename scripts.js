
//
currentTourData = {};

// UUID magic gotten from https://gist.github.com/jed/982883
var uuidv4 = () => ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,c =>(c^(window.crypto||window.msCrypto).getRandomValues(new Uint8Array(1))[0]&15>>c/4).toString(16));

// COOKIE
function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/" + "; SameSite=Strict";
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

function user_uuid() {
  var user_uuid = getCookie("user_uuid");
  if (user_uuid == "") {
    user_uuid = uuidv4();
    if (user_uuid != "" && user_uuid != null) {
      setCookie("user_uuid", user_uuid, 365);
    }
    else {
      user_uuid = "empty"
    }
  }
  return user_uuid;
  // console.log("Cookie: " + user_uuid);
}


//////////////////////////
//// JQUERY FUNCTIONS ////
//////////////////////////

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
    message: message,
    uuid: user_uuid()
  }
  
  dataLayer.push({'event': 'submit-contact', 'data': data});
}

// Tickets
function buyTickets() {
 
  num_tickets = ticketNumber();
  email = ticketEmail();
  city = currentTourData["city"];
  concert_date = currentTourData["concert_date"];

  data = {
    num_tickets: num_tickets,
    email: email,
    city: city,
    concert_date: concert_date,
    user: user_uuid()
  }
  
  dataLayer.push({'event': 'buy-tickets', 'data': data});
}

// Connect
function connect() {
  dataLayer.push({'event': 'connect'});
}
