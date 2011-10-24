var Speaker = new function() {
  var my = {};
  
  my.Say = function(text) {
    $.post("/say",
      {
        text: text
      }
    );
  }
  
  return my;
}

$(function() {
  $("#chatbox").keyup(function(event) {
    if(event.keyCode == 13){
      Speaker.Say($("#chatbox").val());
      $("#chatbox").val("");
    }
  });
});