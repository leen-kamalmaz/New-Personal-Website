const messageSent = () => {
  document.getElementById("confirmation").style.visibility = "visible";
  setTimeout(() => {
    document.getElementById("confirmation").style.visibility = "hidden";
  }, 5000);
};
