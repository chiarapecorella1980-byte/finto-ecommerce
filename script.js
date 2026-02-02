const API_URL = "https://striveschool-api.herokuapp.com/api/product/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTgwZmE4OWQxZTk0YzAwMTVlZGRmMWQiLCJpYXQiOjE3NzAwNjIzMDAsImV4cCI6MTc3MTI3MTkwMH0.X-3fRkh0IDVaN72Ymu_e0l7hLBK98ciBztXStOQjxMw";

function loadProducts() {
  fetch(API_URL, {
    method: "GET",
    headers: {
      Authorization: "Bearer " + TOKEN,
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("HTTP status " + response.status);
      }
      return response.json();
    })
   .then(products => {
  console.log("PRODOTTI:", products);

  const list = document.getElementById("product-list");
  list.innerHTML = "";

  products.forEach(p => {
    list.innerHTML += `
      <div class="card">
        <h3>${p.name}</h3>
        <p>${p.description}</p>
        <p class="price">${p.price} €</p>
        <a class="btn" href="product.html?id=${p._id}">Dettagli</a>
      </div>
    `;
  });
})


    .catch((error) => {
      console.error("ERRORE FETCH:", error);
    });
}

loadProducts();

