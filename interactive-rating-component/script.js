const welcome = document.querySelector("#welcome");
const thanks = document.querySelector("#thanks");
const submit = document.querySelector("#submit");

// let note = undefined;

thanks.style.display = "none";

function redirect() {
  // if (note) {
    welcome.style.display = "none";
    thanks.style.display = "flex";
  // }
}

submit.addEventListener("click", redirect);