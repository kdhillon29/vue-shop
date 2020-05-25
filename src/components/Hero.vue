<template>
      <div class="hero"> 
        <!-- <b-jumbotron header="Vue Shop" lead =" A simple E-commerce in Vue."> 
         
        
        <template v-slot:header>Vue Shop </template>

    <template v-slot:lead>
     A simple E-commerce in Vue.
    </template> 
     </b-jumbotron> -->
        
      <b-jumbotron fluid bg-variant="primary" class="vh-100 " > 
         <b-row  class="h-100 justify-content-center align-items-center">  
        <b-col  > 
        <!-- <template v-slot:header>Vue Shop </template>

    <template v-slot:lead>
     A simple E-commerce in Vue.
    </template> -->
       <h1 class="display-5">Vue Shop</h1>
       <p class="lead"> A simple E-commerce in Vue.   </p>
       <p>For more information visit website</p>

    <!-- <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos numquam tempora, iure delectus totam minus quam aperiam ratione dolores
       magni voluptates ut necessitatibus odio ipsum fuga, voluptas ab praesentium nihil?
    </p> -->

    <b-button variant="primary" href="#">Products</b-button>
    <b-button variant="success" href="#">Explore</b-button>

    </b-col > 
    <b-col > 
      <div class="graphic">
                    <img src="/img/svg/graphic.svg" alt="">
                </div>
      </b-col > 
      </b-row>
  </b-jumbotron>
   </div>
        <!-- <div class="container h-100">
          <div class="row h-100 justify-content-center align-items-center">
            <div class="col-5">
              <div class="hero-content">
                <h1 class="hero-title">
                  Vue Shop For Developers
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos numquam tempora, iure delectus totam minus quam aperiam ratione dolores magni voluptates ut necessitatibus odio ipsum fuga, voluptas ab praesentium nihil?
                </p>
                <div class="hero-btn mt-5">
                    <button class="btn custom-btn btn-info mr-4">Explore</button>
                    <button class="btn custom-btn btn-outline-secondary">Products</button>
                </div>
              </div>
            </div>
            <div class="col-7">
                <div class="graphic">
                    <img src="/img/svg/graphic.svg" alt="">
                </div>
            </div>
          </div>
        </div>
     
   </b-jumbotron>
  -->
</template>

<script>
export default {
  name: "Hero",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .hero{
    padding-top: 2rem;
    width: 100%;
    height: 500px;
    text-align: left;
   // background: linear-gradient(90deg, #d53369 0%, #daae51 100%) !important;
    background: rgb(63,94,251);
background: radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%);
  };
  .bg-primary{
    background: linear-gradient(90deg, #efd5ff 0%, #515ada 100%);
//      background: rgb(63,94,251) !important;
// background: radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%) !important;
   // background-color: #659DBD !important;
  }

</style>
