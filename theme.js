let themeDots = document.getElementsByClassName("theme-dot");

let theme = localStorage.getItem("theme");

if (theme == null) {
  setTheme("light");
} else {
  setTheme(theme);
}

for (var i = 0; themeDots.length > i; i++) {
  themeDots[i].addEventListener("click", function () {
    let mode = this.dataset.mode;
    console.log("option clicked", mode);
    setTheme(mode);
  });
}

function setTheme(mode) {
  if (mode === "light") {
    document.getElementById("theme-style").href = "default.css";
  }

  if (mode === "blue") {
    document.getElementById("theme-style").href = "blue.css";
  }

  if (mode === "green") {
    document.getElementById("theme-style").href = "green.css";
  }

  if (mode === "purple") {
    document.getElementById("theme-style").href = "purple.css";
  }

  localStorage.setItem("theme", mode);
}

var firebaseConfig = {
  apiKey: "AIzaSyAgfLQpk6cEbKFaSAPhvdmD075APiKdxhg",
  authDomain: "profile-contact-41f87.firebaseapp.com",
  databaseURL: "https://profile-contact-41f87.firebaseio.com",
  projectId: "profile-contact-41f87",
  storageBucket: "profile-contact-41f87.appspot.com",
  messagingSenderId: "241568868123",
  appId: "1:241568868123:web:7670b70084274fca04d5be",
};

firebase.initializeApp(firebaseConfig);

document.getElementById("contact-form").addEventListener("submit", submitForm);

var messagesRef = firebase.database().ref("messages");

function submitForm(e) {
  e.preventDefault();

  var name = getInputValue("name");
  var subject = getInputValue("subject");
  var email = getInputValue("email");
  var message = getInputValue("message");

  saveMessages(name, subject, email, message);

  document.querySelector(".alert").style.display = "block";

  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);
}

function getInputValue(id) {
  return document.getElementById(id).value;
}

function saveMessages(name, subject, email, message) {
  var newMessagesRef = messagesRef.push();
  newMessagesRef.set({
    name,
    subject,
    email,
    message,
  });
}
