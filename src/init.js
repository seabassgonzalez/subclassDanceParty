$(document).ready(function(){
  window.dancers = [];


  $(".addBlinkyDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    console.log('dancer', dancer);
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
  });



  $(".addWBDancerButton").on("click", function(event){
    var WbDancerMakerFunctionName = $(this).data("dancer-maker-function-name");
    // get the maker function for the kind of dancer we're supposed to make
    var WbDancerMakerFunction = window[WbDancerMakerFunctionName];

    // make a dancer with a random position

    var WbDancer = new WbDancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000, '<img id="wbDancer" src="http://s2.favim.com/orig/150822/adorable-background-black-and-white-cute-Favim.com-3165433.gif">'
    );
    $('body').append(WbDancer.$node);
    window.dancers.push(WbDancer);
  });




    $(".addSnoopDancerButton").on("click", function(event){
    var snoopDancerMakerFunctionName = $(this).data("dancer-maker-function-name");
    // get the maker function for the kind of dancer we're supposed to make
    var snoopDancerMakerFunction = window[snoopDancerMakerFunctionName];

    // make a dancer with a random position

    var snoopDancer = new snoopDancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000, '<img id="snoopDancer" src="http://files.gamebanana.com/img/ico/sprays/547b7a894bcc7.gif">'
    );
    $('body').append(snoopDancer.$node);
    window.dancers.push(snoopDancer);
  });




 $(".lineEmUp").on("click", function(event){
    var lineEmUpFunctionName = $(this).data("data-dancer-lineup-function-name");
    // get the maker function for the kind of dancer we're supposed to make
    var lineEmUpFunctionName = window[lineEmUpFunctionName];
  
    $('span').css('left', '50%')
  });

 $(".leanRight").on("click", function(event){
  
    $('span').css('transform', 'rotate(30deg)');
  });

 $(".leanLeft").on("click", function(event){

    $('span').css('transform', 'rotate(-30deg)');

  });

 $(".jump").on("click", function(event){

    $('span').animate('{height:50px}', 'slow');

  });

});

