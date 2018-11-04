(function (window) {
  
  var speakWord = "Hello";  

  var helloSpeaker={};
  helloSpeaker.speak=function(name){
  console.log(speakWord + " " + name);
  }
  //Expose helloSpeaker to global scope
  window.helloSpeaker=helloSpeaker;
})(window);



