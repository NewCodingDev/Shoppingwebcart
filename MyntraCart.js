
let cartItemObjects;


onLoad();

function onLoad() {
    loadCartItemsObj();
    displayCartItems();
    displayCartSummary();
    
}

function displayCartSummary() {
  let cartSummaryElement = document.querySelector('.price-details');

  let totalItem = cartItemObjects.length;
  let totalMRP = 0;
  let totalDiscount = 0;

  cartItemObjects.forEach(cartItem => {
    totalMRP += cartItem.original_Price;
    totalDiscount += cartItem.original_Price - cartItem.current_Price;

  })

  let totalPayment = totalMRP - totalDiscount;

  cartSummaryElement.innerHTML = `<div class="coupons-head" style="padding: 20px 0 20px 0 ;">Price details (${totalItem} Item)
            </div>
            <div class="price-row flex">
              <div class="item-name" style="color: #282c3f;">Total MRP</div>
              <div class="item-name" style="color: #282c3f;">₹${totalMRP}</div>
            </div>
            <div class="price-row flex">
              <div class="item-name" style="color: #282c3f;">Discount on MRP</div>
              <span class="discount" style="color: #03a685; font-size: 14px; line-height: 1;">-₹${totalDiscount}</span>
            </div>
            <div class="price-row flex">
              <div class="item-name" style="color: #282c3f;">coupon discount</div>
              <button class="View-btn" style="padding: 0; font-weight: 400; margin-top: -4px;">Apply Coupon</button>
            </div>
            <div class="price-row flex">
              <div class="showmore flex" style="gap: 5px; align-items: center; padding:0;">
                <div class="item-name" style="color: #282c3f;">platform fee</div>
                  <span class="showmore-txt" style="padding-bottom:5px; font-size: 13px;">Know More</span>
                </div>
              
                <span class="discount" style="color: #03a685; font-size: 14px; line-height: 1;">FREE</span>
              </div>
            
            <div class="price-row flex" style="margin: 0;">
              <div class="showmore flex" style="gap: 5px; align-items: center; padding:0;">
                <div class="item-name" style="color: #282c3f;">shipping fee</div>
                  <span class="showmore-txt" style="padding-bottom:4px; font-size: 13px;">Know More</span>
                </div>
                <div class="flex" style="align-items: center;">
                <span class="original-price" style="font-size: 14px;">₹79</span>             
              <span class="discount" style="color: #03a685; font-size: 14px; line-height: 1;">FREE</span></div>
            </div>
            <small>Free shipping for you </small>
          </div>

          <div class="price-row flex">
            <div class="Total-price">Total Amount</div>
            <div class="Total-price">₹${totalPayment}</div>
          </div>

          <div class="place-order-btn">place order</div>`
};

function loadCartItemsObj(){

    cartItemObjects = bagItems.map(itemId => {
        for (let i = 0; i < items.length; i++){
            if (itemId == items[i].id) {
                    return items[i];
            }
        }
    });
    console.log(cartItemObjects);
}

function displayCartItems() {
    let containerElement = document.querySelector('.products-container');
    
    let innerHTML = ``;

    cartItemObjects.forEach(cartItem => {
      innerHTML += generateItemHtml(cartItem);
});
    containerElement.innerHTML = innerHTML;
};

function removeFromCart(itemId) {
  bagItems = bagItems.filter(bagItemId => bagItemId != itemId);
  localStorage.setItem('bagItems', JSON.stringify(bagItems));
  loadCartItemsObj();
  displayBagIcon();
  displayCartItems();
  displayCartSummary();
  
}

function generateItemHtml(item){
  return `<div class="product-container flex">
              <div class="product-left">
                <a href=""><img src="${item.item_img}" alt=""></a>
              <input type="checkbox" class="slc-btn">
              </div>
              <div class="product-right">
                  <div class="company-name">${item.company_Name}</div>
                  <div class="item-name" style="color: #282c3f;">${item.item_Name}</div>
                  <div class="sold-by">Sold by:KAPOOR COTSYN EXPORTS</div>
                  <div class="price-container">
                  <span class="company-name" style="background-color: #d4d5d9b6; border-radius: 5px; padding-right: 2px;">Size: L</span>
                  <span class="company-name" style="background-color: #d4d5d9b6; border-radius: 5px; padding-right: 2px;">Qty: 1</span>
                  </div>
                  <div class="price-container">
                    <span class="current-price">Rs. ${item.current_Price}</span>
                    <span class="original-price">Rs.${item.original_Price}</span>
                    <span class="discount">(${item.discount}%) OFF</span>
                  </div>
                  <div class="cart-promises">
                    <img src="Myntra Assets/MyntraCart/asset 99.svg" alt="">
                    <strong>${item.return_period}
                    <small>return available</small></strong>
                  </div>
                  
                  <div class="remove-product" onclick="removeFromCart(${item.id})">X</div>
                  </div>
                </div>
          <div>`
};

