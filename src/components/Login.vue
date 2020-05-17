<template>
  
<b-modal id="modal-1" title="Sign In">
  
    <!-- <div class="modal-dialog modal-dialog-centered" role="document"> -->
        <div class="modal-content">
          <div class="modal-body">
          
  <b-card no-body>
     <b-alert v-model="showDismissibleAlert" variant="danger" dismissible>
        <h4 class="alert-heading">Well done!</h4>
        <b-list-group>
  <b-list-group-item v-for="(error,index) in errors" :key="index" variant="danger">{{error}}</b-list-group-item>
      </b-list-group>
    </b-alert>
     <b-overlay :show="showOverlay" rounded="sm">
    <b-tabs pills card justified >
      <b-tab title="Login" active ><b-card-text>
      
              <div
                class="tab-pane fade show active"
                id="pills-login"
                role="tabpanel"
                aria-labelledby="pills-login-tab"
              >
                <h5 class="text-center">Login Please</h5>
                <div class="form-group">
                  <label for="exampleInputEmail1">Email address</label>
                  <input
                    type="email"
                    v-model="email"
                    @focus="showDismissibleAlert=false"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                  />
                  <small class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">Password</label>
                  <input
                    type="password"
                    @keyup.enter="login"
                    v-model="password"
                    @focus="showDismissibleAlert=false"
                    class="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                  />
                </div>
                <div class="form-group">
                  <button class="btn btn-primary" @click="login">Login</button>
                </div>
                </div>
                </b-card-text></b-tab>
      <b-tab title="Register" ><b-card-text><h3> register </h3>
        <div class="tab-pane fade show"
                id="pills-register"
                role="tabpanel"
                aria-labelledby="pills-register-tab"
              >
                <h5 class="text-center">Create New Account</h5>

                <div class="form-group">
                  <label for="name">Your name</label>
                  <input
                    type="text"
                    v-model="name"
                    class="form-control"
                    id="name"
                    placeholder="Your nice name"
                  />
                </div>

                <div class="form-group">
                  <label for="email">Email address</label>
                  <input
                    type="email"
                    v-model="email"
                    class="form-control"
                    id="email"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                  />
                </div>
                <div class="form-group">
                  <label for="password">Password</label>
                  <input
                    type="password"
                    v-model="password"
                    class="form-control"
                    id="password"
                    placeholder="Password"
                  />
                </div>

                <div class="form-group">
                  <button v-if="!isSubmitting && !isSuccess"  class="btn btn-primary" @click="register">Signup</button>
                  <b-button v-else-if="isSubmitting" variant="primary" disabled>
    <b-spinner small type="grow"></b-spinner>
      Signing up...
  </b-button>
  <b-button v-else variant="success" disabled>
    <i class="fas fa-check-circle"></i> Done
     
  </b-button>
                </div>
              </div></b-card-text></b-tab>
    </b-tabs>
     </b-overlay>
  </b-card>
</div>
        </div>    
      <!-- </div> -->
  </b-modal>
    <!-- Modal -->
    <!-- <div
      class="modal fade"
      id="login"
      tabindex="-1"
      role="dialog"
      aria-labelledby="loginTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-body">
            <ul class="nav nav-fill nav-pills mb-3" id="pills-tab" role="tablist">
              <li class="nav-item">
                <a
                  class="nav-link active"
                  id="pills-home-tab"
                  data-toggle="pill"
                  href="#pills-login"
                  role="tab"
                  aria-controls="pills-login"
                  aria-selected="true"
                >Login</a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  id="pills-register-tab"
                  data-toggle="pill"
                  href="#pills-register"
                  role="tab"
                  aria-controls="pills-register"
                  aria-selected="false"
                >Signup</a>
              </li>
            </ul>

            <div class="tab-content" id="pills-tabContent">
              <div
                class="tab-pane fade show active"
                id="pills-login"
                role="tabpanel"
                aria-labelledby="pills-login-tab"
              >
                <h5 class="text-center">Login Please</h5>
                <div class="form-group">
                  <label for="exampleInputEmail1">Email address</label>
                  <input
                    type="email"
                    v-model="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                  />
                  <small class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">Password</label>
                  <input
                    type="password"
                    @keyup.enter="login"
                    v-model="password"
                    class="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                  />
                </div>

                <div class="form-group">
                  <button class="btn btn-primary" @click="login">Login</button>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="pills-register"
                role="tabpanel"
                aria-labelledby="pills-register-tab"
              >
                <h5 class="text-center">Create New Account</h5>

                <div class="form-group">
                  <label for="name">Your name</label>
                  <input
                    type="text"
                    v-model="name"
                    class="form-control"
                    id="name"
                    placeholder="Your nice name"
                  />
                </div>

                <div class="form-group">
                  <label for="email">Email address</label>
                  <input
                    type="email"
                    v-model="email"
                    class="form-control"
                    id="email"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                  />
                </div>
                <div class="form-group">
                  <label for="password">Password</label>
                  <input
                    type="password"
                    v-model="password"
                    class="form-control"
                    id="password"
                    placeholder="Password"
                  />
                </div>

                <div class="form-group">
                  <button class="btn btn-primary" @click="register">Signup</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   -->
   
      
 
   
        
    
  

  
