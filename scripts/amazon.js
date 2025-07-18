import {cart, addToCart} from '../data/cart.js';
import {products, loadProducts} from '../data/products.js'
import { formatCurrency } from './utils/money.js';

// 1. imports should come at top of the file
// 2. the modules need live server to work

loadProducts(renderProductsGrid);


function renderProductsGrid(){

  let productsHTML = ''; //declaring let outside && using accumulator inside forEach loop gets all objects inside same string

  products.forEach((product) => {
      productsHTML +=  //accumulator pattern - loop through an array to add to a reasult - productsHTML
      `
      <div class="product-container">
            <div class="product-image-container">
              <img class="product-image"
                src="${product.image}">
            </div>

            <div class="product-name limit-text-to-2-lines">
              ${product.name}
            </div>

            <div class="product-rating-container">
              <img class="product-rating-stars"
                src="${product.getStarsUrl()}">
              <div class="product-rating-count link-primary">
                ${product.rating.count}
              </div>
            </div>

            <div class="product-price">
              ${product.getPrice()}
            </div>

            <div class="product-quantity-container">
              <select>
                <option selected value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </div>

            ${product.extraInfoHTML()} 

            <div class="product-spacer"></div>

            <div class="added-to-cart">
              <img src="images/icons/checkmark.png">
              Added
            </div>

            <button 
            class="add-to-cart-button button-primary js-add-to-cart" 
            data-product-id="${product.id}"> 
              Add to Cart
            </button>
          </div>
      `;

      // console.log(productsHTML);

      document.querySelector('.js-products-grid').innerHTML = productsHTML;

      function updateCartQuantity() {
          let cartQuantity = 0;

              cart.forEach((cartItem) => {
                  cartQuantity += cartItem.quantity
              })
              

              document.querySelector('.js-cart-quantity').innerHTML = cartQuantity
      }

      document.querySelectorAll('.js-add-to-cart').forEach((button) => {
          button.addEventListener("click", () => {
              // console.log('Added product');
              const productId = button.dataset.productId; 

              addToCart(productId);
              updateCartQuantity()
          
              // console.log(cartQuantity)
              // console.log(cart);
          
          });
      });

  });
}
