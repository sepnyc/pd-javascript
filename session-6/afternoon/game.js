function show(id) {
  var elem = document.querySelector('#' + id);
  elem.style.visibility = 'visible';
}

function hide(id) {
  var elem = document.querySelector('#' + id);
  elem.style.visibility = 'hidden';
}

function hideAll() {
  var fronts = document.querySelectorAll('.front');

  for (var i = 0; i < fronts.length; i++) {
    hide(fronts[i].id);
  }
}

function flash(text) {
  var elem = document.querySelector('#message');
  elem.innerText = text;
  show('message');

  setTimeout(function() {
    hide('message');
  }, 1000);
}

var CLICKS = [];

function logClick(id) {
  var elem = document.querySelector('#' + id);
  var color = elem.classList[0];

  CLICKS.push(color);
  checkMatch();
}

function checkMatch() {
  if (CLICKS.length < 2) {
    return; // need 2 clicks to match
  }

  if (CLICKS[0] === CLICKS[1]) {
    flash("It's a match!");
  } else {
    flash("Womp womp.");
  }

  setTimeout(function() {
    hideAll();
    CLICKS = [];
  }, 1000);
}
