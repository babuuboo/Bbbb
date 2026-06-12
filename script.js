const API = "https://script.google.com/macros/s/AKfycbwn5O2T57lvmM4P8log2rjs6MjJw-84pcL7lgQQRkbX96faHDjH77n9CbbmE7oQ9t_B/exec";

fetch(API)
  .then(res => res.json())
  .then(data => {

    const box = document.getElementById("product-list");

    data.sort((a, b) => (a.order || 0) - (b.order || 0));

    data.forEach(p => {
      box.innerHTML += `
        <div class="product" onclick="openDrive('${p.drive}')">
          <img src="${p.img}">
          <h3>${p.name}</h3>
          <p>${p.price} บาท</p>
        </div>
      `;
    });

  })
  .catch(err => console.log(err));

function openDrive(link) {
  window.open(link, "_blank");
}
