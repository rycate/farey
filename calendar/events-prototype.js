localStorage.clear();
// var obj = [
//   [123, "one", true],
//   [123, "two", false],
//   [123, "three", true]
// ];
// var serialObj = JSON.stringify(obj);
// localStorage.setItem("11/09/2017", serialObj);

function Event(date, id, title, descr, status) {
  this.date = date.toLocaleDateString('en-GB');
  this.id = id;
  this.title = title;
  this.descr = descr;
  this.status = status;

  this.eventDescr = [this.title, this.descr, this.status];
}

Event.prototype.addEvent = function() {
  //add to LocalStorage;
  if(localStorage.getItem(this.date) != null) {
    var localValue = localStorage.getItem(this.date);
    localValue = JSON.parse(localStorage.getItem(this.date));
  } else {
    localValue = []
  }

  localValue.push(this.eventDescr);
  var serialObj = JSON.stringify(localValue);
  localStorage.setItem(this.date, serialObj);
}

Event.prototype.changeEvent = function() {
  //edit event and save changes at LocalStorage;
}

Event.prototype.delete = function() {
  //delete event from LocalStorage;
}

var now = new Date();


var event = new Event(now, 1, "Some Title", "Some Desc", true);
var event2 = new Event(now, 2, "Some Title 2", "Some Desc 2", false);
event.addEvent();
event2.addEvent();
