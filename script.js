const API = "https://script.google.com/macros/s/AKfycbwn5O2T57lvmM4P8log2rjs6MjJw-84pcL7lgQQRkbX96faHDjH77n9CbbmE7oQ9t_B/exec";

let allProducts = [];

fetch(API)
  .then(res => res.json())
  .then(data => {
    allProducts = data;

    allProducts.sort((a, b) => (a.order || 0) - (b.order || 0));

    renderProducts(allProducts);
  })
  .catch(err => console.log(err));

function renderProducts(products){
  const box = document.getElementById("product-list");
  box.innerHTML = "";

  products.forEach(p => {
    box.innerHTML += `
      <div class="product" onclick="openDrive('${p.drive}')">
        <img src="${p.img}">
        <h4>${p.name}</h4>
        <p>${p.price} บาท</p>
      </div>
    `;
  });
}

/* 🔥 FILTER หมวดหมู่ */
function filterCategory(cat){

  if(cat === "all"){
    renderProducts(allProducts);
    return;
  }

  const filtered = allProducts.filter(p =>
    p.category === cat
  );

  renderProducts(filtered);
}

function openDrive(link){
  window.open(link, "_blank");
}
