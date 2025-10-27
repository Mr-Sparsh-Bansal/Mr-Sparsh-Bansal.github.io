let expression = "";

function usernumber(vcolor) {
  const output = document.getElementById("outputEq");

  if (vcolor === "=") {
    try {
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

function deleteLast() {
  expression = expression.slice(0, -1);
  document.getElementById("outputEq").value = expression;
}
