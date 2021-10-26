function buttonClick(num) {
  document.getElementById("output").value += num;
}

function clearDisplay() {
  document.getElementById("output").value = "";
}

function equalClick() {
  let text = document.getElementById("output").value;
  let result = eval(text);
  document.getElementById("output").value = result;
}
