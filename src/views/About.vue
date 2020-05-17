
/* eslint-disable */


<template>
  <div class="about">
    <h1>This is an about page</h1>
   <!-- Button trigger modal -->
<button type="button" @click="show" ref="b1" id="bmodal" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
  Launch demo modal
</button>
<button type="button" @click="show" id="bmodal2" class="btn btn-primary"  >
  Launch demo modal22
</button>

<div class="lorel">
 <perfect-scrollbar>
<p>
Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
 when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
 It has survived not only five centuries, but also the leap into electronic typesetting, 
 remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
 sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like 
 Aldus PageMaker including versions of Lorem Ipsum.

Why do we use it?
It is a long established fact that a reader will be distracted by the readable content of a page
 when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
  distribution of letters, as opposed to using 'Content here, content here', making it look like
   readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as
    their default model text, and a search for 'lorem ipsum' will uncover many web sites still
     in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes
      on purpose (injected humour and the like).
</p>
</perfect-scrollbar>
</div>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

  
  </div>
</template>

<script>
//import jQuery from 'jquery';
console.log("hi");
window.name="kan"
export default{
name:"About",

methods:{
   show(){
     console.log("in show method");
     console.log('in windows',window)
    // jQuery( "#bmodal" ).html( html.join( "jjjj" ) );
    // window.$("#bmodal").css("color",'red');
    this.$refs.b1.style.color="yellow"
     console.log('b1 is ', this.$refs)
      var bm2 = document.querySelector("#bmodal2");
      console.log('bm2 is',bm2)
      // bm2[0].style.color="yellow";
      document.querySelector("#bmodal2").style.backgroundColor = "red";

    

   }

}

}
</script>
<style scoped lang="scss">
.ps{
  height:100px;
}

</style>
