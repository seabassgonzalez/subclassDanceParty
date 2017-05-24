var makeSnoopDancer = function(top, left, timeBetweenSteps,image){
  

  // this.image = '<img src="http://files.gamebanana.com/img/ico/sprays/547b7a894bcc7.gif"></span>';
   makeDancer.apply(this, arguments);

};

  makeSnoopDancer.prototype = Object.create(makeDancer.prototype);
  makeSnoopDancer.prototype.constructor = makeDancer;

   makeSnoopDancer.prototype.setPosition = function(top, left){
    // Use css top and left properties to position our <span> tag
    // where it belongs on the page. See http://api.jquery.com/css/
    //
    var styleSettings = {
      top: top,
      left: left
    };
    this.$node.css(styleSettings);
  };






  snoopDancer.prototype.step = function(){
    makeDancer.prototype.step.call(this);
    // snoopDancer.$node.toggle();
  };