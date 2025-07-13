import {renderOrderSummary} from './checkout/orderSummary.js';
import { renderPaymentSummary } from './checkout/paymentSummary.js';
import {loadProducts} from '../data/products.js';

// import '../data/cart-class.js';

// import '../data/backend-practice.js';

//giving call back to the 'loadProducts' function using anonymus function to execute at end ~
loadProducts(() => {
    renderOrderSummary();
    renderPaymentSummary();
});

