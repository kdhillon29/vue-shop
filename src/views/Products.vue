
/* eslint-disable */


<template>
  
<div class="products">
      <div class="container">
          
        <div class="intro h-100">
            <div class="row  justify-content-center ">
             <div class="col-md-10">
            <div class="d-flex justify-content-between bg-info  ">
            <h3>Products Page</h3>
             <b-button class="" :pressed="true" v-show="!showAdd" @click="showAdd=!showAdd"
              variant ="primary">Add Product</b-button>
           <b-button class="mb-2 mr-2" v-show="showAdd"  @click="showAdd=!showAdd" variant ="link">Cancel</b-button>
           </div>
                    
                    <div class="addproduct" v-show="showAdd">
               <!-- <b-card-group deck> -->
      <b-card
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
      <b-form-group id="input1" label="Product Name" label-for="input-2">
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
     <b-form-text id="input-live-help">Price.</b-form-text>

      </b-form-group>
      <b-button class="mr-2" type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
          </b-form>
          </div>
         </b-card-text>
         </b-card>
         <div>
    
    </div>
    </div>
    <div class ="mt-2 ">
    <b-table
     show-empty
      small
      stacked="md"
    
       :fields="fields"
     
    
        :items="tableData" >
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

  <b-modal id="modal-1" title="Edit Product">
    
     <b-overlay :show="showOverlay" rounded="sm">
    <b-form @submit.prevent="onUpdate" @reset="onReset" v-if="show">
      <b-form-group id="input1" label="Product Name" label-for="input-2">
        <b-form-input
          id="prodname"
          v-model="editProd.name"
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
          v-model="editProd.price"
          required
          placeholder="price"
        ></b-form-input>
        <b-form-invalid-feedback id="input-live-feedback">
           price must be greater than 10
    </b-form-invalid-feedback>
     <b-form-text id="input-live-help">Price.</b-form-text>

      </b-form-group>
      <b-button class="mr-2" type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
          </b-form>
    </b-overlay>
  </b-modal>
</div>
    </div>

        
              <div class="col-md-2">
                  <img src="/img/svg/products.svg" alt="" class="img-fluid">
              </div>
            </div>
          </div>

</div>
</div>

</template>

<script>
//import jQuery from 'jquery';
import {db} from '../firebase'
export default{
name:"Products",
data() {
      return {
          showAdd:false,
          showOverlay:false,
          items:[],
          products:[],     
          fields: [
          { key: 'name', sortable: true },
          { key: 'price', sortable: true },
           { key: 'actions', label: 'Actions' }
          ],
         product: {
               name: '',
               price:null
               },
        editProd:{
            name:'',
            price:null,
            id:null
        },
        
        show: true
      }
    },
    computed:{
        nameState(){
            return this.product.price>10 ||this.editProd.price>=10
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
        this.getData();

    },
methods:{
    watcher(){
        //crud example
        db.collection("products")
    .onSnapshot((querySnapshot)=> {
         this.products = [];
        querySnapshot.forEach((doc) =>{
            // let prod =doc.data()
            // prod.id=doc.id
            this.products.push(doc);
        });
        console.log("Current prods: ", this.products.data().join(", "));
    });
    },
    onSubmit() {
        // evt.preventDefault()
        // let price = this.form.price;
        // if(isNaN(price))alert('price must be in digits');
        // else alert(JSON.stringify(this.form))
        
        db.collection("products").add(this.product)
        .then(function(docRef) {
           console.log("Document written with ID: ", docRef.id);
        })
        .catch(function(error) {
    console.error("Error adding document: ", error);
        });

        this.onReset();
        this.showAdd=false;
      //  this.getData();
      this.watcher();
    },
    onUpdate(){
        this.showOverlay=true;
        console.log('in update');
      db.collection('products').doc(this.editProd.id).update({
          name:this.editProd.name,
          price:this.editProd.price
      })
      .then((prod)=>{console.log('prod updated',prod);
      this.showOverlay=false;
      this.$bvModal.hide('modal-1');
       this.$bvModal.msgBoxOk('Data updated  successfully', {
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
           this.watcher();
          })
          .catch(err => {console.log('error is',err)
            // An error occurred
          })
      })
      .catch(error=>console.log('error in update',error))

// Remove the 'capital' field from the document
// var removeCapital = cityRef.update({
//     capital: firebase.firestore.FieldValue.delete()


    },
      onReset() {
        // evt.preventDefault()
        // Reset our form values
        this.product.price = ''
        this.product.name = ''
   
      },
      getData(){
          db.collection("products").get().then((querySnapshot) => {
               this.products=[];
    querySnapshot.forEach((doc) => {
       console.log(`${doc.id} => ${doc.data()}`);
      
      this.products.push(doc)
    });
});

    },
    deleteProduct(prod){
      //  alert(`product is ${prod.id}`)
      this.$bvModal.msgBoxConfirm('Are you sure?')
          .then(value => {
            if(value){
                db.collection("products").doc(prod.id).delete().then(()=> {
           
          //  this.$forceUpdate();
          this.watcher();
    console.log("Document successfully deleted!");
}).catch(function(error) {
    console.error("Error removing document: ", error);
});
            }
          })
          .catch(err => {
            console('err occured',err)
          })
      
    },
    editProduct(prod){
        this.showOverlay=false;
        this.editProd =prod;
        //object.assign({},{name:prod.name,price:prod.price})
     this.$bvModal.show('modal-1');
     console.log('in edit',this.editProd);

    }
    
   }



}
</script>
<style scoped lang="scss">
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