</template>

<script>
 import {fb} from '../firebase';
//  import jQuery from 'jquery';
//  let $=jQuery;
export default {
  name: "Login",
  props: {
    
  },
  data() {
    return {
      name: null,
      email: null,
      password: null,
      isSubmitting:false,
      isSuccess:false,
      userLogin: null,
      showOverlay:false,
      showDismissibleAlert:false,
      errors:[]
    
    };
  },
  created(){
 console.log('global user is',this.$user.name);
    //  this.$user.name="king";
    //   console.log('global user is',this.$user.name);
  },
  methods: {
    login:function(){
      this.errors=[];
      if(!this.email||!this.password){
        this.errors.push('Email or Password field Empty');
        this.showDismissibleAlert=true;
        return;
          }

        this.showOverlay=true;
          console.log('name is ',this.$user.name)
          this.$user.name="Singh";
      fb.auth()
        .signInWithEmailAndPassword(this.email, this.password)
        
        .then(() => {
          console.log('in promise')
          // console.log('user is ',user)
          //  console.log('user email ',user.email)
          // console.log('global user is ',this.$user)
          //    this.$user=user.email;
          //    console.log('global user is ',this.$user)
         //  $("#login").modal("hide");
         this.showOverlay=false;
           this.$bvModal.hide("modal-1")
          this.$router.replace("admin");
        })
        .catch((error)=> {
         // this.showOverlay=false;
          console.log('in catch')
          // Handle Errors here.
           this.showOverlay=false;
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log('error is',errorMessage);
          
          if (errorCode === "auth/wrong-password") {
          //  alert("Wrong password.");
            this.errors.push("wrong password")
          } else {
            alert(errorMessage);
            this.errors.push(errorMessage)
          }
          this.showDismissibleAlert=true;
          console.log(error);
         
          return


        });
    fb.auth().onAuthStateChanged(function(user) {
                   if (user) {
    // User is signed in.
    console.log('in auth changed')
    this.showOverlay=false;
    var email = user.email;
     console.log('email is',email)
    //  console.log('globsl usr is',this.$user);
    // this.$user=user.email;
    //  console.log('globsl usr now  is',this.$user);
  console.log('userLogin is',this.userLogin);
  this.userLogin=user;

  console.log('updated is ',this.userLogin)
    // console.log('user is',this.$user);
    //return email;
    
    // var emailVerified = user.emailVerified;
    // var photoURL = user.photoURL;
    // var isAnonymous = user.isAnonymous;
    // var uid = user.uid;
    // var providerData = user.providerData;
    // ...
  } else {
    // User is signed out.
    // ...
    return 'no user'
   // console.log('no user found');
  }
  console.log('global user is',this.$user)
  console.log('userlogin out',this.userLogin.email)

});
 
    },
    register() {
      this.isSubmitting=true;
      fb.auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(user => {
          this.isSuccess=true;
           this.isSubmitting=false;
          setTimeout(()=>{
           
          console.log('user is:',user)
          this.$bvModal.hide("modal-1")
           this.$router.replace("admin");

          },3000)
          
          // $("#login").modal("hide");

          // db.collection("profiles")
          //   .doc(user.user.uid)
          //   .set({
          //     name: this.name
          //   })
          //   .then(function() {
          //     console.log("Document successfully written!");
          //   })
          //   .catch(function(error) {
          //     console.error("Error writing document: ", error);
          //   });

          // this.$router.replace("admin");
        })
        .catch(function(error) {
          // Handle Errors here.
          this.isSubmitting=this.isSuccess=false
          var errorCode = error.code;
          var errorMessage = error.message;
          if (errorCode == "auth/weak-password") {
            alert("The password is too weak.");
          } else {
            alert(errorMessage);
          }
          console.log(error);
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">


</style>
