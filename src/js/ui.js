export const title = document.getElementById("title");
export const player = document.getElementById("player");
export const inputName = document.getElementById("inputName");
export const btnStart = document.getElementById("start");
export const feedback = document.getElementById("feedback");
export const number = document.getElementById("inputNumber");
export const btnSend = document.getElementById("send");
export const message = document.getElementById("messageGuess");
export const btnRoot = document.getElementById("root");

export function mostrarJogo() {
  inputName.style.display = "none";
  btnStart.style.display = "none";
  player.style.display = "none";

  number.style.display = "block";
  btnSend.style.display = "block";
  message.style.display = "block";
  btnRoot.style.display = "block";
  feedback.style.display = "none";
}

export function reiniciarJogo() {
  inputName.style.display = "block";
  btnStart.style.display = "block";
  player.style.display = "block";

  number.style.display = "none";
  btnSend.style.display = "none";
  message.style.display = "none";
  btnRoot.style.display = "none";
  feedback.style.display = "none";

  inputName.value = "";
  number.value = "";
  feedback.innerText = "";
  message.innerText = "";
  message.classList.remove("error", "success");
}
