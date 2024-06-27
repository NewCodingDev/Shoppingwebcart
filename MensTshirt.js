let bagItems = [];

onLoad();

function onLoad() {
  let bagItemsStr = localStorage.getItem('bagItems');
  bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [] ;
  displayBagIcon();
  displayItemsOnHomePage();
}

function addToBag(itemId) {
  bagItems.push(itemId);
  localStorage.setItem('bagItems', JSON.stringify(bagItems))
  displayBagIcon();
  displayCartItems();
}

function displayBagIcon() {
  let bagItemCountElement = document.querySelector('.bag-item-count');
  if (bagItems.length > 0) {
    bagItemCountElement.style.visibility = 'visible';
    bagItemCountElement.innerText = bagItems.length;
  } else {
    bagItemCountElement.style.visibility = 'hidden';
  }
}

function displayItemsOnHomePage() {
  let itemsContainerElement = document.querySelector('.items-container');

  if (!itemsContainerElement){
    return;
  }

let innerHTML = ``;


items.forEach(item => innerHTML += `<div href="#" class="item-container">
  <a href = "#"><img class="product-img" src="${item.item_img}" alt="Product image"></a>
    <div class="rating">${item.rating.stars} ⭐️| ${item.rating.reviews}</div>
    <div class="company-name">${item.company_Name}</div>
    <div class="item-name">${item.item_Name}</div>
    <div class="price-container">
      <span class="current-price">Rs. ${item.current_Price}</span>
      <span class="original-price">Rs.${item.original_Price}</span>
      <span class="discount">(${item.discount}%) OFF</span>
    </div>
  <button class="addbag-btn" onclick="addToBag(${item.id})">Add to Bag</button>
  </div>` );


itemsContainerElement.innerHTML = innerHTML;
}





