import {
  title,
  player,
  inputName,
  btnStart,
  feedback,
  number,
  btnSend,
  message,
  btnRoot,
  mostrarJogo,
  reiniciarJogo,
} from "./ui.js";

document.addEventListener("DOMContentLoaded", function () {
  title.innerText = `Jogo de adivinhação`;
  player.innerText = "Digite seu nome para começar o jogo:";
  btnStart.innerText = "Iniciar Jogo";
  btnSend.innerText = "Enviar";
  btnRoot.innerText = "Reiniciar Jogo";
});

btnStart.addEventListener("click", () => {
  if (inputName.value === "") {
    feedback.innerText = "Digite seu nome para começar o jogo!";
    feedback.classList.add("error");
    feedback.classList.remove("success");
    feedback.style.display = "block";
    return;
  } else {
    feedback.innerText = `Olá ${inputName.value}, boa sorte!`;
    feedback.classList.remove("error");
    feedback.classList.add("success");
    mostrarJogo();
  }
});

btnSend.addEventListener("click", () => {
  const numero = parseInt(number.value);

  if (isNaN(numero) || numero < 1 || numero > 50) {
    feedback.innerText = "Digite um número entre 1 e 50!";
    feedback.classList.add("error");
    feedback.classList.remove("success");
    return;
  }
});

btnRoot.addEventListener("click", reiniciarJogo);

