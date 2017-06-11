<template>
  <div class="hello">
    <h1>Sample Component</h1>
    <h2>{{ msg }}</h2>
  </div>
</template>

<script>
export default {
  name: 'sample',
  data() {
    return {
      msg: 'This is Sample Component',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  body {
    background: #efefef;
  }
</style>
