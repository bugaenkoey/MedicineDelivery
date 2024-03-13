function createBasketCards() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart.forEach((element) => {
    document.querySelector(".products").append(createCard(element));
  });
}

function createCard(product) {
  let div = document.createElement(`div`);
  div.setAttribute("class", product.name);

  let cardImg = document.createElement("IMG");
  cardImg.setAttribute("src", product.img);
  cardImg.setAttribute("width", "100");
  cardImg.setAttribute("alt", product.description);
  // cardImg.setAttribute("height", "50");

  let cardName = document.createElement(`h3`);
  cardName.innerText = product.name;

  let price = document.createElement(`p`);
  price.innerText = product.price;

  let input = document.createElement(`input`);
  input.setAttribute("type", "number");
  input.setAttribute("min", "0");
  input.setAttribute("max", product.quantity);

  div.append(cardImg);
  div.append(cardName);
  div.append(price);
  div.append(input);

  //   document.querySelector(".products").append(div);
  return div;
}

createBasketCards();
