document.getElementById("getBtn").addEventListener("click", function () {
  const itemPrices = document.getElementById("item-price").innerText;
  const totalPrices = document.getElementById("total-price");

  const total = document.getElementById("total");
  console.log(total.innerText);

  totalPrices.innerText = itemPrices;
  total.innerText = totalPrices;

  alert("One item added");
});

document.getElementById("getBtn2").addEventListener("click", function () {
  const itemPrices = document.getElementById("item-price").innerText;
  const itemPrice = parseFloat(itemPrices);
  const itemPrices2 = document.getElementById("item-price2").innerText;
  const itemPrice2 = parseFloat(itemPrices2);
  const totalPrices = document.getElementById("total-price");

  const prevPrice = itemPrice + itemPrice2;
  totalPrices.innerText = prevPrice;

  alert("One item added");
});
document.getElementById("getBtn3").addEventListener("click", function () {
  const itemPrices = document.getElementById("item-price").innerText;
  const itemPrice = parseFloat(itemPrices);
  const itemPrices2 = document.getElementById("item-price2").innerText;
  const itemPrice2 = parseFloat(itemPrices2);
  const itemPrices3 = document.getElementById("item-price3").innerText;
  const itemPrice3 = parseFloat(itemPrices3);
  const totalPrices = document.getElementById("total-price");

  const prevPrice = itemPrice + itemPrice2 + itemPrice3;
  console.log(prevPrice);
  totalPrices.innerText = prevPrice;

  alert("One item added");
});

function modal() {
  const modalShow = document.getElementById("modal-hide");
   modalShow.style.display = "block"
}
