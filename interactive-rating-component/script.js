const welcome = document.querySelector("#welcome");
const thanks = document.querySelector("#thanks");
const submit = document.querySelector("#submit");
const note = document.querySelector("#note-selected");
const buttons = document.querySelectorAll(".card-rating button");

let note_selected = undefined;

thanks.style.display = "none";

function redirect() {
  if (note_selected >= 0) {
    welcome.style.display = "none";
    thanks.style.display = "flex";
    note.textContent = `${note_selected + 1}`;
  }
}

buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    if (note_selected >= 0) {
      buttons[note_selected].classList.remove("selected");
    }

    note_selected = index;

    buttons[index].classList.add("selected");
  });
});

submit.addEventListener("click", redirect);