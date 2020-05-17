
/* eslint-disable */

<template>
  <div class="">
    <login></login>
   <hero></hero>
   <!-- <login2></login2> -->
   </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import Hero from "@/components/Hero.vue";
import Login from "@/components/Login.vue";
// import Login2 from "@/components/Login.vue";
export default {
  name: "Home",
  components: {
   Hero,
   Login,
   
  }
};
</script>
