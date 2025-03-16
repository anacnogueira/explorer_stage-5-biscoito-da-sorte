const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const imgCookieClosed = screen1.querySelector("img");

const phrases = [
  "Você é mais forte do que imagina.",
  "O sucesso é uma escolha, escolha ser bem-sucedido.",
  "Não desista, a vitória está logo ali.",
  "Você é capaz de alcançar seus sonhos.",
  "Tudo é possível se você acredita.",
  "Se você quer algo, vá atrás dele.",
  "O fracasso é apenas uma oportunidade para recomeçar com mais inteligência.",
  "Não importa o quão lento você vá, desde que não pare.",
  "A determinação é a chave do sucesso.",
  "Não importa o que aconteça, nunca desista dos seus sonhos.",
  "É em meio a dificuldade que se encontra a oportunidade",
];

const randomPhrase = Math.round(Math.random() * (phrases.length - 1));

//Events
imgCookieClosed.addEventListener("click", openCookie);
screen2.querySelector("button").addEventListener("click", btnReset);

//Functions
function openCookie() {
  toogleScreen();
  newPhrase();
}

function newPhrase() {
  screen2.querySelector(".fortuneMessage").innerText = phrases[randomPhrase];
}

function btnReset() {
  toogleScreen();
  newPhrase();
}

function toogleScreen() {
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
}
