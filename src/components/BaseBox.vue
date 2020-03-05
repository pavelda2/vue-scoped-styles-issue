<template>
  <div class="base-box">
    <slot/>
  </div>
</template>

<script>
export default {
  name: "BaseBox"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.base-box {
  background: #ccc;
  padding: 0.5rem;
}
</style>
