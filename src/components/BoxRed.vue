<template>
  <base-box class="box-red">
    <slot/>
  </base-box>
</template>

<script>
import BaseBox from "../components/BaseBox";
export default {
  name: "BoxRed",
  components: {
    BaseBox
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box-red {
  background: red;
}
</style>
