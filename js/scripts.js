//business-logic-interface
function pingPong(userInput){
  var result = [];

  for (var index = 1; index <= userInput; index++){
    if ((index % 15) === 0){
      result.push ("Ping-Pong");
    } else if ((index % 5) === 0){
      result.push ("Pong");
    } else if ((index % 3) === 0){
      result.push ("Ping");
    } else
    result.push (index);
  }
  return result;

}
//user-interface
$(document).ready(function() {
  $("form#pingPong").submit(function(event) {
    $("#userOutput").empty();                 //It remove the child in and element but doesnt remove the class
    var userInput = parseInt($("input#number").val());
    var result = pingPong(userInput);
    result.forEach(function(output) {
    $("#userOutput").append("<li>" + output + "</li>");
    event.preventDefault();
  });
 });
});
