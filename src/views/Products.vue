
/* eslint-disable */


<template>
  
<div class="products">
      <div class="container">
          
        <div class="intro h-100">
            <div class="row  justify-content-center ">
             <div class="col-md-6">
            <div class=" bg-info p-2  ">
            <h3 class="d-inline">Products Page</h3>
            <div class ="float-right">  
             <b-button   class="" :pressed="true" v-show="!showAdd" @click="$refs['prod-modal'].show()"
              variant ="primary">Add Product</b-button>
           <b-button size="sm" class="mb-2 mr-2" v-show="showAdd"  @click="showAdd=!showAdd" variant ="link">Cancel</b-button>
           </div>
           </div>
                    
                    <div class="addproduct" v-show="showAdd">
               <!-- <b-card-group deck> -->
      <!-- <b-card
        border-variant="primary"
        header="Add Product"
        header-bg-variant="primary"
        header-text-variant="white"
        bg-variant="light"
        align="center"
      >
      
        <b-card-text>
        <div>
    <b-form @submit.prevent="onSubmit" @reset="onReset" v-if="show">
      <b-form-group id="prodname" label="Product Name" label-for="prodname">
        <b-form-input
          id="prodname"
          v-model="product.name"
          required
          placeholder="Product name"
          class="mb-2"
        ></b-form-input>
        </b-form-group>
        <b-form-group id="input2" label="Price:" label-for="input-2">
        <b-form-input
          id="prodprice"
          type="number"
           :state="nameState"
      aria-describedby="input-live-help input-live-feedback"
          v-model="product.price"
          required
          placeholder="price"
        ></b-form-input>
        <b-form-invalid-feedback id="input-live-feedback">
           price must be greater than 10
    </b-form-invalid-feedback>
     

      </b-form-group>
      <b-button class="mr-2" type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
          </b-form>
          </div>
         </b-card-text>
         </b-card> -->
         <div>
    
    </div>
    </div>
    <div class ="mt-2 ">
    <b-table
     show-empty
      small
      stacked="md"
    
       :fields="fields"
     
    
        :items="products" >
        <template v-slot:cell(tags)="data">
        {{ data.value.toString() }}
      </template>
        <template v-slot:cell(actions)="row">
        <b-button size="sm" @click="editProduct(row.item)" class="mr-1">
          Edit
        </b-button>
       <b-button size="sm" @click="deleteProduct(row.item)" class="mr-1">
          Delete
        </b-button>
      </template>

        <!-- <template v-slot:cell(Actions)="">
            <b-button variant="danger">Delete</b-button> -->
        <!-- <b class="text-info">{{ data.value.last.toUpperCase() }}</b>, <b>{{ data.value.first }}</b> -->
      <!-- </template> -->
    </b-table>
  </div>
  <div>
  <!-- <b-button v-b-modal.modal-1>Launch demo modal</b-button> -->

  <b-modal id="prod-modal" header-bg-variant="dark" header-text-variant="light"
   ref="prod-modal" @hidden="cancelModal"  centered size="lg" hide-footer>
       
       <template v-slot:modal-title >
         <div class="d-block float-right text-center">
      <h3>{{modalTitle}}</h3>
    </div>
        <!-- // <p class ="text-center">{{modalTitle}} </p> -->
    </template>
      
       <b-container>  
         
           
     <b-overlay :show="showOverlay" rounded="sm">
         
    <b-form @submit.prevent="onSubmit"  v-if="show">
      <b-form-row>  
        <b-col cols="8">
      <b-form-group id="prodname" label="Product Name" label-for="prodname">
        <b-form-input
          id="prodname"
          v-model="product.name"
          required
          placeholder="Product name"
          class="mb-2"
        ></b-form-input>
        </b-form-group>
        <b-form-group id="proddesc" label="Product Description" label-for="proddesc">
        <vue-editor v-model="product.desc"></vue-editor>
        <!-- <b-form-textarea
      id="textarea"
      v-model="product.desc"
      placeholder="Enter Description"
      rows="3"
      max-rows="6"
    ></b-form-textarea> -->
        </b-form-group>
    </b-col>
       <b-col cols="4">
        <b-form-group id="prodprice" label="Price" label-for="prodprice">
        <b-form-input
          id="prodprice"
          type="number"
           :state="nameState"
      aria-describedby="input-live-help input-live-feedback"
          v-model="product.price"
          required
          placeholder="price"
        ></b-form-input>
        <b-form-invalid-feedback id="input-live-feedback">
           price must be greater than 10
    </b-form-invalid-feedback>
    </b-form-group>
      <b-form-group id="prodtags" label="Product Tags" label-for="prodtags">
        <!-- <b-form-input
          id="protags"
          v-model="product.tags"
          
          placeholder="Product Tags"
          class="mb-1"
        ></b-form-input> -->
         
    <b-form-tags input-id="prodtags" separator=" ,;" v-model="product.tags" class="mb-2"></b-form-tags>
        </b-form-group>
      
       <b-form-group id="prodimages" label="Product Images" label-for="prodimages">
      <b-form-file id="prodimages" ref='prodimages' @change="uploadImage"  multiple
       class="mt-3" plain></b-form-file>
    <b-button @click="$refs['prodimages'].reset()" size="sm" class="ml-2 mb-2">Reset</b-button>
      <div class="form-group d-flex">
       <div class="img-wrapp" v-for="(image, index) in product.images" :key="index">
        <b-img class="" width="120" height="100" thumbnail :src="image" :key="index"
           alt="image"></b-img> 
           <b-badge class="delete-img" @click="deleteImage(image,index)" >X</b-badge>
        <!-- <span class="delete-img" @click="deleteImage(image,index)">X</span> -->
          </div>
        </div>
    <!-- <div class="mt-3 d-flex   bg-dark" v-for="(image,index) in product.images ">
      <b-img class="" width="120" height="100" thumbnail 
       :src="image" :key="index"
       alt="Fluid image"></b-img>
     </div> -->
      </b-form-group>
      </b-col>
       </b-form-row>
       <div class ="float-right">  
        <b-button class="   d-inline" type="submit" variant="primary">Submit</b-button>
      <b-button class=" ml-3 " @click="cancelModal" variant="danger">Cancel</b-button>
        </div>
          </b-form>
    </b-overlay>

    
    </b-container>
  </b-modal>
