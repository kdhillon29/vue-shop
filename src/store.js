
import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)
let cart =window.localStorage.getItem('cart');
export default new Vuex.Store({
 
   state:{
       count:0,
       cart: cart?JSON.parse(cart):[],

       totalPrice:0
   },
   getters:{
       totalPrice(state){
           let total =0;
           state.cart.forEach(item=>{
            console.log('total price',total);
               total+=item.totalPrice;
           })
           console.log('total price',total);
            state.totalPrice=total;
            return state.totalPrice

       }

   },
   mutations:{
       addToCart(state,item){
       
           let found = state.cart.find(product=>product.pId == item.pId)
           let index = state.cart.findIndex(product=>product.pId == item.pId)
           if(found){
            console.log('found',found.pName)
                 found.pQuantity++;
                 let totalPrice = parseInt(found.pPrice)*found.pQuantity;
               found.totalPrice =totalPrice;
               Vue.set(state.cart, index, found)
              // state.cart[index]=found;
               
            
           }
           else {console.log('no found')
             item.pQuantity=1;
               state.cart.push(item);
                state.cart.forEach(item => {
                let totalPrice = parseInt(item.pPrice)*item.pQuantity;
                item.totalPrice =totalPrice;
               });
            }
            console.log('cart add is ', state.cart);
        // console.log('id is ',item.pId)
         this.commit('saveCart')
       },

       saveCart(state){
           window.localStorage.setItem('cart',JSON.stringify(state.cart))

       },
       removeFromCart(state,item){
         // let index=  state.cart.findIndex(product=>product.pId == id);
         let index=state.cart.indexOf(item)
          state.cart.splice(index,1);
          this.commit('saveCart')
          console.log('cart is ', state.cart);
       },
       updateCartQuantity(state,item){
           console.log('id is',item.id);
           console.log('value is',item.e);
           let found = state.cart.find(product=>product.pId == item.id)
           let index = state.cart.findIndex(product=>product.pId == item.id)
           if(found){
               if(item.e < 0)item.e=1;
               found.pQuantity=item.e
               let totalPrice = parseInt(found.pPrice)*found.pQuantity;
               found.totalPrice =totalPrice;
               Vue.set(state.cart, index, found)
               this.commit('saveCart')
               console.log('found is',found);
           }
           else{
               console.log('uanble to update')
           }
           

       }
   }


})