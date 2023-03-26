function calcAmount6() {
  var userAmount5 = document.getElementById("amount6").value;
  var userAmount6 = document.getElementById("amount7").value;
  var oneLevel1 = 12000;
  if (userAmount5 + userAmount6 < oneLevel1) {
    document.getElementById("marginAmount6").textContent = "Non-qualifié!";
  } else if (userAmount5 + userAmount6 >= oneLevel1) {
    document.getElementById("marginAmount6").textContent =
      Math.round(userAmount5 * 13 / 100) + (userAmount6 * 5 / 100) + "€";
  }
}