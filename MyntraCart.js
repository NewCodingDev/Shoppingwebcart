<<<<<<< HEAD
let itemsContainerElement = document.querySelector('.items-container');

let innerHTML = ``;

const items = 
[ {id : `001`,
  item_img: `Myntra Assets/Mens-Tshirt/asset 3.jpeg`,
  rating: {
    stars: 4.1,
    reviews: `9.1k`
  },
  company_Name: `Roadster`,
  item_Name: `Solid Polo Collar T-shirt`,
  current_Price: `399`,
  original_Price: `999`,
  discount: `68`
},

{id : `002`,
  item_img: `Myntra Assets/Mens-Tshirt/asset 5.jpeg`,
  rating: {
    stars: 4.3,
    reviews: `6.3k`
  },
  company_Name: `H&M`,
  item_Name: `Regular Fit T-shirt`,
  current_Price: `319`,
  original_Price: `399`,
  discount: `20`
},

{id : `003`,
  item_img: `Myntra Assets/Mens-Tshirt/asset 7.jpeg`,
  rating: {
    stars: 4.2,
    reviews: `3k`
  },
  company_Name: `Stormborn`,
  item_Name: `Pure Cotton Oversized T-shirt`,
  current_Price: `539`,
  original_Price: `999`,
  discount: `46`
},

{id : `004`,
  item_img: `Myntra Assets/Mens-Tshirt/asset 5.jpeg`,
  rating: {
    stars: 4.5,
    reviews: `340`
  },
  company_Name: `Puma`,
  item_Name: `Cotton Logo Outdoor Tank`,
  current_Price: `439`,
  original_Price: `1099`,
  discount: `60`,
},

{id : `005`,
  item_img: `Myntra Assets/Mens-Tshirt/asset 8.jpeg`,
  rating: {
    stars: 4.3,
    reviews: `6.3k`
  },
  company_Name: `H&M`,
  item_Name: `Men Cotton Regular Fit T-shirt`,
  current_Price: `319`,
  original_Price: `399`,
  discount: `20`
},

{id : `006`,
  item_img: `Myntra Assets/Mens-Tshirt/asset 12.jpeg`,
  rating: {
    stars: 4.3,
    reviews: `2.9k`
  },
  company_Name: `Stormborn`,
  item_Name: `Oversized Pure Cotton T-shirt`,
  current_Price: `549`,
  original_Price: `999`,
  discount: `45`
},

{id : `007`,
  item_img: `Myntra Assets/Mens-Tshirt/asset 6.jpeg`,
  rating: {
    stars: 4.1,
    reviews: `11k`
  },
  company_Name: `Roadster`,
  item_Name: `Henley Neck Cotton Pure Cotton Tshirt`,
  current_Price: `314`,
  original_Price: `899`,
  discount: `65`
},

{id : `008`,
  item_img: `Myntra Assets/Mens-Tshirt/asset 28.jpeg`,
  rating: {
    stars: 4.2,
    reviews: `5.6k`
  },
  company_Name: `Maniac`,
  item_Name: `Printed Oversized T-shirt`,
  current_Price: `451`,
  original_Price: `1659`,
  discount: `71`
},

{id : `009`,
  item_img: `Myntra Assets/Mens-Tshirt/asset 17.jpeg`,
  rating: {
    stars: 4.4,
    reviews: `542`
  },
  company_Name: `Puma`,
  item_Name: `Cotton Logo Printed T-shirt`,
  current_Price: `604`,
  original_Price: `1099`,
  discount: ``,
},
]

items.forEach(item => innerHTML += `<a href="#" class="item-container">
                <img class="product-img" src="${item.item_img}" alt="Product image">
                  <div class="rating">${item.rating.stars} ⭐️| ${item.rating.reviews}</div>
                  <div class="company-name">${item.company_Name}</div>
                  <div class="item-name">${item.item_Name}</div>
                  <div class="price-container">
                    <span class="current-price">Rs. ${item.current_Price}</span>
                    <span class="original-price">Rs.${item.original_Price}</span>
                    <span class="discount">(${item.discount}%) OFF</span>
                  </div>
                 <button class="addbag-btn">Add to Bag</button>
                </a> ` )


