// Array of product objects using ES6 features

const products = [
  {
    id: 1,
    name: "Magic Wand",
    price: 10.0,
    description: "Unleash your wizardry skills.",
  },
  {
    id: 2,
    name: "Invisibility Cloak",
    price: 20.0,
    description: "Disappear in style!",
  },
  {
    id: 3,
    name: "Time Turner",
    price: 30.0,
    description: "Turn back time with a twist",
  },
];
let cart = [];

// DOMContentLoaded to ensure the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  const productList = document.getElementById("productList");
  const cartList = document.getElementById("cartList");

  //    Function to render products
  const renderProducts = () => {
    products.forEach((product) => {
      const productDiv = document.createElement("div");
      productDiv.className = "product";
      productDiv.innerHTML = `<h3>${product.name}-$${product.price}</h3>
        <p></p>
        
        `;
    });
  };
});
