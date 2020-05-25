<template>
  <div class="add-to-cart">
    <b-btn variant ="outline-info" class="text-white" size ="sm" @click="addItem">Add To Cart</b-btn>
      
  </div>
</template>

<script>
export default {
  name: "AddToCart",
  props: {
    name:String,
    price:String,
    pid:String,
    image:String,
    quantity:Number
    
  },
  data(){
    return{
      product:{
        pName:this.name,
        pImage:this.image,
        pPrice:this.price,
        pId:this.pid,
        pQuantity:1
      }
    }
  },
  methods:{
    addItem(){
      this.$store.commit('addToCart',this.product);
      this.$bvModal.show('cartModal')
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">


</style>