=======
let itemsContainerElement = document.querySelector('.items-container');

let innerHTML = ``;

const items = 
[ {id : `001`,
  item_img: `Myntra Assets/Mens-Tshirt/asset 3.jpeg`,
  rating: {
    stars: 4.1,
    reviews: `9.1k`
  },
  company_Name: `Roadster`,
  item_Name: `Solid Polo Collar T-shirt`,
  current_Price: `399`,
  original_Price: `999`,
  discount: `68`
},

{id : `002`,
  item_img: `Myntra Assets/Mens-Tshirt/asset 5.jpeg`,
  rating: {
    stars: 4.3,
    reviews: `6.3k`
  },
  company_Name: `H&M`,
  item_Name: `Regular Fit T-shirt`,
  current_Price: `319`,
  original_Price: `399`,
  discount: `20`
},

{id : `003`,
  item_img: `Myntra Assets/Mens-Tshirt/asset 7.jpeg`,
  rating: {
    stars: 4.2,
    reviews: `3k`
  },
  company_Name: `Stormborn`,
  item_Name: `Pure Cotton Oversized T-shirt`,
  current_Price: `539`,
  original_Price: `999`,
  discount: `46`
},

{id : `004`,
  item_img: `Myntra Assets/Mens-Tshirt/asset 5.jpeg`,
  rating: {
    stars: 4.5,
    reviews: `340`
  },
  company_Name: `Puma`,
  item_Name: `Cotton Logo Outdoor Tank`,
  current_Price: `439`,
  original_Price: `1099`,
  discount: `60`,
},

{id : `005`,
  item_img: `Myntra Assets/Mens-Tshirt/asset 8.jpeg`,
  rating: {
    stars: 4.3,
    reviews: `6.3k`
  },
  company_Name: `H&M`,
  item_Name: `Men Cotton Regular Fit T-shirt`,
  current_Price: `319`,
  original_Price: `399`,
  discount: `20`
},

{id : `006`,
  item_img: `Myntra Assets/Mens-Tshirt/asset 12.jpeg`,
  rating: {
    stars: 4.3,
    reviews: `2.9k`
  },
  company_Name: `Stormborn`,
  item_Name: `Oversized Pure Cotton T-shirt`,
  current_Price: `549`,
  original_Price: `999`,
  discount: `45`
},

{id : `007`,
  item_img: `Myntra Assets/Mens-Tshirt/asset 6.jpeg`,
  rating: {
    stars: 4.1,
    reviews: `11k`
  },
  company_Name: `Roadster`,
  item_Name: `Henley Neck Cotton Pure Cotton Tshirt`,
  current_Price: `314`,
  original_Price: `899`,
  discount: `65`
},

{id : `008`,
  item_img: `Myntra Assets/Mens-Tshirt/asset 28.jpeg`,
  rating: {
    stars: 4.2,
    reviews: `5.6k`
  },
  company_Name: `Maniac`,
  item_Name: `Printed Oversized T-shirt`,
  current_Price: `451`,
  original_Price: `1659`,
  discount: `71`
},

{id : `009`,
  item_img: `Myntra Assets/Mens-Tshirt/asset 17.jpeg`,
  rating: {
    stars: 4.4,
    reviews: `542`
  },
  company_Name: `Puma`,
  item_Name: `Cotton Logo Printed T-shirt`,
  current_Price: `604`,
  original_Price: `1099`,
  discount: ``,
},
]

items.forEach(item => innerHTML += `<a href="#" class="item-container">
                <img class="product-img" src="${item.item_img}" alt="Product image">
                  <div class="rating">${item.rating.stars} ⭐️| ${item.rating.reviews}</div>
                  <div class="company-name">${item.company_Name}</div>
                  <div class="item-name">${item.item_Name}</div>
                  <div class="price-container">
                    <span class="current-price">Rs. ${item.current_Price}</span>
                    <span class="original-price">Rs.${item.original_Price}</span>
                    <span class="discount">(${item.discount}%) OFF</span>
                  </div>
                 <button class="addbag-btn">Add to Bag</button>
                </a> ` )


>>>>>>> e383eb2 (cart commit)
itemsContainerElement.innerHTML = innerHTML;