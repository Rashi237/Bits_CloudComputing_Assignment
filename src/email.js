function submitToAPI(e) {
  e.preventDefault();
  var URL = "https://73g4tbz9y0.execute-api.ap-south-1.amazonaws.com/prod/contact-us";

  var Namere = /[A-Za-z]{1}[A-Za-z]/;
  if (!Namere.test($("#nameInput").val())) {
    alert("Name can not less than 2 char");
    return;
  }
  if ($("#emailInput").val() == "") {
    alert("Please enter your email id");
    return;
  }
  if ($("#messageInput").val() == "") {
    alert("Please enter a message");
    return;
  }

  var reeamil = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,6})?$/;
  if (!reeamil.test($("#emailInput").val())) {
    alert("Please enter valid email address");
    return;
  }

  var sender = $("#nameInput").val();
  var cc = $("#emailInput").val();
  var msg = $("#messageInput").val();
  var receiver = $("#name")[0].innerText;
  var to = $("#email")[0].innerText;
  var data = {
    email: to,
    cc: cc,
    receiver: receiver,
    sender: sender,
    message: msg
  };

  $.ajax({
    type: "POST",
    url: URL,
    dataType: "json",
    crossDomain: "true",
    contentType: "application/json; charset=utf-8",
    data: JSON.stringify(data),


    success: function () {
      // clear form and show a success message
      alert("Thanks for contacting us! We have received your email and you are copied in the same.");
      document.getElementById("contactForm").reset();
      location.reload();
    },
    error: function () {
      // show an error message
      alert("Error! Please try again.");
    }
  });
}