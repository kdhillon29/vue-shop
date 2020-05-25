<template>
  <div class="products" id="products">
      <div class="container">
          <h2 class="text-center p-1">Our Products List</h2>
          <div class="row d-flex justify-content-between">
              
              <div class=" col-6 col-md-3 offset-md-1 my-2 " v-for="(product,index) in products " :key="index">
                  <div class="card product-item">

                        <carousel :perPage="1">
                          <slide v-for="(image, index) in product.images" :key="index">
                                <img :src="image" class="card-img-top" alt="..." width="80px" height="100px">
                          </slide>
                        </carousel>
                
                        <div class="card-body bg-info text-white">
                          <div class="d-flex p-1 justify-content-between">
                            <h6 class="card-titlepx-1">{{ product.name }}</h6>
                            <!-- <h5 class="card-priceS">{{ product.price }}</h5> -->
                            <h6 class="card-priceS">{{ product.price | currency }}</h6>

                          </div>
                             <!-- <b-btn variant="primary" bg-variant ="success">Add to cart</b-btn> -->
                           <div class ="float-right">

                            <add-to-cart 
                                :image="product.images[0]"
                                :pid="product.id"
                                :price="product.price"
                                :name="product.name"
                                :quantity=1
                                >
                            </add-to-cart>
                            </div>
                        </div>
                    </div>
              </div>

          </div>
      </div>
    
  </div>
</template>

<script>
import {fb,db} from '../firebase';


export default {
  //name: "Products-list",
  name:'ProdList',
  props: {
    msg: String
  },

data(){
    return {
        products: [],
     
    }
  },

  methods:{

    getImage(images){
        if(!images[0]) return 'no image';
      else return images[0];
    }

  },

  firestore(){
      console.log('firebase is',fb);
      console.log('products are',this.products)
      return {
        products: db.collection('products'),
      }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .products{
        margin-top: 7rem;
        background: #f2f2f2;
        padding-bottom: 3rem;
    };
    .bg-info{
      background-color: rgb(126, 121, 133) !important;
    }
</style>
