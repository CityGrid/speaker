var Speaker = new function() {
  var my = {};
  
  my.Say = function(text) {
    $.post("/say",
      {
        text: text
      }
    );
  }

  my.Volume = function(value) {
    $.get("/volume/"+value
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

  $("#volume-up").click(function() {
    Speaker.Volume("up");
  });


  $("#volume-down").click(function() {
    Speaker.Volume("down");
  });

});


