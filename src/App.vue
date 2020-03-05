<template>
  <div id="app">
    <router-link to="/base">Base</router-link> | <router-link to="/red">Red</router-link>
    <br/>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: "App"
};
</script>
