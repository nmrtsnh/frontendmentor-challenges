const ranking = document.getElementById("ranking");
const buttons = document.querySelectorAll(".buttons button");
const submit = document.getElementById("submit");
const error = document.getElementById("error-message");
const selectedMsg = document.getElementById("select-message");
const evaluation = document.getElementById("evaluation");
let selected = "";

submit.addEventListener("click", (e) => {
  if (selected === "") {
    addErrorMessage();
    setTimeout(() => {
      removeErrorMessage();
    }, 3000);
  }
});

function addErrorMessage() {
  error.classList.remove("display-none");
  buttons.forEach((btn) => {
    btn.classList.add("error");
  });
}

function removeErrorMessage() {
  error.classList.add("display-none");
  buttons.forEach((btn) => {
    btn.classList.remove("error");
  });
}