</div>
    </div>

        
              <div class="col-md-4">
                  <img src="/img/svg/products.svg" alt="" class="img-fluid">
              </div>
            </div>
          </div>

</div>
</div>

</template>

<script>
//import jQuery from 'jquery';
import swal from 'sweetalert';
import {fb,db} from '../firebase';
import { VueEditor } from "vue2-editor";
 
export default{
name:"Products",
components:{
VueEditor
},
data() {
      return {
          showAdd:false,
          showOverlay:false,
          items:[],
          modalTitle:'Add Product',
          //products:[],     
          product: {
               name:'',
               desc:null,
               price:0,
               tags:[],
               images:[]

               },
          fields: [
          { key: 'name', sortable: true },
          { key: 'price', sortable: true },
           { key: 'tags', sortable: true },
           { key: 'actions', label: 'Actions' }
          ],
         
        editProd:{
            name:'',
            price:null,
            id:null
        },
        
        show: true
      }
    },

    firestore(){
      return {
        products: db.collection('products'),
      }
  },
    computed:{
        nameState(){
            return this.product.price>10 
        },
        tableData(){
          return  this.products.map(p=>{
                 let id=p.id
               let prod  =   p.data()
                 prod.id=id;
             // p.Actions=<b-button @click= "alert(`id is ${p.id}`)" variant ='danger'>Delete</b-button>;
              console.log('id is ',id)
              console.log('p is ',prod)
              return prod
             })
             
        }

    },
    created(){
        // this.getData();

    },
methods:{
  deleteImage(img,index){

      let image = fb.storage().refFromURL(img);

      this.product.images.splice(index,1);

      image.delete().then(function() {
        console.log('image deleted');
      }).catch(function(error) {
        // Uh-oh, an error occurred!
        console.log('an error occurred',error);
      });

    },
  uploadImage(e){
   
    let files =e.target.files
     if(files) {files.forEach(file =>{
       console.log('files upload',file);
     var uploadTask = fb.storage().ref(`products/${file.name}`).put(file);
    //storageRef.put(file);
    uploadTask.on('state_changed',(snapshot)=>{
      console.log(snapshot);
    },
    (error)=> {

  // A full list of error codes is available at
  // https://firebase.google.com/docs/storage/web/handle-errors
  switch (error.code) {
    case 'storage/unauthorized':
      console.log('error occured unauthorized')
      // User doesn't have permission to access the object
      break;

    case 'storage/canceled':
      console.log('error occured canceled')
      // User canceled the upload
      break;

    case 'storage/unknown':
      console.log('error occured unknown')
      // Unknown error occurred, inspect error.serverResponse
      break;
  }
},
    ()=>{
    
    uploadTask.snapshot.ref.getDownloadURL().then((downloadURL)=> {
      this.product.images.push(downloadURL)
    console.log('File available at', downloadURL);
  });
    }
  )

  })
     }

  },
    // watcher(){
    //     db.collection("products")
    // .onSnapshot((querySnapshot)=> {
    //      this.products = [];
    //     querySnapshot.forEach((doc) =>{
    //         // let prod =doc.data()
    //         // prod.id=doc.id
    //         this.products.push(doc);
    //     });
    //     console.log("Current prods: ", this.products.data().join(", "));
    // });
    // },
    onSubmit() {
        // evt.preventDefault()
        // let price = this.form.price;
        // if(isNaN(price))alert('price must be in digits');
        // else alert(JSON.stringify(this.form))
        this.showOverlay=true;
         if(!this.product.id){
        this.$firestore.products.add(this.product)
        .then((prod)=>{console.log('firstore saved',prod.id);
         this.showOverlay=false;
         this.cancelModal();
          this.$bvModal.msgBoxOk('Data Added successfully', {
          title: 'Confirmation',
          size: 'sm',
          buttonSize: 'sm',
          okVariant: 'success',
          headerClass: 'p-2 border-bottom-0',
          footerClass: 'p-2 border-top-0',
          centered: true
        })
          .then(value => {console.log('value confirm model',value)
           // this.boxOne = value
         //  this.watcher();
          })
         
         })
        .catch((err)=>{console.log('firstore errr',err);this.showOverlay=false})
    //     db.collection("products").add(this.product)
    //     .then(function(docRef) {
    //        console.log("Document written with ID: ", docRef.id);
    //     })
    //     .catch(function(error) {
    // console.error("Error adding document: ", error);
    //     });

    //     this.onReset();
         //this.showAdd=false;   
        // this.watcher();
        
         }

         else {
           console.log('in update');
            this.$firestore.products.doc(this.product.id).update(
                this.product
            //   {
            //   name:this.product.name?this.product.name:'',
            //  desc:this.product.desc?this.product.desc:'',
            //  price:this.product.price,
            //  tags:this.product.tags?this.product.tags:'',
            //  images:this.product.images?this.product.images:''
             
            // }
            )
            .then((prod)=>{console.log('prod updated',prod);
             this.showOverlay=false;
             this.cancelModal();
             this.$bvModal.msgBoxOk('Data updated  successfully', {
          title: 'Confirmation',
          size: 'sm',
          buttonSize: 'sm',
          okVariant: 'success',
          headerClass: 'p-2 border-bottom-0',
          footerClass: 'p-2 border-top-0',
          centered: true
              })
                .then(value => {console.log('value confirm model',value)})

       })
       .catch((err)=>console.log('firstore errr',err))

         }
    },
  



      onReset() {
        // evt.preventDefault()
        // Reset our form values
        console.log('in reset');
       // this.product = {}
        
   
      },
//       getData(){
//           db.collection("products").get().then((querySnapshot) => {
//                this.products=[];
//     querySnapshot.forEach((doc) => {
//        console.log(`${doc.id} => ${doc.data()}`);
      
//       this.products.push(doc)
//     });
// });

 //   },
    deleteProduct(prod){
      //  alert(`product is ${prod.id}`)
      //this.$swal("Hello world!",prod.name);
      swal({
  title: "Are you sure?",
  text: "Once deleted, you will not be able to recover this products!",
  icon: "warning",
  buttons: true,
  dangerMode: true,
})
.then((willDelete) => {
  if (willDelete) {
    this.$firestore.products.doc(prod.id).delete()
    .then(()=>{swal(`Poof! ${prod.name} file has been deleted!`, {
      icon: "success",
    });
    
  })
    // swal(`Poof! ${prod.name} file has been deleted!`, {
    //   icon: "success",
    // });
  } else {
   // swal("Your imaginary file is safe!");
  }
   });
      
 },
    editProduct(prod){
      this.modalTitle ="Edit Product"
        this.showOverlay=false;
        this.product =prod;
        if(!this.product.images) this.product.images=[];
        console.log('prod is',this.product.name,this.product.price,this.product.desc,this.product.tags,this.product.images)
        //object.assign({},{name:prod.name,price:prod.price})
     this.$bvModal.show('prod-modal');
     console.log('in edit',this.product);

    },
    cancelModal(){
      console.log('in cancel model')
      this.modalTitle="Add Product"
      this.showOverlay=false;
      this.product={name:'',desc:'',tags:[],images:[],price:0}
      console.log('prod is ',this.prod)
      this.$refs['prod-modal'].hide()
    }
    
   }

}


</script>
<style scoped lang="scss">
.img-wrapp{
  position: relative;
}
.img-wrapp span.delete-img{
    position: absolute;
    top: -14px;
    left: -2px;
}
.img-wrapp span.delete-img:hover{
  cursor: pointer;
}
.ps{
  height:100px;
};
.bg-info{
    background-color:darkgray !important ;

}
.bg-panel{
    background-color: darkgray;
}

</style>
