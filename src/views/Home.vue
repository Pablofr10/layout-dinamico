<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <Principal />
  </div>
</template>

<script>
// @ is an alias to /src
import Principal from "../components/Principal.vue";

export default {
  name: "Home",
  components: {
    Principal,
  },
};
</script>
