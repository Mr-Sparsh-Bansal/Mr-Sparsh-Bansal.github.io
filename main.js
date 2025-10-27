let expression = "";

function usernumber(vcolor) {
  const output = document.getElementById("outputEq");

  if (vcolor === "=") {
    try {
      // evaluate safely
      expression = eval(expression).toString();
      output.value = expression;
    } catch (e) {
      output.value = "Error";
      expression = "";
    }
  } else {
    expression += vcolor;
    output.value = expression;
  }
}

function clearCalc() {
  expression = "";
  document.getElementById("outputEq").value = "";
}
