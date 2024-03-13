// import { Product } from "./productcard";

const SHOPS = [
  {
    name: "Apteka1",
    address: "вул. Аптекарська, 1",
    phone: "+380123456789",
    medicines: [
      {
        name: "Лік1",
        img: "img/pr.jpeg",
        description: "Короткий опис ліку 1",
        price: 25.99,
        quantity: 5,
      },
      {
        name: "Лік3",
        img: "img/images (1).jpeg",
        description: "Короткий опис ліку 3",
        price: 15.49,
        quantity: 3,
      },
    ],
  },
  {
    name: "Apteka2",
    address: "вул. Аптекарська, 2",
    phone: "+380987654321",
    medicines: [
      {
        name: "Лік4",
        img: "img/images (2).jpeg",
        description: "Короткий опис ліку 4",
        price: 26.11,
        quantity: 4,
      },
      {
        name: "Лік2",
        img: "img/images (3).jpeg",
        description: "Короткий опис ліку 2",
        price: 11.91,
        quantity: 2,
      },
    ],
  },
];

console.log(SHOPS);

// function getProducts(product) {
//   console.log(product);
//   createProductPlace();
//   return product;
// }

function createDivShops(shops) {
  shops.forEach((element) => {
    let div = document.createElement(`div`);
    div.addEventListener("click", function (event) {
      console.log(event.target, element.medicines);
      createProductPlace(element.medicines);
    });
    // div.setAttribute("onclick", createProductPlace(element.medicines));
    div.innerText = element.name;
    // div.onclick = getProducts(element.medicines);
    document.querySelector(".shops").append(div);
  });
}

function createProductPlace(products) {
  document.querySelector(".products").innerHTML = "";
  products.forEach((poduct) => {
    document.querySelector(".products").append(createCard(poduct));
  });
}

function createCard(poduct) {
  let div = document.createElement(`div`);
  div.setAttribute("class", poduct.name);

  let cardImg = document.createElement("IMG");
  cardImg.setAttribute("src", poduct.img);
  cardImg.setAttribute("width", "100");
  cardImg.setAttribute("alt", poduct.description);
  // cardImg.setAttribute("height", "50");

  div.append(cardImg); //document.createElement(`img`);

  let cardName = document.createElement(`h3`);
  cardName.innerText = poduct.name;

  let button = document.createElement(`button`);
  button.innerText = "BUY"; //to the basket

  button.addEventListener("click", function () {
    // console.log(event.target, poduct);
    addBascet(poduct);
  });

  div.append(cardName);
  div.append(button);
  console.log(cardImg);
  // div.innerHTML = cardImg;
  return div;
}

createDivShops(SHOPS);

function addBascet(product) {
  alert(product.name);

  // Отримайте поточний вміст корзини з localStorage (або sessionStorage)
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart.push(product);

  // Оновіть вміст корзини в localStorage (або sessionStorage)
  localStorage.setItem("cart", JSON.stringify(cart));

  // Тепер об'єкт medicines збережений в корзині
}
