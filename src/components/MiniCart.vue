<template>
  <div class="overview">
    <b-modal id="cartModal" :static="true" :lazy="true" ref="cartModal" title="Shopping Cart">
                <p class="my-4">Shopping Cart!</p>
        <b-list-group>
        <b-list-group-item class="d-flex justify-content-between align-items-center"
         v-for="(item,index) in $store.state.cart" :key="index">
    
               <p class="">  <b-img thumbnail fluid :src="item.pImage" width="75" height="75" alt="Image 1"></b-img>
                  {{item.pName}} </p>
                   <b-badge variant="info" pill>Price:{{item.pPrice|currency}}</b-badge>
                   <!-- <b-badge class=""  >{{item.pQuantity}}</b-badge> -->
        <b-form-input  size="sm" @change="(e)=>updateQuantity(item.pId,e)" type="number" min="0" max="10"  :value="item.pQuantity"> </b-form-input>
              <b-badge variant="info" >Total :{{item.totalPrice|currency}}</b-badge>   
              <button type="button" @click ="$store.commit('removeFromCart',item)" class="close" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                          </button>
                  
                 </b-list-group-item>
                 
                 <div class="ml-auto "> <h3> Total :{{$store.getters.totalPrice}} </h3></div>
                </b-list-group>
                 
                   <template v-slot:modal-footer="{ ok, cancel, hide }">
      <b>Custom Footer</b>
      <div class="modal-footer">
                <button type="button" class="btn btn-secondary" @click="ok()">Continue Shopping</button>
                <button type="button" class="btn btn-primary" @click="checkout">Checkout</button>
              </div>
      <!-- Emulate built in modal footer ok and cancel button actions -->
      <!-- <b-button size="sm" variant="success" @click="ok()">
        OK
      </b-button>
      <b-button size="sm" variant="danger" @click="cancel()">
        Cancel
      </b-button>
        Button with custom close trigger value -->
      <b-button size="sm" variant="outline-secondary" @click="hide('forget')">
        Forget it
      </b-button> 
    </template>
                    </b-modal> 
      
  </div>
</template>

<script>
export default {
  name: "MiniCart",
  props: {
    
  },
  data(){
      return{
          //value:null
      }
  },
  methods:{

    checkout(){
        this.$bvModal.hide('cartModal')
    
     this.$router.push('/checkout')  
    },
    // removeItem(id){
    //     this.$store.commit('removeFromCart',id)
    //    // this.value=0;

    // },
    updateQuantity(id,e){
       console.log('id is',id)
        console.log('value is',e)
        this.$store.commit('updateCartQuantity',{id,e})
    
    }

  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
 input{
     width:50px
 }

</style>
