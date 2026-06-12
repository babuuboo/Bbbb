const API = "https://script.google.com/macros/s/AKfycbyCmWc1544C4Nsm_sPT7HszDoNkQeEVU0UG8TvtYtwiJMtEZ_4kGTw-7hMFNg_TVVZHZw/exec";

fetch(API)
  .then(res => res.json())
  .then(data => {

    const box = document.getElementById("product-list");

    // เรียงลำดับ (ถ้ามี order ในชีต)
    data.sort((a, b) => (a.order || 0) - (b.order || 0));

    data.forEach(p => {
      box.innerHTML += `
        <div class="product" onclick="openDrive('${p.drive}')">
          <img src="${p.img}" alt="${p.name}">
          <h3>${p.name}</h3>
          <p>${p.price} บาท</p>
        </div>
      `;
    });

  })
  .catch(err => {
    console.log("โหลดสินค้าไม่สำเร็จ:", err);
  });

function openDrive(link) {
  window.open(link, "_blank");
}
