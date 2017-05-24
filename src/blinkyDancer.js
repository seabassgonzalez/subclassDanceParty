var makeBlinkyDancer = function(top, left, timeBetweenSteps){
 //var obj = Object.create(makeDancer.prototype)
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
    makeDancer.apply(this, arguments);

};

//makeBlinkyDancer.prototype = Object.create(makeDancer.prototype)
makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeDancer;

makeBlinkyDancer.prototype.step = function(){
  // call the old version of step at the beginning of any call to this new version of step
  makeDancer.prototype.step.call(this);
  //blinkyDancer.step(timeBetweenSteps);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  console.log("the thing that should be here is ", this.$node);
  this.$node.toggle();
}; 
