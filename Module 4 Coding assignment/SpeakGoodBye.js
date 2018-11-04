(function(window){
  var speakWord = "Good Bye";

  var byeSpeaker={};
  byeSpeaker.speak=function(name) {
    console.log(speakWord + " " + name);
  }
  //Expose byeSpeaker to global scope
  window.byeSpeaker=byeSpeaker;
})(window)
