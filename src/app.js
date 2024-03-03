/* eslint-disable */
/* eslint-disable  */

window.onload = function() {
  //write your code here
};

//boton selecionado
let boton = document.querySelector("#button");

//array que contienen los valores
let numberCard = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "J", "K", "Q"];
let simbolos = ["♦", "♥", "♠", "♣"];

const carta = document.getElementById("sim");
const carta2 = document.getElementById("sim2");

//funcion para generar el number
const generarCard = () => Math.floor(Math.random() * 12);
const generarSim = () => Math.floor(Math.random() * 4);

//funcio para obtener el valor de las cartas y simbolos
const getNumberCard = indCard => {
  const numberRandomCard = numberCard[indCard];
  return `${numberRandomCard}`;
};

const getSymbolCard = indSim => {
  const numberRandomSim = simbolos[indSim];
  return `${numberRandomSim}`;
};

const mostrarCard = (nomCard, symbols) => {
  if (symbols === "♦" || symbols === "♥") {
    const carta = document.getElementById("carta");
    carta.textContent = nomCard;
    carta.style.color = "red";
  } else {
    const carta = document.getElementById("carta");
    carta.textContent = nomCard;
    carta.style.color = "black";
  }
};

const mostrarSym = simCard => {
  if (simCard === "♦" || simCard === "♥") {
    carta.textContent = simCard;
    carta2.textContent = simCard;
    carta.style.color = "red";
    carta2.style.color = "red";
  } else {
    carta.textContent = simCard;
    carta2.textContent = simCard;
    carta.style.color = "black";
    carta2.style.color = "black";
  }
};

boton.addEventListener("click", () => {
  const numberGeneradoCard = generarCard();
  const symbolGeneradoCard = generarSim();
  const getNomCard = getNumberCard(numberGeneradoCard);
  const getSimCard = getSymbolCard(symbolGeneradoCard);
  mostrarCard(getNomCard, getSimCard);
  mostrarSym(getSimCard);
});
