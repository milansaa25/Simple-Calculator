document.getElementById("compute").addEventListener("click", computeResult);

function computeResult(){
  var number1 = parseInt(document.getElementById("num1").value);
    var number2 = parseInt(document.getElementById("num2").value);
  
  var operation = document.getElementById("operation").value;
  
  var result = 0;
  
  if (operation=="add"){
    result = number1 + number2;
  }
  else if (operation == "subtract"){
    result = number1 - number2;
  }
    else if (operation == "multiply"){
    result = number1 * number2;
  }
    else if (operation == "division"){
    result = number1 / number2;
  }
    else if (operation == "remainder"){
    result = number1 % number2;
  }

  document.getElementById("result").value = result;
  // alert(result)
  
  
  // alert("First number is " + number1 + ". Second Number is " + number2 + ". You selected " + operation);
}

