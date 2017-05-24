// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps, image){
  //var dancer = {};
  // use jQuery to create an HTML <span> tag
  if (image === undefined){
    this.$node = $('<span class="dancer" id="toBeLinedUp"></span>');
  } else {
    this.$node = $('<span class="nonDot toBeLinedUp">'+image+'</span>');
  }
  this.step();

  this.setPosition(top, left);
  this.timeCounted = timeBetweenSteps;
};

  makeDancer.prototype.step = function(){
    // the basic dancer doesn't do anything interesting at all on each step,
    // it just schedules the next step
    setTimeout(this.step.bind(this), this.timeCounted);
  };
  
  makeDancer.prototype.setPosition = function(top, left){
    // Use css top and left properties to position our <span> tag
    // where it belongs on the page. See http://api.jquery.com/css/
    //
    var styleSettings = {
      top: top,
      left: left
    };
    this.$node.css(styleSettings);
  };

  makeDancer.prototype.lineUp = function(){

  };