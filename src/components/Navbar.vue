<template>
  <div class="">
    <div>
  <b-navbar toggleable="lg" type="dark" fixed="top"   variant="info">
    <b-navbar-brand href="#">Vue Shop</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item ><router-link to="/">Home</router-link></b-nav-item>
        <b-nav-item ><router-link to="/products">Products</router-link></b-nav-item>
        <b-nav-item  ><router-link to="/about">About</router-link></b-nav-item>
        <b-nav-item  ><router-link to="/admin">Admin</router-link></b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form> 
          <b-nav-item > <b-button size="sm" class="mt-1"  v-b-modal.modal-1>Login</b-button></b-nav-item>
           <b-nav-item >
              <mini-cart> </mini-cart>
              <b-button size="sm"  @click="$bvModal.show('cartModal')" 
              class="mt-1 text-white" > <b-icon icon="heart" ></b-icon>cart
              </b-button>
             
    

              </b-nav-item>
        
 <!-- <a class="btn btn-outline-success my-2 my-sm-0" data-toggle="modal" data-target="#login">Get Start</a> -->


        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template v-slot:button-content>
            <em><b-button text="blue"  pill variant="outline-secondary">{{$user.name}}</b-button></em>
          </template>
           
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
      
  </div>
</template>

<script>
export default {
  name: "Navbar",
  props: {
    
  },
  data(){
      return {
          user:null,
          sticky:true,
      }
  },
created(){
    //this.$user ="king"

      }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">


</style>
