import {createStore} from 'vuex'
import products from './Modules/products.js'
import cartItems from './Modules/cart.js';
import user from './Modules/user.js';
const store=createStore({
    modules:{
    prods:products,
   cart:cartItems,
   user:user
    }
});
export default store;
  
  