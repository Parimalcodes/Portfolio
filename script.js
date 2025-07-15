function contentLoaded() {
  var loaderContainer = document.querySelector('.loader-container');
  loaderContainer.style.display = 'none';
}
window.addEventListener('load', contentLoaded);

function sidebarHandler(){
  document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector("#menubar");
    const sidebar = document.querySelector("#aside");
    const closeBtn = document.querySelector("#close");
    const links = document.querySelectorAll("#aside nav ul li a");
    menuIcon.addEventListener("click", function () {
      console.log("Menu clicked");
      if (sidebar.style.left === "-100%" || sidebar.style.left === "") {
        sidebar.style.left = "0";
      } else {
        sidebar.style.left = "-100%";
      }
    });
    closeBtn.addEventListener("click", function () {
      console.log("Close clicked");
      sidebar.style.left = "-100%";
    });
    links.forEach((link) => {
      link.addEventListener("click", function () {
        console.log("Link clicked");
        sidebar.style.left = "-100%";
      });
    });
  });  
}
sidebarHandler();
function downloadresume(){
  document.getElementById("resume-d").click();
}
function gotogithub(){
  document.getElementById("github").click();
}

function sendEmail() {
  // Initialize EmailJS with your user ID
  emailjs.init("parimalpatel5329@gmail.com");
  
  // Get form elements
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;

  // Send email using EmailJS
  emailjs.send("gmail", "template_onz3rle", {
      from_name: name,
      reply_to: email,
      message: message
  }).then(function(response) {
      console.log("Email sent successfully", response);
      alert("Email sent successfully!");
  }, function(error) {
      console.error("Email sending failed", error);
      alert("Email sending failed!");
  });
}

AOS.init();
