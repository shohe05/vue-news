<template>
  <div class="news-link-component">
    <!--<img :src="news.thumnailUrl">-->
    <h3>{{ news.headLine }}</h3>
  </div>
</template>

<script>
export default {
  name: 'link',
  props: ['news'],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
