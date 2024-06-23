let cartItemObjects;

onLoad();

function onLoad() {
    displayCartItems();
    loadCartItemsObj();
}
console.log(bagItems);

function loadCartItemsObj(){

    cartItemObjects = bagItems.map(itemId => {
        for (let i=0; i<items.length; i++){
            if (itemId == items[i].id) {
                    return items[i];
            }
        }
    })
    console.log(cartItemObjects);
}

function displayCartItems() {
    let cartItems = document.querySelector('.product-container');

    cartItems.innerHTML = `<div class="product-left">
                <a href=""><img src="Myntra Assets/Mens-Tshirt/asset 3.jpeg" alt=""></a>
              <input type="checkbox" class="slc-btn">
              </div>
              <div class="product-right">
                <div class="company-name">Roadster</div>
                  <div class="item-name" style="color: #282c3f;">Men Maroon Solid Polo Collar T-shirt</div>
                  <div class="sold-by">Sold by:KAPOOR COTSYN EXPORTS</div>
                  <div class="price-container">
                  <span class="company-name" style="background-color: #d4d5d9b6; border-radius: 5px; padding-right: 2px;">Size: L</span>
                  <span class="company-name" style="background-color: #d4d5d9b6; border-radius: 5px; padding-right: 2px;">Qty: 1</span>
                  </div>
                  <div class="price-container">
                    <span class="current-price">Rs. 449</span>
                    <span class="original-price">Rs.999</span>
                    <span class="discount">(55%) OFF</span>
                  </div>
                  <div class="cart-promises">
                    <img src="Myntra Assets/MyntraCart/asset 99.svg" alt="">
                    <strong>14 days
                    <small>retrun available</small></strong>
                  </div>
              </div>`

};

function generateItemHtml(item){

};