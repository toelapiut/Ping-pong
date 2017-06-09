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
