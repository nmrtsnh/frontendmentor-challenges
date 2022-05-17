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
    return;
  }
  selectedMsg.textContent = `You selected ${selected} out of 5 `;
  ranking.classList.add("display-none");
  evaluation.classList.remove("display-none");
});

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    removeSelect();
    selected = e.target.textContent;
    e.target.classList.add("selected");
  });
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

function removeSelect() {
  buttons.forEach((btn) => {
    btn.classList.remove("selected");
  });
}
