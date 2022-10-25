const messageSent = () =>
  (document.getElementById("confirmation").style.visibility = "visible");
document.getElementById("form").onsubmit = messageSent;
