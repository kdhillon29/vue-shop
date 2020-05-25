<template>
  <div class="checkout mt-5 vh-100 bg-dark text-light fluid container-fluid">
    
    <div class="d-flex  justify-content-center py-5 bd-highlight "><h3 class="" >Checkout
        <span class="pl-5">   Total :{{$store.getters.totalPrice}}  </span></h3></div>
    <div class="row "> 
        <div class="col-md-8 d-flex  justify-content-center">  
      <b-list-group class=" mx-5 shadow  ">
           
        <b-list-group-item class="d-flex justify-content-between align-items-center"
         v-for="(item,index) in $store.state.cart" :key="index">
                
               <p class="w-25">  <b-img thumbnail  :src="item.pImage" width="75" height="75" alt="Image 1"></b-img>
                  {{item.pName}} </p> 
                   <b-badge variant="info" pill>Price:{{item.pPrice|currency}}</b-badge>
                   
        <b-form-input  size="sm" @change="(e)=>updateQuantity(item.pId,e)" type="number" min="0" max="10"  :value="item.pQuantity"> </b-form-input>
              <b-badge variant="info" >Total :{{item.totalPrice|currency}}</b-badge>   
                  <b-badge @click ="removeItem(item.pId)" variant="danger" >X</b-badge> 
                 </b-list-group-item>
                 
               
                </b-list-group>
                </div>
                <div class="col-md-4">  <h5 >Payment </h5> </div>
             </div>
  </div>
</template>

<script>
console.log('in checkout');
export default {
  name: "CheckOut",
  props: {
    
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
input{
    width:75px
};
.bg-dark{
    background-color: #Bc986A !important;
}

</style>
