import { contact_form_API_endpoint } from "./secrets.js";

const url = contact_form_API_endpoint;
const form = document.querySelector(".contact-form");
const toast = form.querySelector(".toast");
const submit = form.querySelector(".submit");

function post(url, body, callback) {
  var req = new XMLHttpRequest();
  
  req.open("POST", url, true);
  req.setRequestHeader("Content-Type", "application/json");
  req.addEventListener("load", function () {
    if (req.status < 400) {
      callback(null, JSON.parse(req.responseText));
    } else {
      callback(new Error("Request failed: " + req.statusText));
    }
  });
  req.send(JSON.stringify(body));
}

function success() {
  toast.innerHTML = "Thanks for sending me a message! I\'ll get in touch with you ASAP.";
  submit.disabled = false;
  submit.blur();
  form.name.focus();
  form.name.value = "";
  form.email.value = "";
  form.subject.value = "";
  form.message.value = "";
  form.human.value = "";
}

function error(err) {
  toast.classList.add("red");
  toast.innerHTML = "There was an error with sending your message, hold up until I fix it. Thanks for waiting.";
  submit.disabled = false;
  console.log(err);
}

function answeredCorrectly() {
  if (form.human.value !== "4") {
    toast.classList.add("red");
    toast.innerHTML = "You answered the anti-spam question incorrectly!";
    return false;
  }

  return true;
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  toast.classList.remove("red");
  toast.innerHTML = "Sending";
  submit.disabled = true;

  const payload = {
    name: form.name.value,
    email: form.email.value,
    subject: form.subject.value,
    message: form.message.value
  };

  if (!answeredCorrectly()) { return; }
  
  post(url, payload, function (err, res) {
    if (err) { return error(err); }
    success();
  });
});
