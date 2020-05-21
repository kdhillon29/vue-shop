<template>
  <div class="admin mt-3">
       <br/>  <br/>  <br/> 
 <div class="page-wrapper default-theme sidebar-bg bg1 toggled"> 
        <a id="show-sidebar"  class="btn btn-sm btn-dark t-admin " href="#">
           <span>Admin</span> <i @click="closeMenu" class="fas fa-bars "></i>
        </a>
        <nav id="sidebar" class="sidebar-wrapper">
            <div class="sidebar-content">
                <!-- sidebar-brand  -->
                <div class="sidebar-item sidebar-brand">
                    <a href="#">Vue Shop</a>
                    <div id="close-sidebar"  name="close" class="t-admin" >
                        <i id="close-sidebar2" @click="closeMenu" name="icon1" class="fas fa-times "></i>
                    </div>
                </div>
                <!-- sidebar-header  -->
                <div class="sidebar-item sidebar-header">
                    <div class="user-pic">
                        <img class="img-responsive img-rounded" src="/img/user.png" alt="User picture">
                    </div>
                    <div class="user-info">
                        <span class="user-name">Jhon
                            <strong>Smith</strong>
                        </span>
                        <span class="user-role"> <em> {{email}}</em> </span>
                        <span class="user-status">
                            <i class="fa fa-circle"></i>
                            <span>Online</span>
                        </span>
                    </div>
                </div>
                <!-- sidebar-search  -->
                <div class="sidebar-item sidebar-search">
                    <div>
                        <div class="input-group">
                            <input type="text" class="form-control search-menu" placeholder="Search...">
                            <div class="input-group-append">
                                <span class="input-group-text">
                                    <i class="fa fa-search" aria-hidden="true"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- sidebar-menu  -->
                <div class=" sidebar-item sidebar-menu">
                   <perfect-scrollbar>
                    <ul>
                           
                        <li class="header-menu">
                            <span>Menu</span>
                        </li>
            
                        <li>
                            <router-link to="/admin/overview">
                                <i class="fa fa-chart-line"></i>
                                <span>Overview</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/admin/products">
                                <i class="fab fa-amazon"></i>
                                <span>Products</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/admin/orders">
                                <i class="fa fa-shopping-cart"></i>
                                <span>Orders</span>
                            </router-link>
                        </li>
                        
                        <li>
                            <router-link to="/admin/profile">
                                <i class="fa fa-user"></i>
                                <span>Profile</span>
                            </router-link>
                        </li>
                        <li>
                            <a href="#" @click="logout()">
                                <i class="fa fa-power-off"></i>
                                <span>Logout</span>
                            </a>
                        </li>
                          
                    </ul>
                    </perfect-scrollbar>
                </div>
                <!-- sidebar-menu  -->
            </div>
       
        </nav>
        <!-- sidebar-content  -->
        <main class="page-content">
            <router-view/>
        </main>
        <!-- page-content" -->
    </div>
    <!-- page-wrapper -->




  </div>
</template>

<script>
// @ is an alias to /src
//import Hero from "@/components/Hero.vue";
import {fb} from '../firebase';

export default {
  name: "Admin",
  data(){
      return{
          name:null,
          email:null,
      }
  },
  components: {
    //Hero
  },
  created(){
        let user = fb.auth().currentUser;
     this.email = user.email;
  },
  mounted(){

 var el = document.querySelector('.page-wrapper');
        var clickHandle= function(event) {
             console.log('click happen',event.target.id);

	// If the clicked element doesn't have the right selector, bail
	if (!event.target.closest('.t-admin')) return;
       
        el.classList.toggle("toggled");
	// Don't follow the link
	event.preventDefault();

	// Log the clicked element in the console
	//console.log(event.target.id);

}
         el.addEventListener('click',clickHandle , false);
         
  
  },
  methods:{
      closeMenu(){
        //   if(e.target.id==='show-sidebar')
       

      },
      logout(){
          fb.auth().signOut()
       .then((user) => {
           console.log('user log out',user);
              this.$router.replace('/');
          })
          .catch((err) =>{
              console.log(err);
           });
      }
  },

  
};
</script>

<style scoped lang="scss">
.ps{
    height:250px;
    margin-right:3px
}
</style>

