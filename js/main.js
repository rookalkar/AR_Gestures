function submit() {
    var payload = {};
    payload.element = document.getElementById("element").value;
    payload.attr = document.getElementById("attr").value;
    payload.dim = document.getElementById("dim").value;
    payload.value = document.getElementById("value").value;
    change(payload);
}

function change (payload) {
  var current_attr_value = {};
  current_attr_value = document.getElementById(payload.element).getAttribute(payload.attr);
  current_attr_value[payload.dim] = current_attr_value[payload.dim] + parseFloat(payload.value);
  document.getElementById(payload.element).setAttribute(payload.attr, current_attr_value);
}
