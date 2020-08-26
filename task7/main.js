let otherTextArea = document.getElementById("other-text");
var otherCheckBox = document.getElementById("checkbox-other");

otherCheckBox.addEventListener("click", function setOtherReadonly() {
  if (otherCheckBox.checked == true) {
    otherTextArea.readOnly = false;
  } else {
    otherTextArea.readOnly = true;
  }
});
