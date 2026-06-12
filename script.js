const API = "https://script.google.com/macros/s/AKfycbwn5O2T57lvmM4P8log2rjs6MjJw-84pcL7lgQQRkbX96faHDjH77n9CbbmE7oQ9t_B/exec";

let allProducts = [];

fetch(API)
.then(res => res.json())
.then(data => {

console.log("🔥 DATA FROM SHEET =", data);

allProducts = data;

renderProducts(allProducts);

})
.catch(err => {
console.log("❌ API ERROR =", err);
});

function renderProducts(products){

console.log("🧩 render =", products);

document.getElementById("product-list").innerHTML =
products.map(p => `
<div class="card" onclick="openDrive('${p.drive}')">
<img src="${p.img}" onerror="this.style.display='none'">
<h3>${p.name || 'ไม่มีชื่อ'}</h3>
<p>${p.price || '-'} บาท</p>
</div>
`).join("");
}

function filterCategory(cat){

console.log("🎯 filter =", cat);

if(cat === "all"){
renderProducts(allProducts);
return;
}

const result = allProducts.filter(p => p.category === cat);

console.log("📦 filtered =", result);

renderProducts(result);
}

function openDrive(link){
window.open(link,"_blank");
}
