function updateOutput(value) {
  const output = document.forms.output.value;
  document.forms.output.value = output === "0" ? value : output + value;
}
