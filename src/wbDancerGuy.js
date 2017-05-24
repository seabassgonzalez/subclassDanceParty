var makeWbDancer = function(top, left, timeBetweenSteps, image){
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  makeDancer.apply(this, arguments);

};

  makeWbDancer.prototype = Object.create(makeDancer.prototype);
  makeWbDancer.prototype.constructor = makeDancer;

   makeWbDancer.prototype.setPosition = function(top, left){
    // Use css top and left properties to position our <span> tag
    // where it belongs on the page. See http://api.jquery.com/css/
    //
    var styleSettings = {
      top: top,
      left: left
    };
    this.$node.css(styleSettings);
  };


  wbDancer.prototype.step = function(){
    // call the old version of step at the beginning of any call to this new version of step
    makeDancer.prototype.step.call(this);
  };