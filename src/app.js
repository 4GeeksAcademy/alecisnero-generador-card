/* eslint-disable */
/* eslint-disable  */

window.onload = function() {
  //write your code here
};

//boton selecionado
let button = document.querySelector("#button");

//array que contienen los valores
let numberCard = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "J", "K", "Q"];
let symbol = ["♦", "♥", "♠", "♣"];

const card = document.getElementById("symbol");
const card2 = document.getElementById("symbol2");

//funcion para generar el number
const generateCard = () => Math.floor(Math.random() * 12); //indexCard 4
const generateSymbol = () => Math.floor(Math.random() * 4);//indexSymbol 1

//funcio para obtener el valor de las cartas y simbolos
const getNumberCard = indexCard => {
  const numberRandomCard = numberCard[indexCard]; //5
  return `${numberRandomCard}`;
};

const getSymbolCard = indexSymbol => {
  const numberRandomSymbol = symbol[indexSymbol]; //"♥"
  return `${numberRandomSymbol}`;
};

const showCard = (nameCard, symbols) => {
  if (symbols === "♦" || symbols === "♥") {
    const card = document.getElementById("card");
    card.textContent = nameCard;
    card.style.color = "red";
  } else {
    const card = document.getElementById("card");
    card.textContent = nameCard;
    card.style.color = "black";
  }
};

const showSym = symbolCard => {
  if (symbolCard === "♦" || symbolCard === "♥") {
    card.textContent = symbolCard;
    card2.textContent = symbolCard;
    card.style.color = "red";
    card2.style.color = "red";
  } else {
    card.textContent = symbolCard;
    card2.textContent = symbolCard;
    card.style.color = "black";
    card2.style.color = "black";
  }
};

button.addEventListener("click", () => {
  const numberGenerateCard = generateCard(); //indexCard 4
  const symbolGenerateCard = generateSymbol();//indexSymbol 1

  const resultNameCard = getNumberCard(numberGenerateCard); //5
  const resultSymbolCard = getSymbolCard(symbolGenerateCard); //"♥"

  showCard(resultNameCard, resultSymbolCard); //"♥"  si es rojo o negro
                                          //5
  showSym(resultSymbolCard);                //"♥"
});
