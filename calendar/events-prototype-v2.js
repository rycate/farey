var now = new Date();

function EventDate(date) {
  this.date = date.toLocaleDateString('en-GB');;
}

var extend = function (target) {
  if (!arguments[1]) {
    return;
  }

  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for(var prop in source) {
      if(!target[prop] && source.hasOwnProperty(prop)) {
        target[prop] = source[prop];
      }
    }
  }
};

var dateMixin = {
  getDate: function() {
    return this.date;
  }
};

var descrMixin = {
  event: function(title, descr, status) {
    this.title = title;
    this.descr = descr;
    this.status = status;

    this.eventDescr = [this.title, this.descr, this.status];
    console.log("event desription: " + this.eventDescr);
  }
};

var addEventMixin = {
  addVal: function() {
    console.log("I want to add: " + this.date + " " +  this.eventDescr);
  }
};

extend(EventDate.prototype, dateMixin, descrMixin, addEventMixin);

var newEvent = new EventDate(now);

console.log(newEvent);
console.log(newEvent.getDate());
newEvent.event("Some Title 2", "Some Desc 2", false);
